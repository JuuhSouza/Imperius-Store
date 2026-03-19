<template>
    <section>
        <Banner/>
    </section>
    
    <section>
        <Produtos/>
    </section>
</template>

<script>
import Banner from '../components/Home/Banner.vue'
import Produtos from '../components/Home/Produtos.vue';

export default{
    components: {
        Banner, Produtos
}}
</script>