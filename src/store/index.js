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
    filterActive(state) {
      return state.todos.filter((todo) => {
        return !todo.done;
      });
    },
    filterDone(state) {
      return state.todos.filter((todo) => {
        return todo.done;
      });
    },
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    createTodo({ commit }, { content }) {
      // 讀取跟新增
      const todos = STORE.load();
      todos.push({ content, done: false });
      // set到local
      STORE.set(todos);
      // 寫入state
      commit("setTodos", todos);
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
    updateTodo({ commit }, { tId, content, done }) {
      // 讀取
      const todos = STORE.load();
      console.log("id:" + tId, "content:" + content, done);
      console.log(todos);
      // 修改這筆todo
      todos.splice(tId, 1, { content, done });
      STORE.set(todos);
      // 寫入state
      commit("setTodos", todos);
      // 返回
      return {
        tId,
        content,
      };
    },
    deleteTodo({ commit }, tId) {
      // 讀取
      const todos = STORE.load();
      // 刪出來的
      todos.splice(tId, 1);
      // localStorage.setItem
      STORE.set(todos);
      // 寫入state
      commit("setTodos", todos);
    },
    checkTodo({ commit }, { tId, done }) {
      const todos = STORE.load();
      // 抓到done的狀態賦予todo
      todos[tId].done = done;
      STORE.set(todos);
      // 2. commit mutation
      commit("setTodos", todos);
    },
  },
});
