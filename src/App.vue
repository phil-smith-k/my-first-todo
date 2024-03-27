<template>
    <app-layout>
        <template #navigation>
            <app-navigation/>
        </template>
        <template #app-main>
            <router-view/>
        </template>
    </app-layout>
</template>

<script setup>
    import AppLayout from '@/views/AppLayout.vue';
    import AppNavigation from '@/components/AppNavigation.vue';
</script>

<style scoped>

</style>