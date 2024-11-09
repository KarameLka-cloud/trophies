<template>
    <div class="h-screen w-screen p-4">
        <div class="flex h-full shadow-md p-4 rounded-xl bg-white">
            <NavComponent/>
            <MainComponent/>
        </div>
    </div>
</template>

<script setup>
import NavComponent from "./dashboard/Nav.vue";
import MainComponent from "./dashboard/Main.vue";
</script>

<style lang="scss" scoped>

</style>
