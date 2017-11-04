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

# vue插件

# vue指令

# vuex\(为什么要用？\)



