<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ textForLocalFilter | toUppercase }}</p> <!-- local filter -->
                <p>{{ textForGlobalFilter | to-lowercase }}</p> <!-- global filter -->
                <p>{{ textForFilterChain | toUppercase | to-lowercase }}</p> <!-- filter chain -->
                <hr>
                <input v-model="textFilter">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <hr>
                <fruit-list></fruit-list>
            </div>
        </div>
    </div>
</template>

<script>
    import FruitList from './List.vue';
    export default {
        data() {
            return {
                textForLocalFilter: 'Local filter is applied',
                textForGlobalFilter: 'Global filter is applied',
                textForFilterChain: 'Filter chain is applied',
                fruits: ['apple', 'banana', "mango", 'melon'],
                textFilter: ''
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter((fruit) => {
                    return fruit.match(this.textFilter);
                });
            }
        },
        components: {
            FruitList
        }
    }
</script>

<style>

</style>
