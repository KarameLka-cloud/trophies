<template>
    <div>
        <div>
            dashboard
        </div>

        <div>
            <a href="#" @click.prevent="getData">Add</a>
        </div>
        <div>
            <div v-for="user in users">
                {{ user.first_name }} {{ user.last_name }}
            </div>
        </div>
        <a href="#" @click="getName">Name</a>
        <a href="#" @click.prevent="getEvents">Events</a>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

let users = ref(null);

function getData() {
    axios.get('/api/posts').then(response => {
        console.log(response);
    })
}

function getUsers() {
    axios.get('/api/users')
        .then(response => {
            users.value = response.data;
        })
}

function getName() {
    let email = 'user@mail.ru';
    axios.get(`/api/users/${email}`).then(response => {
        console.log(response.data);
    })
}

function getEvents() {
    axios.get(`/api/events`).then(response => {
        console.log(response.data);
    })
}

onMounted(() => {
    getUsers();
})
</script>

<style lang="scss" scoped>

</style>
