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
        // console.log(maxfontSize);

        if (width <= maxWidth) {
          // console.log(maxfontSize);
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
      console.log("mount header");
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
  /* font-size: v-bind(fontSize); */
}
</style> -->
<template>
  <div class="text-container bg-slate-500">
    <p class="text" :style="{ fontSize: `${zoomValue}px` }">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <input type="range" min="10" max="100" v-model="zoomValue" />
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      zoomValue: 50,
    };
  },
  mounted() {
    const text = document.querySelector(".text");
    const zoomRange = document.querySelector("input[type='range']");
    zoomRange.addEventListener("input", function () {
      const zoomValue = this.value;
      text.style.fontSize = `${zoomValue}px`;
    });
  },
};
</script>
<style scoped>
.text-container {
  position: relative;
  width: 500px;
  height: 500px;
  display: inline-block;
  margin: auto;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  line-height: 1.5;
  width: 100%;
  height: 100%;
  text-align: center;
}

input[type="range"] {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
}
</style>
<!-- Khai báo thư viện Javascript -->
