<template>
  <div class="flex">
    <div>
      <label for="">Real Distance:</label>
      <input
        type="number"
        min="0"
        max="400"
        @blur="handleDimensionOfDemoText"
        @keyup.enter="handleDimensionOfDemoText"
        class="bg-slate-200 w-[100px]"
      />
      <button
        @click="changeUnitToIn"
        :style="{ backgroundColor: selectUnit === 'inch' ? '#eac7b9' : '' }"
        class="px-2 ml-1 rounded-xl"
      >
        in
      </button>
      <button
        @click="changeUnitToCm"
        :style="{ backgroundColor: selectUnit === 'cm' ? '#eac7b9' : '' }"
        class="px-2 ml-1 rounded-xl"
      >
        cm
      </button>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      realDistanceFromImg: 0,
      selectUnit: "inch",
      // neonTextSize: 0,
    };
  },
  methods: {
    changeUnitToIn() {
      this.selectUnit = "inch";
      this.$store.commit("SetCurrentUnit", this.selectUnit);
    },
    changeUnitToCm() {
      this.selectUnit = "cm";
      this.$store.commit("SetCurrentUnit", this.selectUnit);
    },
    handleDimensionOfDemoText(e) {
      this.realDistanceFromImg = e.target.value; // cm
      // console.log("Real Distance:", realDistanceFromImg, "cm");
      this.$store.commit("setRealDimensionInput", this.realDistanceFromImg);
      const widthOfDemoText = this.$store.state.currentWidthDemoText; // px
      const defaultBgWidth = 780; // px
      const widthDimensionOfDemoText = //proportional : ti le thuan
        Math.round(
          (this.realDistanceFromImg * widthOfDemoText) / defaultBgWidth
        ); // cm
      // const heightDimensionOfDemoText=  widthDimensionOfDemoText*calc.height /widthOfDemoText;
      const heightDimensionOfDemoText =
        (widthDimensionOfDemoText * 50) / widthOfDemoText; //cm
      const dimensionsOfDemoText = {
        width: widthDimensionOfDemoText,
        height: heightDimensionOfDemoText,
      };
      console.log("dimensionsOfDemoText:", dimensionsOfDemoText);
      this.$store.commit("setRealDimensionInput", this.realDistanceFromImg);
      this.$store.commit("setDimensionOfDemoText", dimensionsOfDemoText);
    },
  },
};
</script>
