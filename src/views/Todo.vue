<template>
  <div class="todo">
    <h1>This is an todo page</h1>
    <!-- 不想太多歷史紀錄用replace -->
    <router-link to="/todo" replace>All</router-link> |
    <router-link :to="{ name: 'Todo', query: { filter: 'active' } }" replace>Active</router-link> |
    <router-link :to="{ name: 'Todo', query: { filter: 'done' } }" replace>Done</router-link> |
    <div class="input">
      <input type="text" placeholder="請輸入新事項" v-model="newInput" />
      <button @click="addItem()">新增</button>
    </div>
    <!-- <p>show:{{ filter }}</p>
    <div>{{ list }}</div> -->
    <ul>
      <!-- 顯示模式/編輯模式 -->
      <li v-for="item of list" :key="item.tId">
        <!-- 預設edit:null 不等於任何tId所以秀出顯示模式 -->
        <template v-if="edit !== item.tId">
          <!-- input 控制資料 true/false -->
          <input type="checkbox" v-model="item.todo.done" />{{ item.todo.content }}
          <button @click="edit = item.tId">編輯</button>
          <button @click="deleteTodo(item)">刪除</button>
        </template>
        <template v-else>
          <!-- 當edit===tId時就顯示編輯模式 -->
          <input type="text" v-model="item.todo.content" />
          <button @click="edit = null">取消</button>
          <button @click="updateTodo({ tId: item.tId, content: item.todo.content }), (edit = null)">確定</button>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      newInput: "",
      editingItem: {},
      editingInput: {},
      // all,active,done
      filter: "all",
      // 是否編輯
      edit: null,
      ...mapState(["todos"]),
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
  methods: {
    addItem: function() {
      if (this.newInput.trim()) {
        let payload = { content: this.newInput, done: false };
        // console.log(payload);
        // 執行createTodo將值回傳回去
        this.$store.dispatch("createTodo", payload);
        this.newInput = "";
        // let newItem = this.$store.dispatch("createTodo", payload);
        // newItem.then((res) => console.log(res));
      }
    },
    editItem: function(target) {
      // console.log(target);
      this.edit = target;
      // target.content = this.editingInput;
      // this.editingItem = {};
    },
    ...mapActions(["deleteTodo", "createTodo", "updateTodo"]),
  },
  mounted() {
    this.$store.dispatch("readTodos");
  },
};
</script>
<style scoped>
ol,
ul {
  list-style: none;
}
input,
button {
  border: 0;
  margin: 0;
  padding: 0;
  outline: none;
}
button {
  cursor: pointer;
  padding: 5px;
  background-color: #753;
  color: #eca;
  border-radius: 3px;
}
button:hover {
  background-color: #eca;
  color: #753;
}
input {
  padding: 5px;
  background-color: #eca;
}
.todo a {
  color: black;
  text-decoration: none;
}
.todo .router-link-exact-active {
  color: green;
}
</style>
