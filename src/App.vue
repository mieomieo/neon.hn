<template>
  <div class="w-3/4 mx-auto text-center flex justify-between">
    <!-- <ul
      class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
      id="tabs-tab"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <a
          href="#tabs-home"
          class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
          id="tabs-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#tabs-home"
          role="tab"
          aria-controls="tabs-home"
          aria-selected="true"
          >Text</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          href="#tabs-profile"
          class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
          id="tabs-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#tabs-profile"
          role="tab"
          aria-controls="tabs-profile"
          aria-selected="false"
          >Font</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          href="#tabs-messages"
          class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
          id="tabs-messages-tab"
          data-bs-toggle="pill"
          data-bs-target="#tabs-messages"
          role="tab"
          aria-controls="tabs-messages"
          aria-selected="false"
          >COLOR</a
        >
      </li>
    </ul> -->
    <div class="choose-nav">
      <ChooseText />
      <div class="choose__nav--select flex">
        <ChooseColor />
        <ChooseFont />
      </div>
    </div>
    <ShowImage @toggleSwitch="handleSwitch" />
  </div>
</template>
<script>
// import HeaderApp from "./components/HeaderApp.vue";
import ShowImage from "./components/show-nav/ShowImage.vue";
import ChooseText from "./components/chosse-nav/ChooseText.vue";
import ChooseColor from "./components/chosse-nav/ChooseColor.vue";
import ChooseFont from "./components/chosse-nav/ChooseFont.vue";

export default {
  components: {
    ShowImage,
    ChooseText,
    ChooseColor,
    ChooseFont,
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
