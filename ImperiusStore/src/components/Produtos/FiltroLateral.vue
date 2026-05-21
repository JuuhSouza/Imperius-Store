<template>
  <aside class="filtro-lateral">
    <div class="filtro-header">
      <span>Filtros</span>
      <button v-if="temFiltroAtivo" class="btn-limpar" @click="limparFiltros">
        Limpar tudo
      </button>
    </div>

    <div class="filtro-grupo">
      <h3 class="filtro-titulo">Cor</h3>
      <div class="filtro-cores">
        <button
          v-for="cor in coresDisponiveis"
          :key="cor.hex"
          class="filtro-circulo"
          :style="{ backgroundColor: cor.hex }"
          :class="{ ativo: filtros.cores.includes(cor.hex) }"
          :title="cor.nome"
          @click="toggleCor(cor.hex)"
        ></button>
      </div>
    </div>

    <div class="filtro-grupo">
      <h3 class="filtro-titulo">Faixa de preço</h3>
      <div class="filtro-opcoes">
        <label class="filtro-label">
          <input type="radio" name="preco" :value="null" v-model="filtros.faixaPreco">
          Todos os preços
        </label>
        <label v-for="faixa in faixasPreco" :key="faixa.label" class="filtro-label">
          <input type="radio" name="preco" :value="faixa" v-model="filtros.faixaPreco">
          {{ faixa.label }}
        </label>
      </div>
    </div>

    <div class="filtro-grupo">
      <h3 class="filtro-titulo">Ordenar por</h3>
      <div class="filtro-opcoes">
        <label v-for="opcao in opcoesOrdenacao" :key="opcao.value" class="filtro-label">
          <input type="radio" name="ordenacao" :value="opcao.value" v-model="filtros.ordenacao">
          {{ opcao.label }}
        </label>
      </div>
    </div>

  </aside>
</template>

<script>
export default {
  name: 'FiltroLateral',
  props: {
    produtos: {
      type: Array,
      required: true
    }
  },
  emits: ['filtros-alterados'],
  data() {
    return {
      filtros: {
        cores: [],
        faixaPreco: null,
        ordenacao: 'padrao'
      },

      faixasPreco: [
        { label: 'Até R$ 20',      min: 0,  max: 20   },
        { label: 'R$ 20 a R$ 25',  min: 20, max: 25   },
        { label: 'Acima de R$ 25', min: 25, max: 9999 },
      ],

      opcoesOrdenacao: [
        { label: 'Padrão',      value: 'padrao'     },
        { label: 'Menor preço', value: 'preco-asc'  },
        { label: 'Maior preço', value: 'preco-desc' },
        { label: 'Nome A→Z',    value: 'nome-asc'   },
      ]
    }
  },

  computed: {
    coresDisponiveis() {
      const mapa = new Map();
      this.produtos.forEach(p => {
        p.variacoes.forEach(v => {
          if (!mapa.has(v.hex)) {
            mapa.set(v.hex, { hex: v.hex, nome: v.cor });
          }
        });
      });
      return Array.from(mapa.values());
    },

    temFiltroAtivo() {
      return (
        this.filtros.cores.length > 0 ||
        this.filtros.faixaPreco !== null ||
        this.filtros.ordenacao !== 'padrao'
      );
    }
  },

  watch: {
    filtros: {
      deep: true,
      handler() {
        this.$emit('filtros-alterados', { ...this.filtros });
      }
    }
  },

  methods: {
    toggleCor(hex) {
      const i = this.filtros.cores.indexOf(hex);
      if (i === -1) this.filtros.cores.push(hex);
      else          this.filtros.cores.splice(i, 1);
    },

    limparFiltros() {
      this.filtros.cores = [];
      this.filtros.faixaPreco = null;
      this.filtros.ordenacao = 'padrao';
    }
  }
}
</script>

<style scoped>
.filtro-lateral {
  width: 200px;
  flex-shrink: 0;
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.filtro-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-title-text);
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-line-colors);
}

.filtro-grupo {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-line-colors);
}

.filtro-titulo {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-title-text);
  margin: 0;
}

.filtro-cores {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filtro-circulo {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s;
}

.filtro-circulo:hover { transform: scale(1.15); }

.filtro-circulo.ativo {
  box-shadow: 0 0 0 1px var(--border-colors),
              0 0 0 2px var(--border-colors);
    opacity: 0.5;
}

.filtro-opcoes {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filtro-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--color-title-text);
  cursor: pointer;
}

.filtro-label input[type="radio"] {
  accent-color: var(--input-color);
  cursor: pointer;
}

.btn-limpar {
  background: none;
  border: none;
  color: var(--cor-primaria);
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
}

.btn-limpar:hover { opacity: 0.7; }
</style>