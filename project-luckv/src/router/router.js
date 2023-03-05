import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import LoginPage from '../views/LoginPage.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainPage
    },
    {
        path: '/',
        name: 'Login',
        component: LoginPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
