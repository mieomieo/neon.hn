<template>
  <div class="flex">
    <div>
      <label for="">Real Distance(cm/inch):</label>
      <input
        type="number"
        @blur="handleInputDistance"
        @keyup.enter="handleInputDistance"
        class="bg-slate-200 w-[200px]"
      />
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      distance: 0,
      // neonTextSize: 0,
    };
  },
  methods: {
    handleInputDistance(e) {
      const distanceValue = e.target.value; // cm
      console.log("Real Distance:", distanceValue);
      const defaultDemoTextSize = 110; // cm
      const defaultBgWidth = 780; // px
      const demoTextWidth =
        (defaultBgWidth * defaultDemoTextSize) / distanceValue; // p
      const fontSize = this.getFontSizeByWidth(demoTextWidth, "Breathing"); // p)
      this.$store.commit("setDemoTextFontSize", fontSize);
      this.$store.commit("setRealDimension", distanceValue);
    },
    getFontSizeByWidth(maxWidth, font) {
      const text = this.$store.state.textInput;
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      context.font = `${maxfontSize}px ${font}`;
      var maxfontSize = 150;
      var increment = 1;
      while (maxfontSize > 0) {
        context.font = `${maxfontSize}px ${font}`;
        // console.log(context.font);
        var width = context.measureText(text).width;
        // console.log(width);
        // console.log(maxfontSize);

        if (width <= maxWidth) {
          console.log("max-font-zize:", maxfontSize);
          return (font = maxfontSize);
        }
        maxfontSize -= increment;
      }
      return (font = maxfontSize);
    },
  },
};
</script>
