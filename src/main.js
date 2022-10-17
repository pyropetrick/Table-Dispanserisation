import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import TheModal from "@/components/UI/TheModal";

const app = createApp(App);
app.component('TheModal', TheModal)
app.use(store);
app.mount('#app');
