<template>
  <div class="todo">
    <h1>This is an todo page</h1>
    <!-- 不想太多歷史紀錄用replace -->
    <router-link to="/todo" replace>All</router-link> |
    <router-link :to="{ name: 'Todo', query: { filter: 'active' } }" replace>Active</router-link> |
    <router-link :to="{ name: 'Todo', query: { filter: 'done' } }" replace>Done</router-link> |
    <div class="top-input">
      <input type="text" placeholder="請輸入新事項" v-model.trim="newInput" @keyup.enter="addItem()" />
      <button @click="addItem()">新增</button>
    </div>
    <ul class="content">
      <!-- 顯示模式/編輯模式 -->
      <li v-for="item of list" :key="item.tId">
        <!-- 預設edit:null 不等於任何tId所以秀出顯示模式 -->
        <template v-if="edit !== item.tId">
          <div class="input" :class="{ strikeout: item.todo.done }">
            <!-- input 控制資料 true/false -->
            <input
              type="checkbox"
              v-model="item.todo.done"
              @change="checkTodo({ tId: item.tId, done: item.todo.done })"
            />{{ item.todo.content }}
          </div>
          <div class="button">
            <button @click="edit = item.tId">編輯</button>
            <button @click="deleteTodo(item)">刪除</button>
            <div class="sort-button" v-if="filter == 'all'">
              <button @click="upRecord(item.tId)"><i class="fas fa-chevron-up"></i></button>
              <button @click="downRecord(item.tId)"><i class="fas fa-chevron-down"></i></button>
            </div>
          </div>
        </template>
        <template v-else>
          <!-- 當edit===tId時就顯示編輯模式 -->
          <div class="input">
            <input type="text" v-model="item.todo.content" />
          </div>
          <div class="button">
            <button @click="edit = null">取消</button>
            <button @click="updateTodo({ tId: item.tId, content: item.todo.content }), (edit = null)">確定</button>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import LocalStorage from "../module/LocalStorage";
const STORE = new LocalStorage("todo-vue");

export default {
  data() {
    return {
      newInput: "",
      // all,active,done
      filter: "all",
      // 是否編輯
      edit: null,
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
    ...mapActions(["deleteTodo", "createTodo", "updateTodo", "readTodos", "checkTodo"]),
    addItem() {
      if (this.newInput !== "") {
        let newObj = { content: this.newInput, done: false };
        // console.log(newObj);
        // 執行createTodo將值回傳回去
        this.$store.dispatch("createTodo", newObj);
        this.newInput = "";
        // let newItem = this.$store.dispatch("createTodo", newObj);
        // newItem.then((res) => console.log(res));
      }
    },
    upRecord(index) {
      // 把local讀進來
      const todos = STORE.load();

      if (index <= 0) {
        return;
      }
      const temp = todos[index];
      todos[index] = todos[index - 1];
      todos[index - 1] = temp;
      // 寫回state
      this.$store.commit("setTodos", todos);
      // local.set回去
      STORE.set(todos);
    },
    downRecord(index) {
      // 把local讀進來
      const todos = STORE.load();
      // console.log(index, todos.length);
      // 陣列總長減一才會等於index,當最後一筆return
      if (index >= todos.length - 1) {
        return;
      }
      const temp = todos[index];
      todos[index] = todos[index + 1];
      todos[index + 1] = temp;
      // 寫回state
      this.$store.commit("setTodos", todos);
      // local.set回去
      STORE.set(todos);
    },
  },
  mounted() {
    this.$store.dispatch("readTodos");
  },
};
</script>
<style lang="scss" scoped>
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
h1 {
  color: #3e517a;
}
.strikeout {
  text-decoration: line-through;
  color: grey;
}
.todo {
  padding: 10px;
  width: 400px;
  border-radius: 10px;
  background-color: #70cad1;
  a {
    color: #3e517a;
    text-decoration: none;
  }
  .router-link-exact-active {
    color: #0b5a8c;
    font-weight: bold;
  }
  .top-input {
    margin: 5px auto;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #8ee3f5;
    input {
      padding: 10px;
      border-radius: 3px;
      background-color: #8ee3f5;
    }
    button {
      padding: 10px;
      border-radius: 3px;
      cursor: pointer;
      color: #3e517a;
      background-color: #8ee3f5;
      &:hover {
        color: #8ee3f5;
        background-color: #3e517a;
      }
      &:active {
        color: #3e517a;
        background-color: #8ee3f5;
      }
    }
  }
  .content {
    margin: 0 auto;
    button:active {
      transform: scale(1.3);
    }

    li {
      margin: 5px 0;
      padding: 5px 0;
      border-radius: 3px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #8ee3f5;
      .input {
        width: 150px;
        display: flex;
        justify-content: start;
        align-items: center;
        input {
          padding: 5px 5px;
          margin: 0 5px;
        }
      }
    }
    .button {
      display: flex;
      button {
        height: 33px;
        cursor: pointer;
        padding: 0 3px;
        margin-right: 3px;
        border-radius: 3px;
        color: #8ee3f5;
        background-color: #3e517a;
        &:hover {
          color: #3e517a;
          background-color: #caf9ed;
        }
      }
      .sort-button {
        // float: right;
        display: flex;
        flex-direction: column;
        button {
          height: 15px;
          &:first-child {
            margin-bottom: 3px;
          }
        }
        i {
          transform: scale(0.8, 0.8);
        }
      }
    }
  }
}
</style>
