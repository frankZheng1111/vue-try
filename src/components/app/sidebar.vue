<template>
  <div>
    <transition name="fade">
      <div v-if="activeSidebar" class="page-cover" @click="hideSidebar"></div>
    </transition>
    <section :class="{ sidebar: true, show: activeSidebar }">
      <section class="tab-list">
        <router-link v-for="tab in tabs" :id="tab" :key="tab" :to="{ name: 'topics', query: { tab: tab || undefined } }" @click.native="hideSidebar">
          {{ tabTexts[tab] }}
        </router-link>
      </section>
    </section>
  </div>
</template>
<script>
import TAB_TEXTS from '../../config/tabTexts'

export default {
  data() {
    return {
      tabs: ['', 'ask', 'share', 'job', 'good', 'dev'],
      tabTexts: TAB_TEXTS
    }
  },
  props: ['activeSidebar'],

  methods: {
    hideSidebar() {
      this.$emit('hideSidebar')
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/components/app/sidebar";
</style>
