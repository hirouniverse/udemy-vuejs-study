<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Number of clicks: {{ clicks }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        // props: ['counter']
        computed: {
            ...mapGetters({ // spread operator: extract all of object as a key:value pair / this is not recognized since it's es6 syntax
                counter: 'doubleCounter',
                clicks: 'stringCounter'
            }),
            youCanDeclareOwnProperty() {
                return 'your own computed property'
            }
        },
        // {
        //     counter() {
        //         // this method is duplicated with Result.vue
        //         // return this.$store.state.counter * 2;

        //         /**
        //          * you can user getter
        //          */
        //         return this.$store.getters.doubleCounter;
        //     }
        // },
    }
</script>