<template>
    <div>
        <app-button 
            v-for="option in props.actionOptions" 
            @click="option.action" 
            :display="option.display" 
            :iconName="option.iconName()"
        />
    </div>
</template>

<script setup>
    import AppButton from '@/components/AppButton.vue';

    const props = defineProps({
        actionOptions: Array
    });

    console.log(props.actionOptions);
</script>

<style scoped>
    * > * + * {
        margin-left: 1em;
    }
</style>