import { createApp } from "vue";
// import App from "./App.vue";
// import Home from "./pages/Home.vue";
import Blog from "./pages/Blog.vue";

import "./assets/main.css";

// Bootstrap core JS
import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";

import MyHeader from "./components/global/MyHeader.vue";
import MyFooter from "./components/global/MyFooter.vue";
import SideWidget from "./components/global/SideWidget.vue";

createApp(Blog)
    .component("MyHeader", MyHeader)
    .component("SideWidget", SideWidget)
    .component("MyFooter", MyFooter)
    .mount("#app");
