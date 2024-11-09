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
            component: () => import('./components/pages/Login.vue'),
        },
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('./components/pages/Register.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('./components/pages/Dashboard.vue'),
            children: [
                {
                    path: '/dashboard/user/main',
                    name: 'user_main',
                    component: () => import('./components/pages/dashboard/user/Main.vue'),
                },
                {
                    path: '/dashboard/user/events',
                    name: 'user_events',
                    component: () => import('./components/pages/dashboard/user/Events.vue'),
                },
                {
                    path: '/dashboard/admin/main',
                    name: 'admin_main',
                    component: () => import('./components/pages/dashboard/admin/Main.vue'),
                },
                {
                    path: '/dashboard/admin/users',
                    name: 'admin_users',
                    component: () => import('./components/pages/dashboard/admin/Users.vue'),
                },
                {
                    path: '/dashboard/admin/trophies',
                    name: 'admin_trophies',
                    component: () => import('./components/pages/dashboard/admin/Trophies.vue'),
                },
                {
                    path: '/dashboard/admin/events',
                    name: 'admin_events',
                    component: () => import('./components/pages/dashboard/admin/Events.vue'),
                }
            ]
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
