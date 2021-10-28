<template>
  <div id="app">
    <div id="nav">
      <!-- 不想太多歷史紀錄用replace -->
      <!-- <router-link to="/" replace>All</router-link> |
      <router-link :to="{ query: { filter: 'active' } }" replace>Active</router-link> |
      <router-link :to="{ query: { filter: 'done' } }" replace>Done</router-link> | -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
