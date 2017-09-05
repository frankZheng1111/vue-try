<template>
  <div class='container'>
    <router-view class='view' keep-alive transition transition-mode='out-in'> </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss">
  @import "./style/app";
</style>

