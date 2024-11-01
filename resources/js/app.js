import './bootstrap';
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import router from './router';
import App from './components/App.vue';

const pinia = createPinia();
const app = createApp({});

app.component('app', App);

app.use(pinia);
app.use(router);
app.mount('#app');
