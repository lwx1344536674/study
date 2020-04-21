module.exports = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('../components/login/login.vue')
    }
]
