import { createApp } from 'vue';
import '../src/styles/index.css';
import App from './App.vue';
import router from "./router";
import store from './vuex/store.js';

const app = createApp(App);

app.use(store);

app.use(router);

app.mount('#app');