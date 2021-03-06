# vue实例

# vue组件

### 全局组件

注册组件：

```
Vue.component('my-component'
, {
// 选项
})
```

组件在注册之后，便可以作为自定义元素

`<my-component></my-component>`

在一个实例的模板中使用。注意确保在初始化根实例之前

例子：

`<div id="example">`

`<my-component></my-component>`

`</div>`

```
// 注册
```

```js
Vue.component(
'my-component', {
  template: '<div>A custom component!</div>'
})
// 创建根实例
new
 Vue({
  el: '#example'
})
```

渲染为：

```
<div id="example"><div>A custom component!</div></div>
```

### 单文件组件

在 Vue 中，父子组件的关系可以总结为**prop 向下传递，事件向上传递**。父组件通过**prop**给子组件下发数据，子组件通过**事件**

给父组件发送消息。看看它们是怎么工作的。

# vue插件

插件通常会为 Vue 添加全局功能。插件的范围没有限制——一般有下面几种：

1. 添加全局方法或者属性，如:[vue-custom-element](https://github.com/karol-f/vue-custom-element)

2. 添加全局资源：指令/过滤器/过渡等，如[vue-touch](https://github.com/vuejs/vue-touch)

3. 通过全局 mixin 方法添加一些组件选项，如:[vue-router](https://github.com/vuejs/vue-router)

4. 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。

5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能，如[vue-router](https://github.com/vuejs/vue-router)

Vue.js 的插件应当有一个公开方法`install`。这个方法的第一个参数是`Vue`构造器，第二个参数是一个可选的选项对象：

```
MyPlugin.install =
```

```js
function(Vue, options) 
{
// 1. 添加全局方法或属性
  Vue.myGlobalMethod = function() 
{
// 逻辑...
  }
// 2. 添加全局资源
  Vue.directive(
'my-directive'
, {
    bind (el, binding, vnode, oldVnode) {
// 逻辑...
    }
    ...
  })
// 3. 注入组件
  Vue.mixin({created: function() 
{
// 逻辑...
    }
    ...
  })
// 4. 添加实例方法
  Vue.prototype.$myMethod = function(methodOptions) 
{
// 逻辑...
  }
}
```

# vue指令

# vuex\(为什么要用？\)

每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的**状态 \(state\)**。Vuex 和单纯的全局对象有以下两点不同：

1. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地**提交 \(commit\) mutation**。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

```js
const store =new Vuex.Store(
{
  state:{count:0},
  mutations:{
    increment (state){
      state.count++
    }
  }
})
```

现在，你可以通过`store.state`来获取状态对象，以及通过`store.commit`方法触发状态变更：

```
store.commit('increment')
console.log(store.state.count)// ->1
```



