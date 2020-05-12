<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                // this.$emit('updated', 1);
                console.error('CANNOT MUTATE STATE DIRECTLY IF YOU USE MODUEL: ' + this.$store.state.counter);
                this.$store.state.counter++;
                console.error('AFTER MUTATE VALUE DIRECTLY ' + this.$store.state.counter);
            },
            decrement() {
                // this.$emit('updated', -1);
                console.error('CANNOT MUTATE STATE DIRECTLY IF YOU USE MODUEL: ' + this.$store.state.counter);
                this.$store.state.counter--;
                console.error('AFTER MUTATE VALUE DIRECTLY ' + this.$store.state.counter);
            }
        }
    }
</script>