import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index"; // 確保引入了 router

createApp(App).use(router).mount("#app");
