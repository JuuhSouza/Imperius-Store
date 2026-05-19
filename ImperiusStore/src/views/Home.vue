<template>
    <section>
        <Banner/>
    </section>
    
    <!-- <section >
        <CarrosselProdutos/>
    </section> -->

    <section class="produtos-destaque">
        <ProdutosCard/>
    </section>
</template>

<script>
import Banner from '../components/Home/Banner.vue'
import CarrosselProdutos from '../components/Home/CarrosselProdutos.vue';
/* import Produtos from '../components/Home/CarrosselProdutos.vue'; */
import ProdutosCard from '../components/Produtos/ProdutosCard.vue';

export default{
    components: {
        Banner, CarrosselProdutos , ProdutosCard
}}
</script>

<style>
.produtos-destaque{
    margin: 2rem;
}
</style>