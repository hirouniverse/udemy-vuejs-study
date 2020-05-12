<template>
    <div class="container">
        <quote-progress-bar :itemNumber="quotes.length" :maxQuote="maxQuote"></quote-progress-bar>
        <quote-input @quoteAdded="addQuote"></quote-input>
        <quote-list :quotes="quotes" @quoteClicked="deleteQuote"></quote-list>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a quote to delete it!</div>
            </div>
        </div>
        <!-- <progress-bar :itemNumber="quotes.length"></progress-bar>
        <quote-input @QuoteAdded="addQuote($event)"></quote-input>
        <quote-list :quotes="quotes" @quoteClicked="deleteQuote($event)"></quote-list>
        <footer-view></footer-view> -->
    </div>
</template>

<script>
    import QuoteList from './components/QuoteList.vue';
    import QuoteInput from './components/QuoteInput.vue';
    import QuoteProgressBar from './components/QuoteProgressBar.vue';
    export default {
        components: {
            QuoteList,
            QuoteInput,
            QuoteProgressBar
        },
        data() {
            return {
                quotes: [],
                maxQuote: 10,
            }
        },
        methods: {
            addQuote(quote) {
                if (this.quotes.length >= this.maxQuote) {
                    return alert('Please delete Quotes first!');
                }
                this.quotes.push({
                    id: Date.now(),
                    content: quote,
                });
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        }
    }
</script>

<style>
</style>
