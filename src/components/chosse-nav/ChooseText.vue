<template>
  <div>
    <label for=""> Type Here </label>
    <input class="bg-slate-200" type="text" v-model="input.text" />
    <div class="generate-text">
      <div class="neon-text" :class="{ 'light-on': lightOn }">
        {{ input.text }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    lightOn: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      input: {
        text: "Your Text",
      },
      isActive: true,
    };
  },
};
</script>
<style scoped>
.neon-text {
  font-size: 2rem;
  animation: pulsate 1.5s infinite alternate;
  /* border: 0.2rem solid #fff; */
  border-radius: 2rem;
  padding: 0.4em;
  /* box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe,
    0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe; */
}
.light-on {
  /* color: #ffffff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #bc13fe,
    0 0 82px #bc13fe, 0 0 92px #bc13fe, 0 0 102px #bc13fe, 0 0 151px #bc13fe; */
  font-family: "Neonderthaw", cursive;
  font-size: 15dfgpx;
  color: #ffffff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff3131,
    0 0 30px #ff3131, 0 0 40px #ff3131, 0 0 55px #ff3131, 0 0 75px #ff3131;
}
</style>
