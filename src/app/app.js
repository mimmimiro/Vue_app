import { createApp } from 'vue';
import { createStore} from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import store from '../store';
import routes from '../Routes';

const app_store = createStore(store); 

const app_router = createRouter({
	routes: routes,
	history: createWebHistory()

})



createApp(App)
.use(app_store)
.use(app_router)
.mount('#app'); 
