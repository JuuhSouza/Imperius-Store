<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
<section class="production-section">
    <div class="title">
            <h1>Conheça nossos produtos</h1>
        </div>

    <div class="container-card">  
        <div class="card-box"
            v-for="(produtos, index) in produtos"
            :key="index" 
            :class="'shape-' + (index % 3 + 1)"
            data-aos="fade-down-right">
            <div class="content">
                <i v-if="produtos.icon.startsWith('fa')" :class="produtos.icon"></i>
                <img v-else :src="produtos.icon" :alt="produtos.name">

                <p>{{ produtos.name }}</p>
            </div>     
        </div>      
    </div>      
</section>
</template>

<script>
export default {
    name: 'HardSkills',
    data() {
        return {
            produtos: [
                { name: 'Coleiras exclusivas', icon: 'fa-brands fa-css3-alt' },
                { name: 'Guias exclusivas', icon: 'fa-brands fa-vuejs' },
                { name: 'Camas exclusivas', icon: 'fa-brands fa-html5' },
                { name: 'Acessórios', icon: 'fa-brands fa-js' },
                /* { name: 'PostgreSQL', icon: 'https://img.icons8.com/carbon-copy/2x/postgresql.png' },
                { name: 'Java', icon: 'fa-brands fa-java' }, */
        ]
    }
  }
}

</script>

<style scoped>
.title h1{
    background-color: var(--background-color-card);
    text-align: center;
    font-size: 2.8em;
 /*    margin-top: -3em; */
    color: var(--title-color-card);
}
.container-card{
    background: var(--background-color-card-hardskill);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 0;
    gap: 40px 60px;
}

.card-box{
    position: relative;
    width: 300px;
    height: 300px;
   border: 2px solid red;
   border-radius: 10px;
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;transition: border-radius 0.5s ease-in-out, transform 0.3s ease !important;
}

.content{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 40px;
    gap: 15px;
}

.content img{
    width: 100%;
}

.content i{
    font-size: 8em;
    color: var(--icone-hardskill);
}

.content p{
    font-size: 1.5em;
    color: var(--icone-hardskill);
}

</style>