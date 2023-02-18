<template>
  <div>
    <label for=""> Type Here </label>
    <input class="bg-slate-200" type="text" v-model="input.text" />
    <div class="generate-text">
      <div
        class="neon-text"
        :class="{
          'light-on': lightOn,
        }"
      >
        {{ input.text }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      input: {
        text: "Your Text",
      },
    };
  },

  computed: {
    lightOn() {
      return this.$store.state.lightOn;
    },
    currentColorOn() {
      return this.$store.state.currentColorOn;
    },
    currentColorOff() {
      return this.$store.state.currentColorOff.color;
    },
    currentTextshadowOff() {
      return this.$store.state.currentColorOff.textShadow;
    },
  },
};
</script>
<style scoped>
.neon-text {
  font-size: 40px;
  animation: pulsate 1.5s infinite alternate;
  border-radius: 2rem;
  padding: 0.4em;
  font-family: "Neonderthaw", cursive;
  background-color: #333;
  color: v-bind(currentColorOff);
  text-shadow: v-bind(currentTextshadowOff);
}
.light-on {
  font-family: "Neonderthaw", cursive;
  font-size: 40px;
  color: #fff;
  text-shadow: v-bind(currentColorOn);
}
</style>
