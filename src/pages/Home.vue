<template>

    <!-- Header-->
    <header class="py-5">
        <div class="container px-lg-5">
            <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                <div class="m-4 m-lg-5">
                    <h1 class="display-5 fw-bold">A warm welcome!</h1>
                    <p class="fs-4">
                        Bootstrap utility classes are used to create this
                        jumbotron since the old component has been removed from
                        the framework. Why create custom CSS when you can use
                        utilities?
                    </p>
                    <a class="btn btn-primary btn-lg" href="#!"
                        >Call to action</a
                    >
                </div>
            </div>
        </div>
    </header>
    <!-- Page Content-->
    <section class="pt-4">
        <div class="container px-lg-5">
            <!-- Page Features-->
            <div class="row gx-lg-5">
                <MyFeature
                    v-for="feature in features"
                    :key="feature.icon"
                    :feature="feature"
                />
            </div>
        </div>
    </section>

</template>

<script>
import MyFeature from "./../components/home/MyFeature.vue";
export default {
    setup() {},
    data() {
        return {
            features: [
                {
                    icon: "bi bi-card-heading",
                    title: "Fresh new layout",
                    description:
                        "With Bootstrap 5, we've created a fresh new layout for this template!",
                },
                {
                    icon: "bi bi-cloud-download",
                    title: "Free to download",
                    description:
                        "As always, Start Bootstrap has a powerful collectin of free templates.",
                },
                {
                    icon: "bi bi-card-heading",
                    title: "Jumbotron hero header",
                    description:
                        "The heroic part of this template is the jumbotron hero header!",
                },
                {
                    icon: "bi bi-bootstrap",
                    title: "Feature boxes",
                    description:
                        "We've created some custom feature boxes using Bootstrap icons!",
                },
                {
                    icon: "bi bi-code",
                    title: "Simple clean code",
                    description:
                        "We keep our dependencies up to date and squash bugs as they come!",
                },
                {
                    icon: "bi bi-patch-check",
                    title: "A name you trust",
                    description:
                        "Start Bootstrap has been the leader in free Bootstrap templates since 2013! ",
                },
            ],
        };
    },
    components: {
        MyFeature,
    },
};
</script>

<style lang="css">
.feature {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    font-size: 2rem;
}
</style>
