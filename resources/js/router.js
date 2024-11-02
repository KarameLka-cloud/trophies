import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'not_found',
            component: () => import('./components/NotFound.vue'),
        },
        {
            path: '/',
            redirect: '/dashboard',
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('./components/auth/LoginComponent.vue'),
        },
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('./components/auth/RegisterComponent.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('./components/DashboardComponent.vue'),
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('isAuthenticated')) {
        if (to.name === 'login' || to.name === 'register') {
            return next();
        } else {
            return next({
                path: '/auth/login',
            });
        }
    }
    if (to.name === 'login' || to.name === 'register' && localStorage.getItem('isAuthenticated')) {
        return next({
            path: '/dashboard',
        });
    }
    next();
})

export default router;
