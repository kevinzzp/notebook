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

# vue指令

# vuex\(为什么要用？\)



