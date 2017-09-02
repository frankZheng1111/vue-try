<template>
  <div>
    <h1 class='logo'>Cnodejs Api Test</h1>
    <ul class='list'>
      <li v-for="item in lists" v-text="item.title"></li>
    </ul>
  </div>
</template>
<script>
import * as api from '../api'

export default {
  data() {
    return {
      lists: [
        // {
        //   id: 1,
        //   title: "test title1"
        // },
        // {
        //   id: 2,
        //   title: "test title2"
        // }
      ]
    }
  },
  created() {
    this.initList();
  },
  methods: {
    async initList() {
      let { data: { data: topics } } = await api.getListData()
      this.lists.push(...topics);
    }
  }
}
</script>
