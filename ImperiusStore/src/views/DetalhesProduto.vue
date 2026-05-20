<template>
  <div v-if="produto" class="detalhe">
    <img :src="produto.variacoes[indiceAtivo].url" :alt="produto.nome">

    <div class="info">
      <h1>{{ produto.nome }}</h1>
      <p>{{ produto.descricao }}</p>
      <span class="preco">R$ {{ produto.preco.toFixed(2) }}</span>

      <div class="cores">
        <button
          v-for="(item, index) in produto.variacoes"
          :key="index"
          class="circulo-cor"
          :style="{ backgroundColor: item.hex }"
          :class="{ selecionado: indiceAtivo === index }"
          @click="indiceAtivo = index"
          :title="item.cor"
        ></button>
      </div>

      <p class="cor-selecionada">Cor: {{ produto.variacoes[indiceAtivo].cor }}</p>

      <button class="btn-comprar">Adicionar ao carrinho</button>
    </div>
  </div>

  <div v-else class="nao-encontrado">
    <p>Produto não encontrado.</p>
    <router-link to="/">Voltar para a loja</router-link>
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
</script>

<style scoped>
.detalhe{
  max-width: 1200px;
  display: flex;
  gap: 20px;
  padding: 50px;
  margin-top: 4rem;
}

.detalhe img{
 width: 600px;
 height: 600px;
}

.info{
  display: flex;
  flex-direction: column;
  border: 2px solid red;
}

.info h1{
  font-size: 2rem;
  margin: 2rem;
  text-align: start;
  color: var(--title-card);
}

.info p{
  font-size: 1rem;
  margin: 2rem;
  margin-top: -1rem;
  text-align: start;
}

.info .preco{
  font-size: 1.5rem;
  margin: 2rem;
  margin-top: -1rem;
  text-align: start;
  color: var(--cor-primaria);
}

.cores{
  display: flex;
  gap: 10px;
  margin: 2rem;
}

.cores button{
  cursor: pointer;
  padding: 1rem;
  margin-top: -2rem;
  border: none;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.cores button:hover{
  opacity: 0.5;
}

.btn-comprar{
  color: rgb(255, 0, 0);
  border: none;
  padding: 1rem;
  margin: 12rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>