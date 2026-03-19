import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Produtos from '../components/Home/Produtos.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'Produtos',
        component: Produtos
    }
]

const router = createRouter({
    history: createWebHashHistory(), // HASH MODE funciona no GitHub Pages
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    },
})

export default router