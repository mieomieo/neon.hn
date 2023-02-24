<template>
  <div class="flex flex-col">
    <div>CHOOSE FONT</div>
    <div class="w-[200px] h-[300px] overflow-auto">
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
    </div>
  </div>
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
