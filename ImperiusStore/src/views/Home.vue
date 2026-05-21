<template>
  <div>
    <section>
      <Banner/>
    </section>

    <div class="pagina-produtos">
      <FiltroLateral
        :produtos="produtos"
        @filtros-alterados="aplicarFiltros"
      />

      <div class="coluna-produtos">
        <p class="resultado-count">
          {{ produtosFiltrados.length }}
          {{ produtosFiltrados.length === 1 ? 'produto encontrado' : 'produtos encontrados' }}
        </p>

        <section class="produtos-destaque">
          <ProdutosCard
            v-for="produto in produtosFiltrados"
            :key="produto.id"
            :produto="produto"
          />
        </section>

        <div v-if="produtosFiltrados.length === 0" class="sem-resultado">
          <p>Nenhum produto encontrado com esses filtros.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Banner from '../components/Home/Banner.vue';
import ProdutosCard from '../components/Produtos/ProdutosCard.vue';
import FiltroLateral from '../components/Produtos/FiltroLateral.vue';
import { produtos } from '../data/produtos.js';

export default {
  components: { Banner, ProdutosCard, FiltroLateral },

  data() {
    return {
      produtos,
      filtrosAtivos: {
        cores: [],
        faixaPreco: null,
        ordenacao: 'padrao'
      }
    }
  },

  computed: {
    produtosFiltrados() {
      let lista = [...this.produtos];

      if (this.filtrosAtivos.cores.length > 0) {
        lista = lista.filter(p =>
          p.variacoes.some(v => this.filtrosAtivos.cores.includes(v.hex))
        );
      }

      if (this.filtrosAtivos.faixaPreco) {
        const { min, max } = this.filtrosAtivos.faixaPreco;
        lista = lista.filter(p => p.preco >= min && p.preco <= max);
      }

      if (this.filtrosAtivos.ordenacao === 'preco-asc')  lista.sort((a, b) => a.preco - b.preco);
      if (this.filtrosAtivos.ordenacao === 'preco-desc') lista.sort((a, b) => b.preco - a.preco);
      if (this.filtrosAtivos.ordenacao === 'nome-asc')   lista.sort((a, b) => a.nome.localeCompare(b.nome));

      return lista;
    }
  },

  methods: {
    aplicarFiltros(filtros) {
      this.filtrosAtivos = filtros;
    }
  }
}
</script>

<style scoped>
.pagina-produtos {
  display: flex;
  gap: 2rem;
  padding: 2rem 4rem;
  align-items: flex-start;
}

.coluna-produtos {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.resultado-count {
  font-size: 0.85rem;
  color: #888;
  margin: 0;
}

.produtos-destaque {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.sem-resultado {
  text-align: center;
  padding: 60px 0;
  color: #888;
}
</style>