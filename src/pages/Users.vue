<template>
    <!-- Page header with logo and tagline-->
    <header class="py-5 bg-light border-bottom mb-4">
        <div class="container">
            <div class="text-center my-5">
                <h1 class="fw-bolder">Welcome to User Home!</h1>
                <p class="lead mb-0">
                    A Bootstrap 5 starter layout for your next User homepage
                </p>
            </div>
        </div>
    </header>
    <!-- Page content-->
    <div class="container">
        <div class="row">
            <!-- User entries-->
            <div class="col-lg-8">
                <!-- Nested row for non-featured User users-->
                <div class="row">
                    <UserUnit
                        v-for="user in users"
                        :key="user.title"
                        :user="user"
                    />
                </div>
            </div>
            <!-- Side widgets-->
            <SideWidget />
        </div>
    </div>
</template>

<script>
import UserUnit from "../components/user/UserUnit.vue";

export default {
    setup() {},
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: "M",
                    bio: "M",
                    image: "users/avatar.png",
                },
            ],
        };
    },
    components: {
        UserUnit,
    },
    mounted() {
        console.log(`the component is now mounted.`);
        fetch("http://php-70-laravel.test/api/users")
            .then((response) => response.json())
            .then((json) => {
                console.log(json.data);
                this.users = json.data;
            });
    },
};
</script>
