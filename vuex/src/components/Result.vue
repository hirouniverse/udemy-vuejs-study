<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        // props: ['counter']
        computed: {
            // if you write all of getters, the component will be huge
            // os you can use mapGetters method as AnotherResult.vue
            counter() {
                // this method is duplicated with AnotherResult.vue
                // return this.$store.state.counter * 2;

                /**
                 * you can user getter
                 */
                return this.$store.getters.doubleCounter;
            },
            clicks() {
                return this.$store.getters.stringCounter;
            }
        },
    }
</script>