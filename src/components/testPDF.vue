<template>
  <p id="DemoText">{{ demoText }}</p>
  <button @click="Handle" class="px-5 py-2 bg-slate-600 rounded-lg">
    Save
  </button>
</template>

<script scoped>
import {
  colors as defaultColors,
  fonts as defaultFonts,
} from "../constants.js";
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
    currentDimensionOfDemoText() {
      return this.$store.state.currentDimensionOfDemoText;
    },
    currentUnit() {
      return this.$store.state.currentUnit;
    },
    currentColorOff() {
      return this.$store.state.currentColorId;
      // return this.$store.state.currentColorOff.color;
    },
  },
  methods: {
    saveSvg(svgString, fileName) {
      var blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
      saveAs(blob, fileName);
    },
    rgbToHex(rgbString) {
      const rgbValues = rgbString.match(/\d+/g);
      const hexValues = rgbValues.map((value) => {
        const hex = Number(value).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      });
      return "#" + hexValues.join("");
    },
    // Successfully
    Handle() {
      const text = this.demoText;
      const currentFont = this.currentDemoFont;
      const url = defaultFonts.find((font) => font.label === currentFont).src;
      const colorId = this.currentColorOff;
      const color = defaultColors.find((x) => x.id === colorId).colorOff.color;
      console.log(color);
      const fill = this.rgbToHex(color);
      console.log(fill);
      const height = this.currentDimensionOfDemoText.width + this.currentUnit;
      const width = this.currentDimensionOfDemoText.height + this.currentUnit;
      opentype.load(url, function (err, font) {
        if (err) throw err;
        // Tạo đường viền từ font chữ
        const path = font.getPath(text, 0, 0, 100);

        // Tạo SVG element
        var draw = SVG().size(height, width);

        // Vẽ đường viền lên SVG element
        draw
          .stroke({
            width: 35,
            color: "#e6e6e6",
            "stroke-width": "30pt",
            linecap: "round",
            linejoin: "round",
          })
          .path(path.toPathData())
          // .stroke({ width: 1 })
          .fill(fill)
          .move(960, 540);

        // Xuất ra file SVG
        var svgString = draw.svg();
        var blob = new Blob([svgString], { type: "image/svg+xml" });
        saveAs(blob, "font.svg");
      });
    },
    //  Tạo ra rectangle cho khung
    // Handle() {
    //   // Tạo một bảng với Snap.svg
    //   var paper = Snap(800, 600);

    //   // Tạo một đối tượng văn bản và đặt nội dung
    //   var text = paper.text(50, 50, "Hello World!");

    //   // Thiết lập phong cách cho văn bản
    //   text.attr({
    //     "font-size": "36px",
    //     "font-family": "Arial",
    //   });

    //   // Tạo outlines cho văn bản
    //   var outlines = text.getBBox();

    //   // Vẽ đường viền của văn bản và thêm nó vào bảng
    //   var path = paper.path(outlines.path);
    //   path.attr({
    //     stroke: "#000",
    //     fill: "none",
    //   });
    //   var svg = paper.toString();

    //   // Lưu SVG vào một tệp
    //   this.saveSvg(svg, "outlines.svg");
    // },
    // Handle() {
    //   var draw = SVG().size(
    //     this.currentDimensionOfDemoText.width + this.currentUnit,
    //     this.currentDimensionOfDemoText.height + this.currentUnit
    //   );
    //   var text = draw
    //     .text(this.demoText)
    //     .font({
    //       family: this.currentDemoFont,
    //       // size: this.currentDemoTextFontSize,
    //       size: 1000,
    //     })

    //     .move(960, 540);
    //   text.stroke({
    //     width: 30,
    //     color: "#ff0000",
    //     "stroke-width": "30pt",
    //   });
    //   // Xuất SVG đến file vector có thể mở trên AI
    //   var svgString = draw.svg();
    //   var blob = new Blob([svgString], { type: "image/svg+xml" });
    //   saveAs(
    //     blob,
    //     `${this.demoText} ${this.currentDimensionOfDemoText.width}x${this.currentDimensionOfDemoText.height}${this.currentUnit}.svg`
    //   );
    // },
  },
};
</script>
<style scoped>
@import "../assets/fonts/font-face.css";
</style>
