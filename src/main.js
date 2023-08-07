import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/store.js";
import { notivue } from "notivue";
import "notivue/notifications.css"
import "notivue/animations.css"
import "../src/styles/index.css";

const app = createApp(App);

app.use(notivue, {
    position: 'top',
    pauseOnHover: true,
    limit: 5,
    clearOnSwipe:true,
    duration: 5000,
  })

app.use(store);

app.use(router);

app.mount("#app");