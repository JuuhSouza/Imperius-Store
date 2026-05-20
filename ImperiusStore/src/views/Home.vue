<template>
  <div>
    <section>
      <Banner/>
    </section>

    <section class="produtos-destaque">
      <ProdutosCard
        v-for="produto in produtos"
        :key="produto.id"
        :produto="produto"
      />
    </section>
  </div>
</template>
<script>
import Banner from '../components/Home/Banner.vue'
import ProdutosCard from '../components/Produtos/ProdutosCard.vue';
import { produtos} from '../data/produtos.js';

export default{
    components: {
        Banner, ProdutosCard
    },
    data() {
        return {
            produtos
        }
    }
}
</script>

<style>
.produtos-destaque{
    margin:  0 25rem;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;  
}
</style>