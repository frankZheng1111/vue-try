<template>
  <div class="movabale-item"
        @touchstart="startMoveItem"
        @touchmove="movingItem"
        @touchend="endMoveItem"
       :style="itemStyle"
    >
    <slot></slot>
  </div>
</template>
<script>
'use strict'

export default {
  name: 'MovableItem',
  props: {
    initToLeft: {
      default: 0
    },
    initToTop: {
      default: 0
    },
    maxMoveUp: {
      default: null
    },
    maxMoveDown: {
      default: null
    },
    maxMoveLeft: {
      default: null
    },
    maxMoveRight: {
      default: null
    }
  },

  data() {
    return {
      toTopValue: 0,
      toLeftValue: 0,
    }
  },

  computed: {
    itemStyle() {
      return {
        left:`${this.itemToLeft}px`,
        top:`${this.itemToTop}px`,
        display: 'inline-block',
        position: 'relative'
      }
    },

    itemToLeft() {
      let value = this.toLeftValue + this.initToLeft
      let maxPosition = 0 + this.initToLeft + (this.maxMoveRight || 0)
      let minPosition = 0 + this.initToLeft - (this.maxMoveLeft || 0)
      if (this.maxMoveRight !== null && value > maxPosition) { return maxPosition }
      if (this.maxMoveLeft !== null && value < minPosition) { return minPosition }
      return value
    },

    itemToTop() {
      let value = this.toTopValue + this.initToTop
      let maxPosition = 0 + this.initToTop + (this.maxMoveDown || 0)
      let minPosition = 0 + this.initToTop - (this.maxMoveTop || 0)
      if (this.maxMoveDown !== null && value > maxPosition) { return maxPosition }
      if (this.maxMoveUp !== null && value < minPosition) { return minPosition }
      return value
    }
  },

  methods: {
    startMoveItem(event) {
      this.itemScreenX = event.targetTouches[0].screenX
      this.itemScreenY = event.targetTouches[0].screenY
    },

    movingItem(event) {
      event.preventDefault()
      let newItemScreenX = event.targetTouches[0].screenX
      let newItemScreenY = event.targetTouches[0].screenY
      this.toLeftValue += newItemScreenX - this.itemScreenX
      this.toTopValue += newItemScreenY - this.itemScreenY
      this.itemScreenX = newItemScreenX
      this.itemScreenY = newItemScreenY
    },
    
    endMoveItem() {
      this.itemScreenX = null
      this.itemScreenY = null
    }
  }
}
</script>

<style scoped lang="scss">
</style>
