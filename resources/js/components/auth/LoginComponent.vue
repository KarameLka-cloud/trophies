<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <div class="container w-96 px-6 py-8 shadow-lg rounded-xl bg-white">
            <div class="flex w-full justify-center items-center mb-2">
                <img src="../../assets/medal.svg" alt="Логотип медаль" class="h-16">
            </div>
            <h2 class="text-4xl font-bold mb-4 text-center">Добро пожаловать!</h2>
            <p class="mb-8 text-center font-bold">Ещё нет аккаунта?
                <router-link to="register" class="text-blue-600 underline">Зарегистрируй</router-link>
            </p>

            <div class="container flex-col">
                <input type="email"
                       class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
                       placeholder="Эл. почта"
                       v-model="email"
                >
                <input type="password"
                       class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
                       placeholder="Пароль"
                       v-model="password"
                       @keyup.enter.prevent="login"
                >
                <input type="submit"
                       class="block py-2 px-4 w-full rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-400 transition duration-300 ease-in-out hover:shadow-md"
                       @keyup.enter.prevent="login"
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

let email = null;
let password = null;

function login() {
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/login', {
            email: email,
            password: password
        }).then(response => {
            console.log(response);
            console.log(response.status === 204);
            router.push('/dashboard');
        })
    });
}

function getData() {
    axios.get('/api/posts').then(response => {
        console.log(response.data);
    })
}

function logout() {
    axios.post('/logout').then(response => {
        console.log(response);
    })
}
</script>

<style scoped>

</style>
