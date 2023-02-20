<template>
  <h3>Choose Font</h3>
  <ul>
    <li
      class="p-2 mb-3 border-solid border-2 flex justify-center"
      v-for="item in fonts"
      :key="item.label"
      @click="SelectFont(item.label)"
    >
      <img class="w-20 p-1" :src="item.preview" alt="${item.label} " />
      <!-- {{ item.label }} -->
    </li>
  </ul>
  <!-- <img class="w-20" src="../../assets/fonts/preview/amanda.svg" alt="123 " /> -->
</template>
<script>
import { fonts } from "../../constants.js";

export default {
  data() {
    return {
      fonts,
    };
  },
  methods: {
    SelectFont(item) {
      this.$store.commit("SetFont", item);
    },
  },
  computed: {},
};
</script>
