<template>
  <div>
    <input
      type="range"
      @input="handleRange"
      min="0"
      max="600"
      value="300"
      step="1"
      class="slider"
    />
    <div class="testBox bg-slate-500">
      Demo Text Width: {{ currentWidthDemoText }}
    </div>
  </div>
</template>
<script scoped>
export default {
  components: {},
  computed: {
    currentWidthDemoText() {
      // console.log(this.$store.state.currentWidthDemoText);
      return this.$store.state.currentWidthDemoText;
    },
  },
  methods: {
    handleRange(e) {
      console.log("handleRange");
      const currentWidthDemoText = e.target.value;
      this.$store.commit("setWidthDemoText", e.target.value);
      const defaultBgWidth = 780; // px
      const widthDimensionOfDemoText = //proportional : ti le thuan
        Math.round(
          (this.$store.state.realDimensionInput * currentWidthDemoText) /
            defaultBgWidth
        ); // cm

      const heightDimensionOfDemoText =
        (widthDimensionOfDemoText * 50) / currentWidthDemoText; //cm
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
.testBox {
  /* width: v-bind(currentWidthDemoText + "px"); */
  width: v-bind(currentWidthDemoText + "px");
  height: auto;
}
input[type="range"] {
  width: 800px;
}
</style>
