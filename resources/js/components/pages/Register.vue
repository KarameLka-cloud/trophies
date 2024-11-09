<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <div class="container w-96 px-6 py-8 shadow-lg rounded-xl bg-white">
            <h2 class="text-4xl font-bold mb-4 text-center">Регистрация!</h2>
            <p class="mb-8 text-center font-bold">Уже есть аккаунта?
                <router-link to="login" class="text-blue-600 underline">Войти</router-link>
            </p>

            <div class="container flex-col">
                <input type="text"
                       class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
                       placeholder="Фамилия"
                       v-model="last_name"
                >
                <input type="text"
                       class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
                       placeholder="Имя"
                       v-model="first_name"
                >
                <input type="email"
                       class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
                       placeholder="Эл. почта"
                       v-model="email"
                >
                <input type="password"
                       class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
                       placeholder="Пароль"
                       v-model="password"
                >
                <input type="password"
                       class="input-focus-hide-placeholder block w-full rounded-xl px-4 py-2 mb-4 text-black font-bold placeholder:italic placeholder:text-white focus:shadow-md focus:outline-none focus:bg-pink-400 bg-lime-600 hover:shadow-md transition duration-300 ease-in-out"
                       placeholder="Подтвердить пароль"
                       v-model="password_confirmation"
                >
                <input
                    type="submit"
                    class="block py-2 px-4 w-full rounded-xl bg-cyan-600 text-white text-center font-bold hover:bg-cyan-400 transition duration-300 ease-in-out hover:shadow-md cursor-pointer"
                    @click.prevent="register"
                    value="Регистрация"
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

let last_name = null;
let first_name = null;
let email = null;
let password = null;
let password_confirmation = null;

function register() {
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/register', {
            last_name: last_name,
            first_name: first_name,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        })
            .then(response => {
                if (response.status === 201) {
                    localStorage.setItem('isAuthenticated', 'true');
                    localStorage.setItem('userEmail', JSON.parse(response.config.data).email);
                    router.push({name: 'dashboard'});
                }
            })
    })
}
</script>

<style scoped>

</style>
