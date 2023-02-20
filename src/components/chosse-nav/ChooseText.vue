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

  computed: {
    lightOn() {
      return this.$store.state.lightOn;
    },
    currentDemoFont() {
      return this.$store.state.currentDemoFont;
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
    currentDemoFont() {
      return this.$store.state.currentDemoFont;
    },
    // currentSrcFont() {
    //   return console.log(this.$store.state.currentSrcFont);
    //   // return "/src/assets/fonts/fonts/Barcelona.ttf";
    // },
  },
};
</script>
<style scoped>
@import "../../assets/fonts/font-face.css";
/* @font-face {
  font-family: "v-bind(currentDemoFont)";
  src: url(/src/assets/fonts/fonts/Alexa.ttf) format("truetype");
} */
/* @font-face {
  font-family: "Barcelona";
  src: url(/src/assets/fonts/fonts/Barcelona.ttf) format("truetype");
} */
.neon-text {
  font-family: v-bind(currentDemoFont), sans-serif;
  font-size: 40px;
  animation: pulsate 1.5s infinite alternate;
  border-radius: 2rem;
  padding: 0.4em;
  background-color: #333;
  color: v-bind(currentColorOff);
  text-shadow: v-bind(currentTextshadowOff);
}
.light-on {
  color: #fff;
  text-shadow: v-bind(currentColorOn);
}
</style>
