<template>
    <section>
        <Banner/>
    </section>

    <section class="produtos-destaque">
        <ProdutosCard />
    </section>
</template>

<script>
import Banner from '../components/Home/Banner.vue'
import ProdutosCard from '../components/Produtos/ProdutosCard.vue';

export default{
    components: {
        Banner, ProdutosCard
}}
</script>

<style>
.produtos-destaque{
    margin: 2rem;
}
</style>