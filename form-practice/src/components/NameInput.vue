<template>
  <div>
    <label for="firstName">First Name</label>
    <input
        type="text"
        id="firstName"
        class="form-control"
        :value="firstName"
        @input="changeName(true, $event)">
    <label for="lastName">Last Name</label>
    <input
        type="text"
        id="lastName"
        class="form-control"
        :value="lastName"
        @input="changeName(false, $event)">
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    changeName(isFirst, event) {
      let name = '';
      if (isFirst) {
        name = event.target.value + ' ' + this.lastName;
      } else if (!isFirst) {
        name =  this.firstName + ' ' + event.target.value;
      }
      this.$emit('input', name);
    }
  },
  computed: {
    firstName() {
      return this.value.split(' ')[0];
    },
    lastName() {
      return this.value.split(' ')[1];
    }
  }
}
</script>