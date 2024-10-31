<template>
    <div class="h-screen w-screen p-4">
        <div class="flex h-full shadow-md p-4 rounded-xl bg-white">
            <NavComponent/>
            <MainComponent/>
            dashboard
            <a href="#" @click.prevent="getData">Add</a>
        </div>
    </div>
</template>

<script setup>
import NavComponent from "@/components/dashboard/NavComponent.vue";
import MainComponent from "@/components/dashboard/MainComponent.vue";

function getData() {
    axios.get('/api/posts').then(response => {
        console.log(response.data);
    })
}
</script>

<style lang="scss" scoped>

</style>
