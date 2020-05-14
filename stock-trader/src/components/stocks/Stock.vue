<template>
    <div class="col-sm-6 col-md-4">
        <div class="card mb-3">
            <div class="card-header bg-primary text-white font-weight-bold">
                <h5>
                    {{ stock.name }}
                    <small>( Price: {{ stock.price }} )</small>
                </h5>
            </div>
            <div class="card-body bg-light text-black">
                <div class="row">
                    <div class="col-6 col-sm-6 col-md-6">
                        <input
                            type="number"
                            min="0"
                            class="form-control"
                            :class="{ 'border': insufficientFunds, 'border-danger': insufficientFunds }"
                            placeholder="Quantity"
                            v-model.number="quantity">
                    </div>
                    <div class="col-3 offset-3 col-sm-3 offset-sm-2 col-md-3">
                        <button
                            class="btn btn-success"
                            :disabled="( insufficientFunds || quantity <= 0 || !Number.isInteger(quantity))"
                            @click="buy">
                                {{ insufficientFunds ? 'No Enough Funds' : 'Buy'}}
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
export default {
    props: {
        stock: {
            type: Object,
            default: {
                id: 'unknown',
                name: 'unknown',
                price: 0,
            }
        },
    },
    data() {
        return {
            quantity: 0,
        }
    },
    computed: {
        funds() {
            return this.$store.getters.myFunds;
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buy() {
            if (this.quantity <= 0) {
                alert('please input valid quantity.');
                return;
            }
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };
            
            console.log(order);
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }
}
</script>