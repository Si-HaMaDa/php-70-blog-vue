<template>
    <!-- Page content-->
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-8">
                <!-- Post content-->
                <article>
                    <!-- Post header-->
                    <header class="mb-4">
                        <!-- Post title-->
                        <h1 class="fw-bolder mb-1">{{ user.name }}</h1>
                        <!-- Post meta content-->
                        <div class="text-muted fst-italic mb-2">
                            Posted on January 1, 2022 by Start Bootstrap
                        </div>
                        <!-- Post categories-->
                        <a
                            class="badge bg-secondary text-decoration-none link-light"
                            href="#!"
                            >Web Design</a
                        >
                        <a
                            class="badge bg-secondary text-decoration-none link-light"
                            href="#!"
                            >Freebies</a
                        >
                    </header>
                    <!-- Preview image figure-->
                    <figure class="mb-4">
                        <img
                            class="img-fluid rounded"
                            :src="`http://php-70-laravel.test/${user.image}`"
                            alt="..."
                        />
                    </figure>
                    <!-- Post content-->
                    <section class="mb-5">
                        <p class="fs-5 mb-4">
                            {{ user.bio }}
                        </p>
                    </section>
                </article>
            </div>
            <!-- Side widgets-->
            <SideWidget />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {},
        };
    },
    mounted() {
        console.log(`the component is now mounted.`);

        fetch("http://php-70-laravel.test/api/users/" + this.$route.params.id)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.success) {
                    this.user = json.data;
                } else {
                    alert(json.message);
                }
            });

        // fetch("http://php-70-laravel.test/api/users", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         name: "M",
        //         email: "admin@admintwo.com",
        //         password: 123456,
        //         bio: 'Message',
        //         age: 5,
        //     }),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8",
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));
    },
};
</script>
