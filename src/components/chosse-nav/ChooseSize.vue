<template>
  <div class="flex">
    <div>
      <label for="">Real Distance(cm/inch):</label>
      <input
        type="number"
        @blur="handleDimensionOfDemoText"
        @keyup.enter="handleDimensionOfDemoText"
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
      realDistanceFromImg: 0,
      // neonTextSize: 0,
    };
  },
  computed: {
    DimensionOfDemoText() {
      const widthOfDemoText = this.$store.state.currentWidthDemoText; // px
      const defaultBgWidth = 780; // px
      const widthDimensionOfDemoText = //proportional : ti le thuan
        (this.realDistanceFromImg * widthOfDemoText) / defaultBgWidth; // cm
      // const heightDimensionOfDemoText=  widthDimensionOfDemoText*calc.height /widthOfDemoText;
      const heightDimensionOfDemoText =
        (widthDimensionOfDemoText * 50) / widthOfDemoText; //cm
      const dimensionsOfDemoText = {
        width: widthDimensionOfDemoText,
        height: heightDimensionOfDemoText,
      };
      console.log("dimensionsOfDemoText:", dimensionsOfDemoText);
      this.$store.commit("setRealDimensionInput", realDistanceFromImg);
      this.$store.commit("setDimensionOfDemoText", dimensionsOfDemoText);
    },
  },
  methods: {
    handleDimensionOfDemoText(e) {
      this.realDistanceFromImg = e.target.value; // cm
      // console.log("Real Distance:", realDistanceFromImg, "cm");
      const widthOfDemoText = this.$store.state.currentWidthDemoText; // px
      const defaultBgWidth = 780; // px
      const widthDimensionOfDemoText = //proportional : ti le thuan
        (this.realDistanceFromImg * widthOfDemoText) / defaultBgWidth; // cm
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
  // watch: {
  //   "$store.state.currentWidthDemoText"(newVal, oldVal) {
  //     // Khi giá trị của currentDemoFont thay đổi, trigger tính toán lại cho computed
  //     console.log("Run in watch~");
  //     console.log("NewVal:", this.$store.state.currentWidthDemoText);
  //     const defaultDemoTextSize =  this.$store.state.currentWidthDemoText; // cm
  //     const defaultBgWidth = 780; // px
  //     const demoTextWidth =
  //       (defaultBgWidth * defaultDemoTextSize) /
  //       this.$store.state.realDimensionInput; // p
  //     console.log(
  //       "this.$store.state.realDimensionInput:",
  //       this.$store.state.realDimensionInput
  //     );
  //     console.log("demoTextWidth:", demoTextWidth);
  //     const fontSize = this.getFontSizeByWidth(demoTextWidth, newVal); // p)

  //     this.$store.commit("setDemoTextFontSize", fontSize);
  //   },
  // },
  // watch: {
  //   "$store.state.currentDemoFont"(newVal, oldVal) {
  //     // Khi giá trị của currentDemoFont thay đổi, trigger tính toán lại cho computed
  //     console.log("Run in watch~");
  //     console.log("NewVal:", this.$store.state.currentDemoFont);
  //     const defaultDemoTextSize = 110; // cm
  //     const defaultBgWidth = 780; // px
  //     const demoTextWidth =
  //       (defaultBgWidth * defaultDemoTextSize) /
  //       this.$store.state.realDimensionInput; // p
  //     console.log(
  //       "this.$store.state.realDimensionInput:",
  //       this.$store.state.realDimensionInput
  //     );
  //     console.log("demoTextWidth:", demoTextWidth);
  //     const fontSize = this.getFontSizeByWidth(demoTextWidth, newVal); // p)

  //     this.$store.commit("setDemoTextFontSize", fontSize);
  //   },
  // },
};
</script>
