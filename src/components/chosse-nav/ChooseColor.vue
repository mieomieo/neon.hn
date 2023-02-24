<template>
  <div class="flex flex-col">
    <div>CHOOSE COLOR</div>
    <div class="w-[200px] h-[300px] overflow-auto bg-orange-200">
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
      this.$store.commit("SetColor", item.id);
      //   console.log(colorOff);
    },
  },
};
</script>
