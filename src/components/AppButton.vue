<template>
    <button @click="props.action" class="app-btn">
        <font-awesome-icon :icon="props.iconName"></font-awesome-icon>
    </button>
</template>

<script setup>

    const props = defineProps({
        iconName: String,
        action: Function,
    });

</script>

<style>

    .app-btn {
        border: none;
        box-shadow: var(--box-shadow);
        background-color: var(--color-background-1);
        border-radius: 50%;
        height: 2em;
        width: 2em;
        cursor: pointer;
        transition: opacity 500ms;
    }

    .app-btn:hover {
        opacity: 0.5;
    }

</style>