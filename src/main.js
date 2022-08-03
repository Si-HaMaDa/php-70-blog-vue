import { createApp } from "vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import Blog from "./pages/Blog.vue";
import Contact from "./pages/Contact.vue";
import Single from "./pages/Single.vue";

import "./assets/main.css";

// Bootstrap core JS
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";


import MyHeader from "./components/global/MyHeader.vue";
import MyFooter from "./components/global/MyFooter.vue";
import SideWidget from "./components/global/SideWidget.vue";

createApp(Home)
    .component("MyHeader", MyHeader)
    .component("SideWidget", SideWidget)
    .component("MyFooter", MyFooter)
    .mount("#app");
