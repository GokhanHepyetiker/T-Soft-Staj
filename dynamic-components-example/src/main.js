// import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { createApp } from 'vue'




// Vue.config.productionTip = false;
const app = createApp(App)
app.use(router);
app.mount('#app');