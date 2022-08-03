// 1. Import router functions
import { createRouter, createWebHistory } from "vue-router";

// 2. Define route components.
// Already have components.
import Home from "./pages/Home.vue";
import Blog from "./pages/Blog.vue";
import Contact from "./pages/Contact.vue";
import Single from "./pages/Single.vue";
import Users from "./pages/Users.vue";
import User from "./pages/User.vue";

// 3. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: "/", component: Home },
    { path: "/blog", component: Blog },
    { path: "/contact", component: Contact },
    { path: "/single/:id", component: Single },
    { path: "/users", component: Users },
    { path: "/user/:id", component: User },
];

// 4. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 5. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;
