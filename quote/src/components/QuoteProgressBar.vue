<template>
  <div class="row">
    <div class="col-sm-12">
    <h2>Quotes Added</h2>
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{width: this.width}" :aria-valuenow="itemNumber" aria-valuemin="0" :aria-valuemax="totalNumber">
          <template v-if="itemNumber !== 0">
            <p>{{ itemNumber }} / {{ totalNumber }}</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemNumber', 'maxQuote'],
  data() {
    return {
      totalNumber: 10
    };
  },
  computed: {
    width() {
      return ((this.itemNumber / this.totalNumber) * 100) + '%';
    }
  }
}
</script>

<style scoped>
</style>