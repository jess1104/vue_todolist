import Vue from "vue";
import Vuex from "vuex";
import LocalStorage from "../module/LocalStorage";

Vue.use(Vuex);
const STORE = new LocalStorage("todo-vue");

export default new Vuex.Store({
  state: {
    todos: [
      { content: 123, done: false },
      { content: 456, done: true },
      { content: 789, done: false },
    ],
  },
  getters: {
    list(state) {
      return state.todos.map((todo, tId) => {
        return {
          todo,
          tId,
        };
      });
    },
    filterList(state, getters) {
      return (filter) => {
        switch (filter) {
          case "all":
            return getters.list;
          case "active":
            return getters.list.filter((todo) => {
              return !todo.todo.done;
            });
          case "done":
            return getters.list.filter((todo) => {
              return todo.todo.done;
            });
          default:
            return [];
        }
      };
    },
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    createTodo({ commit }, { todo }) {
      // 讀取跟新增
      const todos = STORE.load();
      todos.push(todo);
      console.log(todos);
      STORE.set(todos);
      // 寫入state
      commit("setTodos", todos);
      // 返回
      return {
        tId: todos.length - 1,
        todo,
      };
    },
    readTodos({ commit }) {
      // 讀取
      // window.localStorage.getItem('XXX')
      const todos = STORE.load();
      // 寫入state
      commit("setTodos", todos);
      // 返回
      return {
        todos,
      };
    },
    updateTodo({ commit }, { tId, todo }) {
      // 讀取
      const todos = STORE.load();
      // 修改這筆todo
      todos.splice(tId, 1, todo);
      STORE.set(todos);
      // 寫入state
      commit("setTodos", todos);
      // 返回
      return {
        tId,
        todo,
      };
    },
    deleteTodo({ commit }, { tId }) {
      // 讀取
      const todos = STORE.load();
      // 刪出來的
      const todo = todos.splice(tId, 1)[0];
      // localStorage.setItem
      STORE.set(todos);
      // 寫入state
      commit("setTodos", todos);
      // 返回
      return {
        tId: null,
        todo,
      };
    },
  },
});
