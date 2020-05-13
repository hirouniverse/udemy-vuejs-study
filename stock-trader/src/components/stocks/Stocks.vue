<template>
    <div class="row" style="padding: 10px;">
        <app-stock v-for="stock in stocks" :key="stock.id">
            <template slot="id">{{ stock.id }}</template>
            <template slot="title">{{ stock.name }}</template>
            <template slot="content">{{ stock.price }}</template>
        </app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';
export default {
    data() {
        return {
            stocks: [
                { id: 1, name: 'BMW', price: 110 },
                { id: 2, name: 'Google', price: 200 },
                { id: 3, name: 'Apple', price: 250 },
                { id: 4, name: 'Twitter', price: 100 },
                { id: 5, name: 'Mercari', price: 60 },
            ],
        }
    },
    components: {
        appStock: Stock
    }
}
</script>