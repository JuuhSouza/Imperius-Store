<template>
  <div>
    <div v-if="produto" class="detalhe">
      <div class="galeria">
        <div class="imagem-principal">
          <transition name="fade" mode="out-in">

            <video
              v-if="itemAtivo.tipo === 'video'"
              :key="'video-' + indiceAtivo"
              :src="itemAtivo.url"
              controls
              class="midia-principal"
            ></video>

            <iframe
              v-else-if="itemAtivo.tipo === 'youtube'"
              :key="'yt-' + indiceAtivo"
              :src="itemAtivo.url"
              class="midia-principal"
              title="video"
              allowfullscreen
            ></iframe>

            <img
              v-else
              :key="'img-' + indiceAtivo"
              :src="itemAtivo.url"
              :alt="itemAtivo.alt || itemAtivo.cor"
            >
          </transition>
        </div>

        <div class="thumbnails">
          <button
            v-for="(item, index) in produto.variacoes"
            :key="'cor-' + index"
            class="thumb"
            :class="{ ativa: indiceAtivo === index }"
            @click="indiceAtivo = index"
            :title="item.cor"
          >
            <img :src="item.url" :alt="item.cor">
          </button>

          <button
            v-for="(item, index) in produto.midia"
            :key="'midia-' + index"
            class="thumb thumb-midia"
            :class="{ ativa: indiceAtivo === produto.variacoes.length + index }"
            @click="indiceAtivo = produto.variacoes.length + index"
            :title="item.legenda"
          >
            <div v-if="item.tipo === 'video' || item.tipo === 'youtube'" class="thumb-play">
              ▶
            </div>
            <img v-else :src="item.url" :alt="item.legenda">
          </button>
        </div>
      </div>
      
      <div class="info">
        <span class="badge">Artesanal</span>
        <h1>{{ produto.nome }}</h1>
        <p class="descricao">{{ produto.descricao }}</p>

        <span class="preco">R$ {{ produto.preco.toFixed(2) }}</span>

        <div class="secao-cores">
          <p class="label-cor">
            Cor selecionada: <strong>{{ produto.variacoes[indiceCor].cor }}</strong>
          </p>
          <div class="cores">
            <button
              v-for="(item, index) in produto.variacoes"
              :key="index"
              class="circulo-cor"
              :style="{ backgroundColor: item.hex }"
              :class="{ selecionado: indiceCor === index }"
              :title="item.cor"
              @click="selecionarCor(index)"
            ></button>
          </div>
        </div>

        <button class="btn-comprar">Adicionar ao carrinho</button>
      </div>

    </div>

    <div v-else class="nao-encontrado">
      <p>Produto não encontrado.</p>
      <router-link to="/">Voltar para a loja</router-link>
    </div>
  </div>

  <div class="container-descricao">
    <h1>{{ produto.nome }}</h1>
    <p>{{ produto.midia[0]?.descricaoMidia }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { produtos } from '../data/produtos.js';

const route = useRoute();

const produto = computed(() =>
  produtos.find(p => p.id === route.params.id)
);

const indiceAtivo = ref(0);
const indiceCor = ref(0);

const itemAtivo = computed(() => {
  const p = produto.value;
  if (!p) return null;

  // se o índice está dentro das variações de cor
  if (indiceAtivo.value < p.variacoes.length) {
    return { ...p.variacoes[indiceAtivo.value], tipo: 'foto' };
  }

  // senão está na mídia extra
  const indiceMidia = indiceAtivo.value - p.variacoes.length;
  return p.midia?.[indiceMidia] || null;
});

function selecionarCor(index) {
  indiceAtivo.value = index;
  indiceCor.value = index;
}
</script>

<style scoped>
.detalhe {
  max-width: 1100px;
  display: flex;
  gap: 48px;
  padding: 50px;
  margin: 4rem auto;
}

.galeria {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
}

.imagem-principal {
  width: 500px;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
  border: 1px solid var(--color-border-top, #eee);
}

.imagem-principal img,
.midia-principal {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.thumb {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid transparent;
  padding: 0;
  cursor: pointer;
  background: var(--background-thumb, #f5f5f5);
  transition: border-color 0.2s;
  flex-shrink: 0;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb.ativa {
  border-color: var(--cor-primaria);
}

.thumb-midia {
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumb-play {
  color: #fff;
  font-size: 1.4rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.badge {
  display: inline-block;
  background: rgba(0,0,0,0.06);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  width: fit-content;
}

.info h1 {
  font-size: 1.8rem;
  color: var(--color-title-text);
  line-height: 1.3;
  margin: 0;
}

.descricao {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.7;
  margin: 0;
}

.preco {
  font-size: 2rem;
  font-weight: 700;
  color: var(--cor-primaria);
}

.secao-cores {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.label-cor {
  font-size: 0.9rem;
  color: #555;
  margin: 0;
}

.cores {
  display: flex;
  gap: 10px;
}

.circulo-cor {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid transparent;
  padding: 0;
  cursor: pointer;
  transition: all 0.2s;
}

.circulo-cor:hover {
  opacity: 0.8;
  transform: scale(1.1);
}

.circulo-cor.selecionado {
  box-shadow: 0 0 0 2px var(--background-color, #fff),
              0 0 0 4px var(--cor-primaria);
}

.btn-comprar {
  margin-top: auto;
  padding: 14px 32px;
  background: var(--cor-primaria);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  width: 100%;
}

.btn-comprar:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.nao-encontrado {
  text-align: center;
  padding: 80px;
}

.nao-encontrado a {
  color: var(--cor-primaria);
}
</style>