<template>
    <div class="col-lg-6 col-xxl-4 mb-5">
        <div class="card bg-light border-0 h-100">
            <div class="card-body text-center p-4 p-lg-5">
                <div
                    class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"
                >
                    <i :class="feature.icon"></i>
                </div>
                <h2 class="fs-4 fw-bold">{{ feature.title }}</h2>
                <p class="mb-0">
                    {{ feature.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        feature: Object,
    },
};
</script>
