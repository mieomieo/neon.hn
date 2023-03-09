<template>
  <div class="flex flex-col">
    <div>CHOOSE COLOR</div>
    <div class="w-[300px] h-[300px] overflow-auto bg-slate-200">
      <div class="color-items">
        <ul class="items grid grid-cols-3 gap-4 place-items-center">
          <li
            v-for="item in defaultColors"
            :key="item.label"
            class="cursor-pointer p-2 w-full h-full bg-slate-100 rounded-md shadow-lg"
            @click="selectColor(item)"
          >
            <img :src="`${item.src}`" alt="" class="w-10 h-10 m-auto" />
            <p class="text-xs">{{ item.label }}</p>
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
