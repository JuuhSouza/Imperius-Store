import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DetalhesProduto from '../views/DetalhesProduto.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/produto/:id',
        name: 'Produto',
        component: DetalhesProduto,
        props: true
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