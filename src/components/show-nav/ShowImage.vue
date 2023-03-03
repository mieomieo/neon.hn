<template>
  <div class="bg-stone-800 w-[780px] h-[780px] text-center">
    <!-- Background Image -->
    <div
      ref="container"
      class="overflow-hidden box-border relative h-full w-full border-x-8 border-stone-800 flex justify-center"
      :style="{
        transition: 'background-image 0.5s ease-in-out',
        background: previewImage
          ? `url(${previewImage})  no-repeat center center`
          : currentBackground,
        backgroundSize: backgroundSize,
      }"
    >
      <!-- Draggable // DemoText -->
      <!-- lineHeight: '1', -->
      <div
        ref="draggable"
        class="neon-text dragText top-[30%]"
        :class="{
          'light-on': lightOn,
        }"
        :style="{
          // lineHeight: calcSizeOfTextImage.height + 'px',
        }"
        @mousedown="startDrag"
        @touchstart.prevent="startDrag"
      >
        <!-- display: 'inline', -->
        <div
          :style="{
            width: this.isActiveInputRange
              ? currentWidthDemoText + 'px'
              : 'auto',
          }"
          class="ml-5 mb-5 demoText whitespace-nowrap"
          v-html="demoText"
        ></div>

        <!-- Ruler to illustrate for DemoText -->
        <div
          v-if="isShowRulerOfDemoText && isActiveInputRange == false"
          class="mt-10"
        >
          <!--Height  -->
          <div
            ref="heightRulerOfDemoText"
            class="dimension dimension-height absolute left-0 mr-10"
            :style="{ height: calcSizeOfTextImage.height + 'px' }"
          >
            <p
              class="text-center dimension-content absolute text-white -rotate-90"
            ></p>
            <div class="relative h-full flex justify-center items-center">
              <div class="line-1 absolute top-0 h-[1px] w-[8px] bg-white"></div>
              <div
                class="line-2 absolute bottom-0 h-[1px] w-[8px] bg-white"
              ></div>
              <div class="distance absolute h-full w-[1px] bg-white"></div>
            </div>
          </div>
          <!-- Width -->
          <div
            ref="widthRulerOfDemoText"
            class="dimension dimension-width absolute bottom-0 translate-x-5"
            :style="{ width: calcSizeOfTextImage.width + 'px' }"
          >
            <div class="flex items-center relative">
              <div
                class="line-1 absolute left-0 h-[8px] w-[1px] bg-white"
              ></div>
              <div
                class="line-2 absolute right-0 h-[8px] w-[1px] bg-white"
              ></div>
              <div class="distance absolute w-full h-[1px] bg-white"></div>
            </div>
            <p class="dimension-content">
              {{
                dimensionOfDemoText.width != 0
                  ? dimensionOfDemoText.width + "cm"
                  : ""
              }}
            </p>
          </div>
        </div>
        <!-- End Ruler -->
      </div>
      <!-- Ruler for illustration of Background Image -->
      <div
        class="mt-10 absolute dimension bottom-[15%]"
        :style="{ width: sizeOfBackgroundImage + 'px' }"
      >
        <p class="text-center text-white">
          {{ this.$store.state.realDimensionInput }}cm
        </p>
        <div class="line-distance flex justify-center items-center relative">
          <div
            class="line-1 absolute left-[8px] h-[8px] w-[1px] bg-white"
          ></div>
          <div
            class="line-2 absolute right-[8px] h-[8px] w-[1px] bg-white"
          ></div>
          <div class="distance absolute w-[764px] h-[2px] bg-white"></div>
        </div>
      </div>
      <!-- Button Light -->
      <ButtonLight
        class="absolute right-2 top-5 inline-flex items-center cursor-pointer"
        @click="handleLightToggle"
        ><div class="div"></div
      ></ButtonLight>
    </div>
    <!-- Import image file -->
    <div class="relative p-10 rounded-b-lg bg-stone-800 flex justify-center">
      <div class="file-input absolute bottom-2">
        <input
          ref="fileInput"
          type="file"
          name="file-input"
          id="file-input"
          class="file-input__input"
          @input="pickFile"
        />
        <label class="file-input__label" for="file-input">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="upload"
            class="svg-inline--fa fa-upload fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
            ></path>
          </svg>
          <span>Your Background</span>
        </label>
      </div>
    </div>
    <CarouselCoverflow
      @chooseBackground="handleChooseBackground"
      class="absolute bottom-[210px]"
    />
  </div>
</template>
<script>
import CarouselCoverflow from "./CarouselCoverflow.vue";
import { colors as defaultColors } from "../../constants";
import ButtonLight from "./ButtonLight.vue";

export default {
  components: {
    CarouselCoverflow,
    ButtonLight,
  },
  data() {
    return {
      currentBackground:
        "url('./assets/images/background/background1.jpg') no-repeat center center",
      dragging: false,
      isExecuted: false,
      previewImage: null,
      containerRect: null,
      draggable: null,
      sizeOfBackgroundImage: 0,
      isShowRulerOfDemoText: false,
      backgroundSize: "", // check background size khi upload image
      // isActiveInputRange: false, // kiem tra xem co active width cua demoText khong?
    };
  },
  computed: {
    isActiveInputRange() {
      // this.isActiveInputRange = this.$store.state.isActiveInputRange;
      console.log(
        "this.isActiveInputRange",
        this.$store.state.currentInputRange
      );
      // return this.isActiveInputRange;
      return this.$store.state.currentInputRange;
    },
    dimensionOfDemoText() {
      return {
        width: this.$store.state.currentDimensionOfDemoText.width,
        height: this.$store.state.currentDimensionOfDemoText.height,
      };
    },
    demoText() {
      if (this.$store.state.textInput != "YourText")
        this.isShowRulerOfDemoText = true;
      return this.$store.state.textInput;
    },
    lightOn() {
      return this.$store.state.lightOn;
    },
    currentColorOn() {
      const colorId = this.$store.state.currentColorId;
      return defaultColors.find((x) => x.id === colorId).colorOn;
      // return this.$store.state.currentColorOn;
    },
    currentColorOff() {
      const colorId = this.$store.state.currentColorId;
      return defaultColors.find((x) => x.id === colorId).colorOff.color;
      // return this.$store.state.currentColorOff.color;
    },
    currentTextshadowOff() {
      const colorId = this.$store.state.currentColorId;
      return defaultColors.find((x) => x.id === colorId).colorOff.textShadow;
      // return this.$store.state.currentColorOff.textShadow;
    },
    currentDemoFont() {
      return this.$store.state.currentDemoFont;
    },
    currentDemoTextFontSize() {
      return this.$store.state.currentDemoTextFontSize;
    },

    calcSizeOfBackgroundImage() {
      return this.sizeOfBackgroundImage;
    },
    calcSizeOfTextImage() {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.font = `${this.currentDemoTextFontSize}px ${this.currentDemoFont}`;
      // get line height
      // const lineHeight = parseInt(context.font) * 0.7; // adjust 1.2 to fit your design
      // detect break line
      const lines = this.demoText.split("<br>");
      let maxWidth = 0;
      let totalHeight = 0;

      lines.forEach((line) => {
        const metric = context.measureText(line.trim());
        const width =
          metric.actualBoundingBoxRight - metric.actualBoundingBoxLeft;
        const height =
          metric.actualBoundingBoxAscent + metric.actualBoundingBoxDescent;
        maxWidth = Math.max(maxWidth, width);
        totalHeight += height;
      });
      const metric = context.measureText(this.demoText);
      const height =
        metric.actualBoundingBoxAscent + metric.actualBoundingBoxDescent;
      const width =
        metric.actualBoundingBoxRight - metric.actualBoundingBoxLeft;
      return {
        width: maxWidth,
        height: totalHeight,
        // width: width,
        // height: height,
      };
    },
    currentWidthDemoText() {
      this.getFontSizeByWidth(
        this.$store.state.currentWidthDemoText,
        this.$store.state.currentDemoFont
      );
      return this.$store.state.currentWidthDemoText;
    },
  },
  methods: {
    handleLightToggle() {
      this.$store.state.lightOn = !this.$store.state.lightOn;
      // this.$emit("toggleSwitch", this.lightActive);
      console.log(this.$store.state.lightOn);
    },
    getFontSizeByWidth(maxWidth, font) {
      var maxFontSize = 150;
      var increment = 1;
      const text = this.demoText;
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      context.font = `${maxFontSize}px ${font}`;
      while (maxFontSize > 0) {
        context.font = `${maxFontSize}px ${font}`;
        var width = context.measureText(text).width;
        // console.log(maxFontSize);
        if (width <= maxWidth) {
          console.log("max-font-zize:", maxFontSize);
          const fontSize = maxFontSize;
          if (!this.isFirstTime) {
            this.isFirstTime = false;
            this.$store.commit("setDemoTextFontSize", fontSize);
          }
          this.$store.commit("setDemoTextFontSize", fontSize);
          // return fontSize;
          break;
        }
        maxFontSize -= increment;
      }
      return 0;
    },
    pickFile() {
      this.$refs.fileInput.click();
      this.currentBackground = null;
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          let image = new Image();
          image.onload = () => {
            let aspectRatio = image.width / image.height;
            // let container = this.$refs.container;
            console.log("width", image.width, image.height);
            if (aspectRatio > 1) {
              this.backgroundSize = "contain";
            } else {
              this.backgroundSize = "cover";
            }
            this.previewImage = e.target.result;
          };
          image.src = e.target.result;
        };
        reader.readAsDataURL(file[0]);
      }
    },
    handleChooseBackground(e) {
      this.previewImage = null;
      this.currentBackground = `url('./assets/images/background/${e}') no-repeat center center`;
      console.log(e);
    },
    HandleInput(payload) {
      this.$store.commit("setTextInput", payload);
    },
    startDrag(event) {
      const draggable = this.$refs.draggable.getBoundingClientRect();
      if (event.type === "touchstart") {
        event.preventDefault();
        event = event.touches[0];
      }
      if (!this.isExecuted) {
        this.currentX = draggable.x - this.calcSizeOfTextImage.width * 0.8; //Tinh chinh, tạo ra currentXY và initialXY trong data
        this.currentY = draggable.y - this.calcSizeOfTextImage.height * 1.05;
        this.isExecuted = true;
        // console.log("CurrentX:", this.currentX);
        // console.log("CurrentY:", this.currentY);
      }
      this.dragging = true;
      // Calculate the initial position of the draggable element
      this.initialX = event.clientX - this.currentX;
      this.initialY = event.clientY - this.currentY;

      // Add event listeners to track the mouse movements
      document.addEventListener("mousemove", this.onDrag);
      document.addEventListener("touchmove", this.onDrag, { passive: false });
      document.addEventListener("mouseup", this.stopDrag);
      document.addEventListener("touchend", this.stopDrag);
    },
    onDrag(event) {
      if (this.dragging) {
        if (event.type === "touchmove") {
          event.preventDefault();
          event = event.touches[0];
        }
        // Calculate the current position of the draggable element
        this.currentX = event.clientX - this.initialX;
        this.currentY = event.clientY - this.initialY;

        // Check if the draggable element is within the boundaries of the container
        if (this.currentX < this.containerRect.width * 0.01) {
          this.currentX = this.containerRect.width * 0.01;
          // console.log(this.currentX);
        }

        if (
          this.currentX + this.$refs.draggable.offsetWidth >
          this.containerRect.width - this.containerRect.width * 0.05
        ) {
          this.currentX =
            this.containerRect.width -
            this.$refs.draggable.offsetWidth -
            0.05 * this.containerRect.width;
        }

        if (
          this.currentY <
          this.containerRect.top + this.containerRect.height * 0.01
        ) {
          this.currentY =
            this.containerRect.top + this.containerRect.height * 0.01;
        }
        if (
          this.currentY + this.$refs.draggable.offsetHeight >
          this.containerRect.bottom - this.containerRect.height * 0.12
        ) {
          this.currentY =
            this.containerRect.bottom -
            this.$refs.draggable.offsetHeight -
            this.containerRect.height * 0.12;
        }

        // Update the position of the draggable element
        this.$refs.draggable.style.left = `${this.currentX}px`;
        this.$refs.draggable.style.top = `${this.currentY}px`;
      }
    },
    stopDrag(event) {
      // Stop tracking mouse movements
      this.dragging = false;
      // document.removeEventListener("touchend", this.stopDrag);
      document.removeEventListener("touchend", this.stopDrag);
      document.removeEventListener("touchmove ", this.onDrag, {
        passive: false,
      });
      // console.log("stopDrag");
      document.removeEventListener("mousemove", this.onDrag);
      document.removeEventListener("mouseup", this.stopDrag);
    },
  },
  mounted() {
    // Get the boundaries of the container element
    this.draggable = JSON.parse(
      JSON.stringify(this.$refs.draggable.getBoundingClientRect())
    );
    this.containerRect = JSON.parse(
      JSON.stringify(this.$refs.container.getBoundingClientRect())
    );
    this.sizeOfBackgroundImage = this.$refs.container.offsetWidth;
  },
};
</script>
<style scoped>
@import "../../assets/fonts/font-face.css";
.demoText {
  /* width: v-bind(currentWidthDemoText + "px");*/
  line-height: 1;
  /* transform: scale(2); */
}
.neon-text {
  z-index: 100;
  font-size: v-bind(currentDemoTextFontSize + "px"); /*42px;*/
  font-family: v-bind(currentDemoFont), sans-serif;
  box-sizing: border-box;
  animation: pulsate 1.5s infinite alternate;
  /* border-radius: 2rem; */

  color: v-bind(currentColorOff);
  text-shadow: v-bind(currentTextshadowOff);
  transition: text-shadow 0.6s ease;
  font-size-adjust: 0.5;
  /* height: auto; */
}
.dimension-content {
  font-size: 20px;
  color: #fff;
  font-family: "Courier New", Courier, monospace !important;
  text-shadow: none !important;
}
.dimension {
  opacity: 0.6;
}
.dimension-height {
  top: 0;
}
.dragText {
  cursor: move;
  position: absolute;
  user-select: none;
}

.light-on {
  color: #fff;
  text-shadow: v-bind(currentColorOn);
}
.file-input__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.file-input__label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  font-size: 14px;
  padding: 10px 12px;
  background-color: #1d88b3;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
}

.file-input__label svg {
  height: 16px;
  margin-right: 6px;
  margin-bottom: 6px;
}
</style>
