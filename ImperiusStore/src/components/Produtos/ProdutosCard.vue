<template>
  <div class="card-produto" @click="abrirProduto(produto.id)">
    <span class="badge-artesanal">Artesanal</span>

    <div class="container-foto">
      <img :src="imagemExibida" :alt="produto.nome" loading="lazy">
    </div>

    <div class="conteudo">
      <h4 class="titulo-produto">{{ produto.nome }}</h4>
      
      <div class="precos">
        <span class="moeda">R$</span>
        <span class="valor">{{ produto.preco.toFixed(2) }}</span>
      </div>

      <div class="footer-card">
        <div class="opcoes-cores">
          <button 
            v-for="(item, index) in produto.variacoes" 
            :key="index"
            class="circulo-cor"
            :title="item.cor"
            :style="{ backgroundColor: item.hex }"
            :class="{ selecionado: indiceAtivo === index }"
            @click.stop="indiceAtivo = index"
            aria-label="Selecionar cor"
          ></button>
        </div>
        <span class="vendas-count">Novo</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const indiceAtivo = ref(0);

const produto = {
  id: '001',
  nome: "Coleira para pescoço estampada para cães",
  preco: 120.00,
  variacoes: [
    { cor: 'Vermelho', hex: '#FF0000', url: new URL('../../assets/img/coleira-vermelha.png', import.meta.url).href },
    { cor: 'Amarelo', hex: '#FFD700', url: new URL('../../assets/img/coleira-amarela.png', import.meta.url).href },
    { cor: 'Preto camuflado', hex: '#333333', url: new URL('../../assets/img/coleira-camufladaPreta.png', import.meta.url).href }
  ]
};

const imagemExibida = computed(() => produto.variacoes[indiceAtivo.value].url);

const abrirProduto = (id) => {
  window.open(`/produto/${id}`, '_blank');
};
</script>

<style scoped>

.card-produto {
  position: relative;
  width: 240px;
  background: var(--background-color);
  border-radius: 12px;
  border: 1px solid var(--cor-primaria);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.card-produto:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.08);
  border-color: var(--cor-primaria);
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
  background-color: red;
}

.container-foto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.conteudo {
  padding: 12px;
}

.titulo-produto {
  font-size: 0.95rem;
  color: var(--cor-texto);
  margin: 0 0 8px 0;
  font-weight: 500;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.precos {
  color: var(--cor-primaria);
  font-weight: 600;
  margin-bottom: 12px;
}

.moeda { font-size: 0.8rem; margin-right: 2px; }
.valor { font-size: 1.2rem; }

.footer-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f5f5f5;
  padding-top: 10px;
}

.opcoes-cores {
  display: flex;
  gap: 6px;
}

.circulo-cor {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid black;
  padding: 0;
  cursor: pointer;
  transition: 0.2s;
}

.circulo-cor.selecionado {
  box-shadow: 0 0 0 2px var(--cor-primaria), 0 0 0 4px var(--cor-primaria);
}

.vendas-count {
  font-size: 0.75rem;
  color: rgb(255, 255, 255);
}
</style>