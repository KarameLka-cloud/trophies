<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <div class="container w-96 px-6 py-8 shadow-lg rounded-xl bg-white">
            <div class="flex w-full justify-center items-center mb-2">
                <img src="../../assets/medal.svg" alt="Логотип медаль" class="h-16">
            </div>
            <h2 class="text-4xl font-bold mb-4 text-center">Добро пожаловать!</h2>
            <p class="mb-2 text-center font-bold">Ещё нет аккаунта?
                <router-link to="register" class="text-blue-600 underline">Зарегистрируйтесь</router-link>
            </p>
            <p class="mb-8 text-center font-bold">
                <router-link to="#" class="text-blue-600 underline">Забыли пароль?</router-link>
            </p>

            <div class="container flex-col">
                <input type="email"
                       class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
                       placeholder="Эл. почта"
                       v-model="email"
                       @keyup.enter.prevent="login"
                >
                <input type="password"
                       class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
                       placeholder="Пароль"
                       v-model="password"
                       @keyup.enter.prevent="login"
                >
                <a href="#"
                   class="block py-2 px-4 w-full rounded-xl bg-cyan-600 text-white font-bold text-center hover:bg-cyan-400 transition duration-300 ease-in-out hover:shadow-md"
                   @click.prevent="login"
                >
                    Войти
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
import axios from "axios";

const router = useRouter();

let email = null;
let password = null;

function login() {
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/login', {
            email: email,
            password: password
        })
            .then(response => {
                // if (response.status === 204) {
                    localStorage.setItem('isAuthenticated', 'true');
                    localStorage.setItem('userEmail', JSON.parse(response.config.data).email);
                    // let email = JSON.parse(response.config.data).email;
                    // axios.get(`/api/users/${email}`)
                    //     .then(response => {
                    //         localStorage.setItem('userId', response.data[0].id);
                    //     });
                    router.push({name: 'dashboard'});
                // }
            })
    });
}
</script>

<style scoped>

</style>
