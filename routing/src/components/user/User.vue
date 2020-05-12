<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button
            class="btn btn-primary"
            @click="navigateToHome">
            Home
        </button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            // this.$router.push('/');
            // this.router.push({ path: '/', });
            /**
             * naming router
             */
            this.$router.push({ name: 'home' });
        },
    },
    beforeCreate() {
        console.log('user is loaded');
    },
    created() {
        console.log('user is created');
    }
}
</script>