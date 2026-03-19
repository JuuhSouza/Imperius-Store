<template>
    <header>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <nav>
        <img src="../assets/img/imperiusStore.png" alt="" class="logo">
        <ul>
            <li> <a href=""> Início</a> </li>
            <li> <a href=""> Promoções</a> </li>
            <li> <a href=""> Produtos</a> </li>
            <li> <a href=""><i class="fa-solid fa-cart-shopping"></i></a> </li>
        </ul>
    </nav>
    </header>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
::selection{
    background-color: rgba(255, 255, 255, 0.2);
}

.logo{
    width: 60px;
    height: 60px;
    margin-left: 20px;
}

header{
    z-index: 9999;
    padding: 0.9rem 0;
    top: 0;
    left: 0;
    position: absolute;
    position: fixed;
    width: 100%;
    border-bottom: 1px solid var(--border-navbar);
}

nav{
    background-color: var(--background-color-navbar);
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
}

nav ul{
    display: flex;
    list-style: none;
    align-items: center;
}

nav ul a{
    text-decoration: none;
    color: var(--color-a);
    padding: 0 1.5rem;
    transform: uppercase;
    font-weight: 480;
    font-size: 1.2em;
/*     text-shadow: 1px 1px 2px rgb(27, 27, 27);
 */    transition: all .3s ease;
}

nav ul a:hover{
    color: var(--color-a-hover);
}

</style>