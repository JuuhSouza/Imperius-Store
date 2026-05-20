<template>
  <div class="card-wrapper">
    <router-link :to="`/produto/${props.produto.id}`" class="card-produto">
      <span class="badge-artesanal">Artesanal</span>

      <div class="container-foto">
        <img :src="imagemExibida" :alt="props.produto.nome" loading="lazy">
      </div>

      <div class="conteudo">
        <h4 class="titulo-produto">{{ props.produto.nome }}</h4>

        <div class="precos">
          <span class="moeda">R$</span>
          <span class="valor">{{ props.produto.preco.toFixed(2) }}</span>
        </div>
      </div>
    </router-link>

    <div class="footer-card">
      <div class="opcoes-cores">
        <button
          v-for="(item, index) in props.produto.variacoes"
          :key="index"
          class="circulo-cor"
          :title="item.cor"
          :style="{ backgroundColor: item.hex }"
          :class="{ selecionado: indiceAtivo === index }"
          @click="indiceAtivo = index"
          aria-label="Selecionar cor"
        ></button>
      </div>
      <span class="vendas-count">Novo</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  produto: {
    type: Object,
    required: true
  }
});

const indiceAtivo = ref(0);

const imagemExibida = computed(() => props.produto.variacoes[indiceAtivo.value].url);


</script>

<style scoped>
.card-wrapper {
  position: relative;
  width: 240px;
  border-radius: 12px;
  border: 1px solid var(--cor-primaria);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
}

.card-wrapper:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(128, 128, 128, 0.08);
  border-color: var(--cor-primaria);
}

.card-produto {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.badge-artesanal {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.9);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #555;
  z-index: 1;
  text-transform: uppercase;
}

.container-foto {
  width: 100%;
  height: 240px;
  background-color: #f5f5f5;
}

.container-foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.conteudo {
  padding: 12px 12px 0 12px;
}

.titulo-produto {
  font-size: 0.95rem;
  color: var(--color-title-text);
  margin: 0 0 8px 0;
  font-weight: 500;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.precos {
  font-weight: 600;
  margin-bottom: 12px;
}

.moeda {
  font-size: 0.8rem;
  margin-right: 2px;
  color: var(--cor-valor);
}

.valor {
  font-size: 1.2rem;
  color: var(--cor-valor);
}

.footer-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-border-top);
  padding: 10px 12px 12px 12px;
}

.opcoes-cores {
  display: flex;
  gap: 6px;
}

.circulo-cor {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #dddddd00;
  padding: 0;
  cursor: pointer;
  transition: 0.2s;
}

.circulo-cor.selecionado {
  box-shadow: 0 0 0 2px var(--background-color, #fff), 0 0 0 4px var(--cor-primaria);
}

.vendas-count {
  font-size: 0.75rem;
  color: #999;
}
</style>