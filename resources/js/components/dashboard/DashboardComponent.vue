<template>
    <div class="h-screen w-screen p-4">
        <div class="flex h-full shadow-md p-4 rounded-xl bg-white">
            <NavComponent/>
            <MainComponent/>
        </div>
    </div>
</template>

<script setup>
import NavComponent from "./NavComponent.vue";
import MainComponent from "./MainComponent.vue";
</script>

<style lang="scss" scoped>

</style>
