<template>
    <div class="col-sm-6 col-md-4">
        <div class="card mb-3">
            <div class="card-header bg-success text-white font-weight-bold">
                <h5>
                    {{ stock.name }}
                    <small>( Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
                </h5>
            </div>
            <div class="card-body bg-light text-black">
                <div class="row">
                    <div class="col-6 col-sm-6 col-md-6">
                        <input
                            type="number"
                            min="0"
                            class="form-control"
                            :class="{'border': insufficientQuantity, 'border-danger': insufficientQuantity}"
                            placeholder="Quantity"
                            v-model.number="quantity">
                    </div>
                    <div class="col-3 offset-3 col-sm-3 offset-sm-2 col-md-3">
                        <button
                            class="btn"
                            :class="{'btn-success': !insufficientQuantity, 'btn-light': insufficientQuantity}"
                            :disabled="( insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity))"
                            @click="sell">
                                {{ insufficientQuantity ? 'No Enough Stock' : 'Sell' }}
                        </button>
                    </div>
                </div>
                <div class="float-left">
                </div>
                <div class="float-right">  
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        stock: {},
    },
    data() {
        return {
            quantity: 0,
        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity;
        }
    },
    methods: {
        ...mapActions([
            // you shouldn't put the same function name with methods here otherwise
            // it calls methods again and again inside the methods.
            'sellStock',
        ]),
        sell() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            /**
             * error because I don't pass parameter
             * 
             * this.sellStock();
             */

            this.sellStock(order);
            this.quantity = 0;
            
        }
    }
}
</script>