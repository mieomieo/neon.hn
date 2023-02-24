<template>
  <div class="text-box">
    <div class="myText" ref="myText" :style="{ fontSize: fontSize + 'px' }">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Home Sweet Home",
      maxWidth: 357,
      font: "Breathing",
      fontSize: 0,
      fontLoaded: false,
    };
  },
  methods: {
    getMaxFontSize(text, maxWidth) {
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      context.font = `${maxfontSize}px ${this.font}`;
      var maxfontSize = 150;
      var increment = 1;
      while (maxfontSize > 0) {
        context.font = `${maxfontSize}px ${this.font}`;
        // console.log(context.font);
        var width = context.measureText(text).width;
        // console.log(width);
        console.log(maxfontSize);

        if (width <= maxWidth) {
          console.log(maxfontSize);
          return (this.fontSize = maxfontSize);
        }
        maxfontSize -= increment;
      }
      return (this.fontSize = maxfontSize);
    },
  },
  mounted() {
    let font = new FontFace(
      this.font,
      `url(../assets/fonts/fonts/${this.font}.ttf)`
    );
    font.load().then(() => {
      document.fonts.add(font);
      this.fontLoaded = true;
      this.getMaxFontSize(this.text, this.maxWidth, this.font);
    });
  },
};
</script>

<style>
/* @import "../assets/fonts/font-face.css"; */

.text-box {
  width: v-bind(maxWidth + "px");
  height: auto;
  border: 1px solid;
}

.myText {
  font-family: v-bind(font);
  white-space: nowrap;
  font-size: v-bind(fontSize);
}
</style>
