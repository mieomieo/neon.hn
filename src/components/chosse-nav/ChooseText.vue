<template>
  <div class="">
    <label for=""> Type Here </label>
    <p
      contenteditable="true"
      class="bg-slate-200"
      type="text"
      @input="HandleInput"
      placeholder="Your Text"
    ></p>
  </div>
</template>
<script>
export default {
  methods: {
    HandleInput(event) {
      this.$store.commit("setTextInput", event.target.innerText);
    },
  },
};
</script>
<style scoped></style>
