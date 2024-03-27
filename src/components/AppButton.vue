<template>
    <button v-if="props.display ? props.display() : true" @click="props.action" class="app-btn">
        <slot></slot>
    </button>
</template>

<script setup>

    const props = defineProps({
        action: Function,
        display: Function
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