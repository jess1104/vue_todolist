# todolist

## 卡關：

- Todo.vue 89 行 找不到如何改動 vuex 的 store

```javascript=
pRecord: function(index) {
      if (index === 0) {
        console.log("是最上層０");
        return;
      }
      console.log(this.todos);
      // console.log(this.list);
      console.log(index);
      // let newList = [...this.list];
      // console.log(newList);
      // this.list[index - 1] = this.list[index];
      // this.list[index] = newList[index - 1];
      // index = index - 1;
      // console.log(index);
    },
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
