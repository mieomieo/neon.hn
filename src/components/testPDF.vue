<template>
  <button @click="Handle" class="px-5 py-2 bg-slate-600 rounded-lg">
    Save
  </button>
</template>

<script scoped>
export default {
  computed: {
    demoText() {
      return this.$store.state.textInput;
    },
    currentDemoFont() {
      return this.$store.state.currentDemoFont;
    },
    currentDemoTextFontSize() {
      return this.$store.state.currentDemoTextFontSize;
    },
  },
  methods: {
    Handle() {
      var draw = SVG().size(1920, 1080);
      var text = draw
        .text(this.demoText)
        .font({
          family: this.currentDemoFont,
          size: this.currentDemoTextFontSize,
        })
        .move(960, 540)
        .data("name", `${this.currentDemoFont}_CN`); // Thêm thuộc tính data-name với giá trị là tên font family.
      console.log("checking data name:", `${this.currentDemoFont}_CN`);
      // Xuất SVG đến file vector có thể mở trên AI
      var svgString = draw.svg();
      var blob = new Blob([svgString], { type: "image/svg+xml" });
      saveAs(blob, `${this.demoText}.svg`);
    },
  },
};
</script>
<style scoped>
@import "../assets/fonts/font-face.css";
</style>
