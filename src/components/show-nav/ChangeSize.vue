<template>
  <div>
    <input
      ref="valueSize"
      type="range"
      @input="handleRange"
      min="0"
      max="600"
      value="300"
      step="1"
      @mousedown="handleActiveRange"
      @mouseup="removeActiveRange"
      @touchstart="handleActiveRange"
      @touchend="removeActiveRange"
      class="progress"
      :style="{
        background: `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${this.value}%, #fff ${this.value}%, white 100%)`,
      }"
    />
  </div>
</template>
<script scoped>
import throttle from "lodash.throttle";

export default {
  data() {
    return {
      isActiveInputRange: false,
      value: 50,
    };
  },
  computed: {
    currentWidthDemoText() {
      // console.log(this.$store.state.currentWidthDemoText);
      return this.$store.state.currentWidthDemoText;
    },
    currentHeightOfDemoText() {
      return this.$store.state.currentHeightOfDemoText;
    },
  },
  watch: {
    currentHeightOfDemoText(newValue, oldValue) {
      const heightDimensionOfDemoText = Math.round(
        this.$store.state.currentDimensionOfDemoText.height *
          (newValue / oldValue)
      );
      this.$store.commit(
        "setNewHeightDimensionDemoText",
        heightDimensionOfDemoText
      );
    },
  },
  methods: {
    handleActiveRange() {
      this.isActiveInputRange = true;
      this.$store.commit("setCurrentInputRange", this.isActiveInputRange);
    },
    removeActiveRange() {
      this.isActiveInputRange = false;
      this.$store.commit("setCurrentInputRange", this.isActiveInputRange);
    },
    handleRange(e) {
      console.log("handleRange");
      const currentWidthDemoText = e.target.value;
      this.value = Math.round(e.target.value / 6); //cusstom for input range
      this.$store.commit("setWidthDemoText", e.target.value);
      const defaultBgWidth = 780; // px
      const widthDimensionOfDemoText = //proportional : ti le thuan
        Math.round(
          (this.$store.state.realDimensionInput * currentWidthDemoText) /
            defaultBgWidth
        ); // cm

      const heightDimensionOfDemoText = Math.round(
        (widthDimensionOfDemoText * this.currentHeightOfDemoText) /
          currentWidthDemoText
      ); //cm
      const dimensionsOfDemoText = {
        width: widthDimensionOfDemoText,
        height: heightDimensionOfDemoText,
      };

      this.$store.commit("setDimensionOfDemoText", dimensionsOfDemoText);
    },
  },
};
</script>
<style scoped>
.progress {
  background: linear-gradient(
    to right,
    #82cfd0 0%,
    #82cfd0 40%,
    #fff 40%,
    #fff 100%
  );
  /* border: solid 2px #82cfd0; */
  border-radius: 8px;
  height: 7px;
  width: 200px;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
}

.progress::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  -webkit-appearance: none;
  cursor: ew-resize;
  background: #82cfd0;
}
</style>
