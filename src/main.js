import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faXmark, faPencil, faUndo, faHouse, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'
import router from './router'

const app = createApp(App)

library.add(faCheck, faXmark, faPencil, faUndo, faHouse, faLayerGroup);

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
