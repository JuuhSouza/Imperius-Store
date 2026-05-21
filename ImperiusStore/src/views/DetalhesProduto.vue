<template>
  <div>
    <section>
      <DescricaoProdutos/>
    </section>
  </div>
</template>

<script>
import DescricaoProdutos from '../components/Produtos/DescricaoProdutos.vue';
import { produtos} from '../data/produtos.js';

export default{
    components: {
        DescricaoProdutos
    },
    data() {
        return {
            produtos
        }
    }
}
</script>