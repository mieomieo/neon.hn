<template>
  <div class="">
    <label for=""> Type Here </label>
    <!-- <p
      contenteditable="true"
      class="bg-slate-200 h-[80px]"
      type="text"
      @input="HandleInput"
      @click="DeleteText"
      placeholder="Your Text"
      v-html="placeholder"
    ></p> -->
    <textarea
      type="text"
      @input="HandleInput"
      class="bg-slate-200 h-[80px]"
      placeholder="ENTER TEXT HERE 
Press Enter for a new line "
      name=""
      id="input_text"
      cols="30"
      rows="10"
    ></textarea>
  </div>
  <div class="text-align-btn flex justify-around">
    <div @click="handleTextAlignLeft" class="cursor-pointer w-1/12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          :style="{
            fill:
              this.textAlign === 'left' ? 'rgb(0, 0, 0)' : 'rgb(203 213 225)',
          }"
          d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </div>
    <div @click="handleTextAlignCenter" class="cursor-pointer w-1/12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          :style="{
            fill:
              this.textAlign === 'center' ? 'rgb(0, 0, 0)' : 'rgb(203 213 225)',
          }"
          d="M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z"
        />
      </svg>
    </div>
    <div @click="handleTextAlignRight" class="cursor-pointer w-1/12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          :style="{
            fill:
              this.textAlign === 'right' ? 'rgb(0, 0, 0)' : 'rgb(203 213 225)',
          }"
          d="M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      placeholder: "Type here <br> Press Enter for a new line",
      textAlign: "left",
    };
  },
  methods: {
    handleTextAlignLeft() {
      this.textAlign = "left";
      this.$store.commit("setCurrentTextAlign", this.textAlign);
    },
    handleTextAlignCenter() {
      this.textAlign = "center";
      this.$store.commit("setCurrentTextAlign", this.textAlign);
    },
    handleTextAlignRight() {
      this.textAlign = "right";
      this.$store.commit("setCurrentTextAlign", this.textAlign);
    },
    DeleteText() {
      this.placeholder = "";
    },
    HandleInput(event) {
      const inputText = event.target.value;
      const formattedText = inputText.replace(/(\r\n|\n|\r)/gm, "<br>");
      this.$store.commit("setTextInput", formattedText);
    },
  },
};
</script>
<style scoped>
/* svg path {
  fill: rgb(203 213 225);
} */
textarea#input_text {
  text-align: center;
  padding-top: 6%;
  background: #f5f5f5;
  border-radius: 15px;
  border: 1px solid #b9b9b9;
}
</style>
