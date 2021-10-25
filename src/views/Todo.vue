<template>
  <div class="todo">
    <h1>This is an todo page</h1>
    <!-- 不想太多歷史紀錄用replace -->
    <router-link to="/todo" replace>All</router-link> |
    <router-link :to="{ name: 'Todo', query: { filter: 'active' } }" replace>Active</router-link> |
    <router-link :to="{ name: 'Todo', query: { filter: 'done' } }" replace>Done</router-link> |
    <p>show:{{ filter }}</p>
    <div>{{ list }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filter: "all", //all,active,done
    };
  },
  watch: {
    // this.$router.route.query.filter
    $route: {
      //預設route進來不會觸發連動 用immediate以表達式立即觸發回調
      immediate: true,
      handler: function(route) {
        // 檢查切換至哪個e.g all
        this.filter = route.query.filter || "all";
      },
    },
  },
  computed: {
    // 去拿store篩選後的getters
    list() {
      return this.$store.getters.filterList(this.filter);
    },
  },
};
</script>
<style scoped>
.todo a {
  color: black;
  text-decoration: none;
}
.todo .router-link-exact-active {
  color: green;
}
</style>
