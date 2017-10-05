<template>
  <div class="about-page">
    <h3>前言</h3>
    <p>本项目旨在学习交流vue,页面风格参考了其他同类的开源项目, 同时感谢cnodejs社区提供的API。</p>
    <h3>版本</h3>
    <p>1.0</p>
    <div>
      <button class="back-btn"@click="back">返回社区</button>
    </div>
  </div>
</template>

<script>
'use strict'

export default {
  name: 'About',
  data() {
    return {
    }
  },

  methods: {
    back() {
      history.go(-1)
    }
  }
}
</script>

<style lang="scss">
  @import "../style/views/about";
</style>
