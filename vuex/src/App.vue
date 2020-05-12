<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <!-- no need to pass props -->
                <!-- <app-result :counter="counter"></app-result> -->
                <app-result></app-result>
                <hr>
                <app-another-result></app-another-result>
                <hr>
                <!-- <app-counter @updated="counter += $event"></app-counter> -->
                <app-counter></app-counter>
                <hr>
                <app-another-counter></app-another-counter>
                <hr>
                <app-action-counter></app-action-counter>
                <hr>
                <input type="text" v-model="value"> <!-- you cannot directly mutate (you can use getter and setter of computed property for realizing this)-->
                <input type="text" :value="value" @input="updateValue"> <!-- you can fire event and dispatch action -->
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import ActionCounter from './components/ActionCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';

    export default {
        // data() {
        //     return {
        //         counter: 0
        //     }
        // },
        computed: {
            value() {
                return this.$store.getters.value;
            },
            /**
             * you can use computed property for v-model
             * by using getter and setter
             * but this is rarely used
             */
            // value() {
            //     get() {
            //         return this.$store.getters.value;
            //     },
            //     set(value) {
            //         this.$store.dispatch('updateValue', value);
            //     }
            // }
        },
        methods: {
            updateValue(event) {
                this.$store.dispatch('updateValue', event.target.value);
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter,
            appActionCounter: ActionCounter
        }
    }
</script>

