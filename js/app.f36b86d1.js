(function(t){function e(e){for(var o,i,a=e[0],u=e[1],s=e[2],l=0,f=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},c=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e1b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i=(n("5c0b"),n("2877")),a={},u=Object(i["a"])(a,r,c,!1,null,null,null),s=u.exports,d=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Todo")],1)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo"},[n("h1",[t._v("TO DO LIST")]),n("router-link",{attrs:{to:"/all",replace:""}},[t._v("All")]),t._v(" | "),n("router-link",{attrs:{to:"/active",replace:""}},[t._v("Active")]),t._v(" | "),n("router-link",{attrs:{to:"/done",replace:""}},[t._v("Done")]),t._v(" | "),n("div",{staticClass:"top-input"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newInput,expression:"newInput",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"請輸入新事項"},domProps:{value:t.newInput},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addItem()},input:function(e){e.target.composing||(t.newInput=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("button",{on:{click:function(e){return t.addItem()}}},[t._v("新增")])]),n("ul",{staticClass:"content"},t._l(t.list,(function(e,o){return n("li",{key:o},[t.edit!==o?[n("div",{staticClass:"input",class:{strikeout:e.done}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.done,expression:"item.done"}],attrs:{type:"checkbox",id:e.content},domProps:{checked:Array.isArray(e.done)?t._i(e.done,null)>-1:e.done},on:{change:[function(n){var o=e.done,r=n.target,c=!!r.checked;if(Array.isArray(o)){var i=null,a=t._i(o,i);r.checked?a<0&&t.$set(e,"done",o.concat([i])):a>-1&&t.$set(e,"done",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(e,"done",c)},function(n){return t.checkTodo({tId:o,done:e.done})}]}}),n("label",{attrs:{for:e.content}},[t._v(t._s(e.content))])]),n("div",{staticClass:"button"},[n("button",{on:{click:function(e){t.edit=o}}},[t._v("編輯")]),n("button",{on:{click:function(e){return t.deleteTodo(o)}}},[t._v("刪除")]),"all"==t.$route.name?n("div",{staticClass:"sort-button"},[n("button",{on:{click:function(e){return t.upRecord(o)}}},[n("i",{staticClass:"fas fa-chevron-up"})]),n("button",{on:{click:function(e){return t.downRecord(o)}}},[n("i",{staticClass:"fas fa-chevron-down"})])]):t._e()])]:[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"item.content"}],attrs:{type:"text"},domProps:{value:e.content},on:{input:function(n){n.target.composing||t.$set(e,"content",n.target.value)}}})]),n("div",{staticClass:"button"},[n("button",{on:{click:function(e){t.edit=null}}},[t._v("取消")]),n("button",{on:{click:function(n){t.updateTodo({tId:o,content:e.content,done:e.done}),t.edit=null}}},[t._v(" 確定 ")])])]],2)})),0)],1)},v=[],m=n("5530"),h=(n("b0c0"),n("4de4"),n("2f62")),b=function(t){return{load:function(){return JSON.parse(window.localStorage.getItem(t)||"[]")},set:function(e){window.localStorage.setItem(t,JSON.stringify(e))}}},w=new b("todo-vue"),T={name:"Todo",data:function(){return{newInput:"",filter:this.$route.name,edit:null}},watch:{$route:function(t){console.log(t),this.filter=t.name}},computed:Object(m["a"])(Object(m["a"])(Object(m["a"])({},Object(h["e"])(["todos"])),Object(h["c"])(["filterActive","filterDone"])),{},{list:function(){return"active"===this.$route.name?this.filterActive:"done"===this.$route.name?this.filterDone:this.todos}}),methods:Object(m["a"])(Object(m["a"])(Object(m["a"])({},Object(h["d"])(["setTodos"])),Object(h["b"])(["deleteTodo","createTodo","updateTodo","readTodos","checkTodo"])),{},{addItem:function(){""!==this.newInput&&(this.createTodo({content:this.newInput}),this.newInput="")},checkTodoDone:function(t,e){this.checkTodo({tId:t,done:e.target.checked})},upRecord:function(t){var e=w.load();if(!(t<=0)){var n=e[t];e[t]=e[t-1],e[t-1]=n,this.setTodos(e),w.set(e)}},downRecord:function(t){var e=w.load();if(!(t>=e.length-1)){var n=e[t];e[t]=e[t+1],e[t+1]=n,this.setTodos(e),w.set(e)}}}),created:function(){this.readTodos()}},y=T,_=(n("91ee"),Object(i["a"])(y,p,v,!1,null,"00bfb2f7",null)),g=_.exports,k={name:"Home",components:{Todo:g}},O=k,j=Object(i["a"])(O,l,f,!1,null,null,null),I=j.exports;o["a"].use(d["a"]);var x=[{path:"/",name:"all",component:I},{path:"/all",name:"all",component:I},{path:"/active",name:"active",component:I},{path:"/done",name:"done",component:I}],$=new d["a"]({routes:x}),C=$;n("a434");o["a"].use(h["a"]);var S=new b("todo-vue"),P=new h["a"].Store({state:{todos:[{content:123,done:!1},{content:456,done:!0},{content:789,done:!1}]},getters:{filterActive:function(t){return t.todos.filter((function(t){return!t.done}))},filterDone:function(t){return t.todos.filter((function(t){return t.done}))}},mutations:{setTodos:function(t,e){t.todos=e}},actions:{createTodo:function(t,e){var n=t.commit,o=e.content,r=S.load();r.push({content:o,done:!1}),S.set(r),n("setTodos",r)},readTodos:function(t){var e=t.commit,n=S.load();return e("setTodos",n),{todos:n}},updateTodo:function(t,e){var n=t.commit,o=e.tId,r=e.content,c=e.done,i=S.load();return console.log("id:"+o,"content:"+r,c),console.log(i),i.splice(o,1,{content:r,done:c}),S.set(i),n("setTodos",i),{tId:o,content:r}},deleteTodo:function(t,e){var n=t.commit,o=S.load();o.splice(e,1),S.set(o),n("setTodos",o)},checkTodo:function(t,e){var n=t.commit,o=e.tId,r=e.done,c=S.load();c[o].done=r,S.set(c),n("setTodos",c)}}});o["a"].config.productionTip=!1,new o["a"]({router:C,store:P,render:function(t){return t(s)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"91ee":function(t,e,n){"use strict";n("0e1b")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.f36b86d1.js.map