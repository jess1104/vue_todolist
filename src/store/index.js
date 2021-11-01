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
      // 給假id
      return state.todos.map((todo, tId) => {
        return {
          todo,
          tId,
        };
      });
    },
    filterList(state, getters) {
      // 對getters.list做篩選
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
    createTodo({ commit }, payload) {
      // 讀取跟新增
      const todos = STORE.load();
      // console.log(payload);
      todos.push(payload);
      // console.log(todos);
      STORE.set(todos);
      // 寫入state
      commit("setTodos", todos);
      // 返回
      return {
        tId: todos.length - 1,
        payload,
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
    updateTodo({ commit }, { tId, content }) {
      // 讀取
      const todos = STORE.load();
      console.log("id:" + tId, "content:" + content);
      console.log(todos);
      // 修改這筆todo
      todos.splice(tId, 1, { content, done: false });
      STORE.set(todos);
      // 寫入state
      commit("setTodos", todos);
      // 返回
      return {
        tId,
        content,
      };
    },
    deleteTodo({ commit }, { tId }) {
      // 讀取
      const todos = STORE.load();
      // 刪出來的
      // console.log(commit);
      const todo = todos.splice(tId, 1)[0];
      // console.log(todo);
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
    checkTodo({ commit }, { tId, done }) {
      // UPDATE_TODO ({ commit }, { tId, content }) {
      // 1. PATCH axios.patch()
      const todos = STORE.load();
      // 抓到done的狀態賦予todo
      todos[tId].done = done;
      // console.log(todos);
      // todos[tId].content = content
      STORE.set(todos);
      // 2. commit mutation
      commit("setTodos", todos);
      // 3. return
      return {
        tId,
        todo: todos[tId],
      };
    },
  },
});
