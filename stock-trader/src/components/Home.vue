<template>
    <div class="row" style="padding: 10px;">
        <div class="col-12 col-sm-12 col-md-12">
            <h1>Trade or View your Portfolio</h1>
            <h6>You may Save & Load your Data</h6>
            <h6>Click on 'End Day' to begin a New Day!</h6>
            <hr>
            <strong>Your Funds: {{ funds | currency }}</strong>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.myFunds;
            }
        }
    }
</script>
