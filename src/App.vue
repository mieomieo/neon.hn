<template>
  <div class="w-3/4 mx-auto text-center flex justify-between">
    <ChooseText :lightOn="isActiveLight" />
    <ShowImage @toggleSwitch="handleSwitch" />
    <!-- <HedaerApp /> -->
  </div>
</template>
<script>
// import HeaderApp from "./components/HeaderApp.vue";
import ShowImage from "./components/show-nav/ShowImage.vue";
import ChooseText from "./components/chosse-nav/ChooseText.vue";
export default {
  components: {
    ShowImage,
    ChooseText,
  },
  data() {
    return {
      isActiveLight: true,
    };
  },
  methods: {
    handleSwitch(e) {
      this.isActiveLight = e;

      console.log(typeof this.isActiveLight);

      console.log(e);
      console.log("this.isActiveLight = ", this.isActiveLight);
    },
  },
};
</script>
<style scoped>
:root {
  --dark: #212121;
  --light: #f3f3f3;
  --font: "Odibee Sans", cursive;
}
</style>
