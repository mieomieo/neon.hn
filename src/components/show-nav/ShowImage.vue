<template>
  <div class="bg-stone-800 w-[780px] h-[780px] text-center relative">
    <div
      class="relative demo-text h-full w-full border-x-8 border-stone-800"
      :style="{
        transition: 'background-image 0.5s ease-in-out',
        background: previewImage
          ? `url(${previewImage})  no-repeat center center`
          : currentBackground,
        'background-size': 'contain',
      }"
    >
      <label
        class="absolute right-2 top-5 inline-flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          class="sr-only peer"
          checked
          @click="handleLightToggle"
        />
        <div
          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#0891b2]"
        ></div>
      </label>
    </div>
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
// import { store } from "../../store/store.js";

export default {
  components: {
    CarouselCoverflow,
  },
  data() {
    return {
      previewImage: null,
      currentBackground:
        "url('./src/assets/images/background/background1.jpg') no-repeat center center",
    };
  },
  methods: {
    handleLightToggle() {
      this.$store.state.lightOn = !this.$store.state.lightOn;
      // this.$emit("toggleSwitch", this.lightActive);
      console.log(this.$store.state.lightOn);
    },

    pickFile() {
      this.$refs.fileInput.click();
      this.currentBackground = null;
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        // this.$emit("input", file[0]);
      }
    },
    handleChooseBackground(e) {
      this.previewImage = null;
      this.currentBackground = `url('./src/assets/images/background/${e}') no-repeat center center`;
      console.log(e);
    },
  },
};
</script>
<style scoped>
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
