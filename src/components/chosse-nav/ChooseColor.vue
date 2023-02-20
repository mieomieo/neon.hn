<template>
  <div class="choose-color">
    <h3>CHOOSE COLOR</h3>
    <div class="color-items">
      <ul class="items">
        <li
          v-for="item in defaultColors"
          :key="item.label"
          class="cursor-pointer p-2 w-3/6 bg-slate-500 rounded-md m-3"
          @click="selectColor(item)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { colors as defaultColors } from "../../constants";

export default {
  data() {
    return {
      defaultColors,
    };
  },
  methods: {
    selectColor(item) {
      this.$store.commit("SetColor", item);
      //   console.log(colorOff);
    },
  },
};
</script>
