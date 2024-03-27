<script setup>
   import AppButton from '@/components/AppButton.vue';  
   import { useRouter } from 'vue-router'

   const router = useRouter();

   function navigateTo(routeName) {
        router.push({ name: routeName });
   }
</script>
 
<template>
     <!-- v-for -->
     <!-- v-if v-else -->
     <!-- v-pre v-once -->
     <!-- id -->
     <!-- ref key -->
     <!-- v-model -->
     <!-- attrs -->
     <!-- events -->
     <!-- v-html v-text -->
     <nav>
        <div class="nav-container">
            <app-button :action="() => navigateTo('Todo')">
                <font-awesome-icon :icon="`fa-house`"></font-awesome-icon>
            </app-button>
            <app-button :action="() => navigateTo('Lists')">
                <font-awesome-icon :icon="`fa-layer-group`"></font-awesome-icon>
            </app-button>
        </div>
     </nav>
</template>
 
<style scoped>
    nav {
        padding: 1rem;
        margin-bottom: 1rem;
        box-shadow: var(--box-shadow);
    }

    .nav-container {
        display: flex;
        align-items: middle;
    }

    .nav-container > * + * {
        margin-left: 1rem;
    }
</style>