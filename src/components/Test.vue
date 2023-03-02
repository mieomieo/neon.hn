<template>
  <div>
    <input
      type="range"
      @input="handleRange"
      min="100"
      max="780"
      value="300"
      step="1"
      class="slider"
    />
    <div class="testBox bg-slate-500">
      Demo Text Width: {{ currentWidthDemoText }}
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  computed: {
    currentWidthDemoText() {
      // console.log(this.$store.state.currentWidthDemoText);
      return this.$store.state.currentWidthDemoText;
    },
  },
  methods: {
    handleRange(e) {
      this.$store.commit("setWidthDemoText", e.target.value);
    },
  },
};
</script>
<style scoped>
.testBox {
  /* width: v-bind(currentWidthDemoText + "px"); */
  width: v-bind(currentWidthDemoText + "px");
  height: auto;
}
</style>
<!-- <template>
  <div class="testBox bg-slate-500" :style="{ width: width + 'px' }">
    1234
    <div>214</div>
    <div>235325</div>
    <input
      type="range"
      @input="handleRange"
      min="100"
      max="780"
      step="1"
      class="slider"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentWidthDemoText: 300,
    };
  },
  computed: {
    width() {
      return this.currentWidthDemoText;
    },
  },
  methods: {
    handleRange(e) {
      this.currentWidthDemoText = e.target.value;
      this.$store.commit("setWidthDemoText", e.target.value);
    },
  },
};
</script>

<style scoped>
.testBox {
  height: auto;
}
</style> -->
