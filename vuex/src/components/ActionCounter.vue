<template>
    <div>
        <button class="btn btn-primary" @click="increment({amount: 100, by: 1000})">Increment</button>
        <button class="btn btn-primary" @click="decrement({amount: 50, by: 2000})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ]),
            increment(payload) {
                this.$store.dispatch('asyncIncrement', payload)
            },
            decrement(payload) {
                this.$store.dispatch('asyncDecrement', payload)
            },
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