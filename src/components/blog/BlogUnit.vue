<template>
    <div class="col-lg-6">
        <!-- Blog post-->
        <div class="card mb-4">
            <a href="single.html"
                ><img class="card-img-top" :src="post.image" alt="..."
            /></a>
            <div class="card-body">
                <!-- <div class="small text-muted">January 1, 2022</div> -->
                <h2 class="card-title h4">{{ post.title }}</h2>
                <p class="card-text">
                    {{ post.content }}
                </p>
                <router-link class="btn btn-primary" to="/single"
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
        post: Object,
    },
};
</script>
