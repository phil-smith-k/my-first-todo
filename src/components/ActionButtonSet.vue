<template>
    <div>
        <app-button 
            v-for="option in props.actionOptions" 
            @click="option.action" 
            :display="option.display" 
            :iconName="option.iconName()"
        >
            <font-awesome-icon v-slot :icon="option.iconName()"/>
        </app-button>
    </div>
</template>

<script setup>
    import AppButton from '@/components/AppButton.vue';

    const props = defineProps({
        actionOptions: Array
    });
</script>

<style scoped>
    * > * + * {
        margin-left: 1em;
    }
</style>