<template>
  <div class="parent" ref="parent" @touchmove.prevent>
    <div
      class="draggable"
      ref="draggable"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="endDrag"
    >
      <!-- Your draggable element content goes here -->
    </div>
  </div>
</template>

<style>
.parent {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
}

.draggable {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: red;
  cursor: move;
}
</style>

<script>
export default {
  data() {
    return {
      dragging: false,
      dragStartX: 0,
      dragStartY: 0,
      parentRect: null,
      draggableRect: null,
      maxLeft: null,
      maxTop: null,
    };
  },
  mounted() {
    this.parentRect = this.$refs.parent.getBoundingClientRect();
    this.draggableRect = this.$refs.draggable.getBoundingClientRect();
    this.maxLeft = this.parentRect.width - this.draggableRect.width;
    this.maxTop = this.parentRect.height - this.draggableRect.height;
  },
  methods: {
    startDrag(event) {
      this.dragging = true;
      const touch = event.touches[0];
      this.dragStartX = touch.clientX;
      this.dragStartY = touch.clientY;
    },
    onDrag(event) {
      if (this.dragging) {
        const touch = event.touches[0];
        const offsetX = touch.clientX - this.dragStartX;
        const offsetY = touch.clientY - this.dragStartY;
        let left = this.draggableRect.left - this.parentRect.left + offsetX;
        let top = this.draggableRect.top - this.parentRect.top + offsetY;
        left = Math.min(Math.max(0, left), this.maxLeft);
        top = Math.min(Math.max(0, top), this.maxTop);
        this.$refs.draggable.style.left = `${left}px`;
        this.$refs.draggable.style.top = `${top}px`;
      }
    },
    endDrag() {
      this.dragging = false;
      this.dragStartX = 0;
      this.dragStartY = 0;
      this.draggableRect = this.$refs.draggable.getBoundingClientRect();
    },
  },
};
</script>
