import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Todo',
        component: () => import('@/views/TodoView.vue'),
    },
    {
        path: '/lists',
        name: 'Lists',
        component: () => import('@/views/ListView.vue'),
    }
  ]
})

export default router


// import { createRouter, createWebHistory } from 'vue-router';  
// import sourceData from '@/data.json';
// import Home from '@/views/Home.vue';

// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home,
//     },
//     {
//         path: '/destination/:id/:slug',
//         name: 'destination.show',
//         component: () => import('@/views/DestinationShow.vue'),
//         props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
//         beforeEnter(to, from) {
//             var existing = sourceData.destinations.find(dest => dest.id === parseInt(to.params.id));
//             if (!existing) {
//                 return { 
//                     name: 'notFound',
//                     params: { pathMatch: to.path.split('/').slice(1) },
//                     query: to.query,
//                     hash: to.hash,
//                 }
//             }
//         },
//         children: [
//             {
//                 path: ':experienceSlug',
//                 name: 'experience.show',
//                 component: () => import('@/views/ExperienceShow.vue'),
//                 props: (route) => ({ ...route.params, id: parseInt(route.params.id)})
//             }
//         ]
//     },
//     {
//         path: '/:pathMatch(.*)*',
//         name: 'notFound',
//         component: () => import('@/views/NotFound.vue'),
//     }
// ];

// const router = createRouter({
//     history : createWebHistory(),
//     routes 
// });

// export default router;