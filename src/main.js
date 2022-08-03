import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";

import "./assets/main.css";

// Bootstrap core JS
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import MyHeader from "./components/global/MyHeader.vue";
import MyFooter from "./components/global/MyFooter.vue";
import SideWidget from "./components/global/SideWidget.vue";

createApp(App)
    .component("MyHeader", MyHeader)
    .component("SideWidget", SideWidget)
    .component("MyFooter", MyFooter)
    // 5. Create and mount the root instance and Make sure to _use_ the router instance to make the whole app router-aware
    .use(router)
    .use(VueAxios, axios)
    .mount("#app");
