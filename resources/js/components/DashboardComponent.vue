<template>
    <div class="h-screen w-screen p-4">
        <div class="flex h-full shadow-md p-4 rounded-xl bg-white">
            <NavComponent/>
            <MainComponent/>
            dashboard
            <a href="#" @click.prevent="getData">Add</a>
            <div v-for="user in users">
                {{ user.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
import NavComponent from "./dashboard/NavComponent.vue";
import MainComponent from "./dashboard/MainComponent.vue";
import {onMounted, ref} from "vue";

let users = ref(null);

function getData() {
    axios.get('/api/posts').then(response => {
        console.log(response.data);
    })
}

function getUsers() {
    axios.get('/api/users')
        .then(response => {
            console.log(response.data);
            users.value = response.data;
        })
}

onMounted(() => {
    getUsers();
})
</script>

<style lang="scss" scoped>

</style>
