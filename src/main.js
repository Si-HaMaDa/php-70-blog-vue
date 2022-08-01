import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";

import "./assets/main.css";

// Bootstrap core JS
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";

import MyFooter from "./components/global/MyFooter.vue";
import MyHeader from "./components/global/MyHeader.vue";

createApp(Home)
    .component("MyFooter", MyFooter)
    .component("MyHeader", MyHeader)
    .mount("#app");
