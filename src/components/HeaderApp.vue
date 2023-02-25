<!-- <template>
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
</style> -->
<template>
  <div ref="containera" class="container relative">
    <div class="z-50 text-center">{{ divWidth }}cm</div>
    <div class="line-distance flex justify-center items-center relative">
      <div class="line-1 absolute"></div>
      <div class="line-2 absolute"></div>
      <div class="distance absolute"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      divWidth: 0,
    };
  },
  mounted() {
    // lấy chiều rộng của thẻ div
    this.divWidth = this.$refs.containera.offsetWidth;
    // console.log("divWidth=" + this.divWidth);
  },
  computed: {
    CalcWidth() {
      const divWidth = this.divWidth;
      // console.log("123", divWidth);
      return divWidth;
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #000;
  color: #fff;
  width: 300px; /* ví dụ chiều rộng của thẻ div là 300px */
}
.line-1 {
  left: 0;
  height: 10px;
  width: 2px;
  background: #fff;
}
.line-2 {
  right: 0;
  height: 10px;
  width: 2px;
  background: #fff;
}
.distance {
  /* box-sizing: border-box; */
  width: 100%;
  background-color: rgb(255, 255, 255);
  height: 2px;
  /* sử dụng thuộc tính computed để đặt chiều rộng của hr bằng với chiều rộng của div */
  max-width: v-bind(CalcWidth + "px");
}
</style>
