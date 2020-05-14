<template>
    <div class="row" style="padding: 10px;">
        <app-stock
            v-for="stock in stocks"
            :key="stock.id"
            :stock="stock">
        </app-stock>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';
export default {
    computed: {
        ...mapGetters({
            stocks: 'myStocks'
        })
    },
    components: {
        appStock: Stock
    }
}
</script>