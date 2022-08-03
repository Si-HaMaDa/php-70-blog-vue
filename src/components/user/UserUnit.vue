<template>
    <div class="col-lg-6">
        <!-- Blog user-->
        <div class="card mb-4">
            <router-link :to="`/user/${user.id}`"
                ><img
                    class="card-img-top"
                    :src="`http://php-70-laravel.test/${user.image}`"
                    alt="..."
            /></router-link>
            <div class="card-body">
                <!-- <div class="small text-muted">January 1, 2022</div> -->
                <h2 class="card-title h4">{{ user.name }}</h2>
                <p class="card-text">
                    {{ user.bio }}
                </p>
                <router-link class="btn btn-primary" :to="'/user/' + user.id"
                    >Read more →
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {},
    props: {
        user: Object,
    },
};
</script>
