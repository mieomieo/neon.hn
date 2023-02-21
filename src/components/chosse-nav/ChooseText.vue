<template>
  <div class="">
    <label for=""> Type Here </label>
    <input
      class="bg-slate-200"
      type="text"
      v-model="input.text"
      @input="HandleInput(input.text)"
    />
  </div>
</template>
<script global>
export default {
  components: {},
  data() {
    return {
      input: {
        text: "Your Text",
      },
    };
  },
  methods: {
    HandleInput(payload) {
      this.$store.commit("setTextInput", payload);
    },
  },
};
</script>
<style scoped></style>
