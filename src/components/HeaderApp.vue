<template>
  <div class="py-2 px-3">
    <div class="relative">
      <label class="absolute pt-1 select-none mr-2 text-xs"
        >X: {{ valueX }}</label
      >
      <input
        id="RotateX"
        type="range"
        @input="handleRangeX"
        min="-360"
        max="360"
        value="0"
        step="1"
        class="ml-10 left-0 progress"
      />
    </div>
    <div class="relative">
      <label class="absolute pt-1 select-none mr-2 text-xs"
        >Y: {{ valueY }}</label
      >
      <input
        id="RotateY"
        type="range"
        @input="handleRangeY"
        min="-360"
        max="360"
        value="0"
        step="1"
        class="ml-10 left-0 progress"
      />
    </div>
    <div class="relative">
      <label class="absolute pt-1 select-none mr-2 text-xs"
        >Z: {{ valueZ }}</label
      >
      <input
        id="RotateZ"
        type="range"
        @input="handleRangeZ"
        min="-360"
        max="360"
        value="0"
        step="1"
        class="ml-10 left-0 progress"
      />
    </div>
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      value: 50,
      valueX: 0,
      valueY: 0,
      valueZ: 0,
    };
  },
  computed: {},

  methods: {
    handleRangeX(e) {
      this.valueX = e.target.value; //cusstom for input range
      this.$store.commit("setCurrentRotateX", this.valueX);
    },
    handleRangeY(e) {
      this.valueY = e.target.value; //cusstom for input range
      this.$store.commit("setCurrentRotateY", this.valueY);
    },
    handleRangeZ(e) {
      this.valueZ = e.target.value; //cusstom for input range
      this.$store.commit("setCurrentRotateZ", this.valueZ);
    },
  },
};
</script>
<style scoped>
.progress {
  /* border: solid 2px #82cfd0; */
  border-radius: 8px;
  height: 7px;
  width: 200px;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
}

.progress::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  -webkit-appearance: none;
  cursor: ew-resize;
  background: #82cfd0;
}
</style>
