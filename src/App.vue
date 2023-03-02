<template>
  <!-- <header-app /> -->
  <div ref="abc" class="w-3/4 mx-auto text-center flex justify-between">
    <div class="flex flex-col">
      <ChooseSize class="mb-5" />
      <ShowImage />
    </div>
    <div class="choose-nav ml-5">
      <ChooseText />
      <div class="choose__nav--select mt-5 flex flex-col gap-5">
        <ChooseColor />
        <ChooseFont />
      </div>
    </div>
  </div>
  <Test class="mt-[300px] m-auto p-10" />
</template>
<script>
import HeaderApp from "./components/HeaderApp.vue";
import ShowImage from "./components/show-nav/ShowImage.vue";
import ChooseText from "./components/chosse-nav/ChooseText.vue";
import ChooseColor from "./components/chosse-nav/ChooseColor.vue";
import ChooseFont from "./components/chosse-nav/ChooseFont.vue";
import ChooseSize from "./components/chosse-nav/ChooseSize.vue";
import Test from "./components/Test.vue";
export default {
  components: {
    ShowImage,
    ChooseText,
    ChooseColor,
    ChooseFont,
    ChooseSize,
    HeaderApp,
    Test,
  },
  data() {
    return {
      isActiveLight: true,
    };
  },

  // beforeCreate() {
  //   console.log("before Create");
  //   console.log("isActiveLight", this.isActiveLight);
  // },
  // created() {
  //   console.log("Created");
  //   console.log("isActiveLight", this.isActiveLight);
  //   console.log("ref", this.$refs.abc);
  // },
  // beforeMount() {
  //   console.log("before Mount");
  //   console.log("ref", this.$refs.abc);
  // },
  // mounted() {
  //   console.log("mounted");
  //   console.log("ref", this.$refs.abc);
  // },
};
</script>
<style scoped></style>
