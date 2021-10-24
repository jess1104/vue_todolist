import Vue from "vue";
import Vuex from "vuex";
import LocalStorage from "../module/LocalStorage";

Vue.use(Vuex);
const STORE = new LocalStorage("todo-vue");

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {},
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
    updatedTodo({ commit }, { tId, todo }) {
      // 讀取
      const todos = STORE.load();
      // 修改這筆todo
      todos.splice(tId, 1, todo);
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
  deleteTodo({ commit }, { tId }) {
    // 刪除
    const todos = STORE.load();
    const todo = todos.splice(tId, 1)[0];
    STORE.set(todos);
    // 寫入state
    commit("setTodos", todos);
    // 返回
    return {
      tId: null,
      todo,
    };
  },
});
