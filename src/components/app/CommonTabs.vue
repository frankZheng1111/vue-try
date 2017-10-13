<template>
  <div v-if="tabsObject" class="common-tabs">
    <button v-for="tab in tabs"
            class="common-tab"
            :class="{ 'selected-common-tab': isSelected(tab) }"
            @click="selectTab(tab)">{{ tabsObject[tab] }}</button>
  </div>
</template>
<script>
'use strict'

export default {
  name: 'CommonTabs',

  props: {
    tabsObject: {
      default: null
    },
    defaultTab: {
      default: null
    }
  },

  data() {
    return {
      selectedTab: this.defaultTab || Object.keys(this.tabsObject)[0]
    }
  },

  computed: {
    tabs() {
      return Object.keys(this.tabsObject)
    }
  },

  methods: {
    isSelected(tab) {
      return this.selectedTab === tab
    },

    selectTab(tab) {
      this.selectedTab = tab
      this.$emit('selectTab', tab)
      return
    }
  }
}
</script>

<style scoped lang="scss">
</style>
