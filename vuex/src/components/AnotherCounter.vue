<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ]),
            youCanDeclareOwnMethod() {
                console.log('own method');
            }
            // increment() {
            //     // this.$emit('updated', 1);
            //     /**
            //      * use mutations to change the state
            //      */
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     // this.$emit('updated', -1);
            //     /**
            //      * use mutations to change the state
            //      */
            //     this.$store.commit('decrement');
            // }
        }
    }
</script>