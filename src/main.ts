import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "@/assets/css/index.css";

declare global {
  interface Window {
    ethereum: any;
  }
}

createApp(App).use(store).use(router).mount("#app");
