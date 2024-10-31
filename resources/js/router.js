import {createRouter, createWebHistory} from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/auth/login',
            name: 'login',
            component: import('./components/auth/LoginComponent.vue'),
        },
        {
            path: '/auth/register',
            name: 'register',
            component: import('./components/auth/RegisterComponent.vue'),
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: import('./components/DashboardComponent.vue'),
        }
    ]
})
