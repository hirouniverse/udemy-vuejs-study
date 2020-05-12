<template>
  <div class="row">
    <quote v-for="(quote, index) in quotes" :key="index" @click.native="deleteQuote(index)">
      <p>{{ quote.content }}</p>
    </quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  components: {
    Quote,
  },
  props: ['quotes'],
  methods: {
    deleteQuote(index) {
      this.$emit('quoteClicked', index);
    }
  }
}
</script>