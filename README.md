<!-- <p align="center">
  <a href="http://example.shisongyan.top/rc-dynamic-chart/">
    <img src="https://user-gold-cdn.xitu.io/2019/4/12/16a10d8dc669701e?w=2544&h=1206&f=png&s=546061">
  </a>
</p> -->

<h1 align="center">rc-dynamic-chart</h1>


<div align="center">
基于 react、antd 的企业级中后台动态表单组件，支持 30 余种类型字段。
</div>

## ✨ 特性
- 支持 30 种字段类型的预览编辑。
- 支持字段编辑撤销。
- 底层组件基于蚂蚁金服 antd，可扩展性强。



## 📦 安装
```bash
npm install rc-dynamic-form --save
```

```bash
yarn add rc-dynamic-form
```

## 🔨 示例
```jsx
import DynamicForm from 'rc-dynamic-form';

ReactDOM.render(<DynamicForm />, mountNode);
```

引入样式：

```jsx
import 'rc-dynamic-form/lib/style';  
```
## 🍭 API
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| help | 关于字段的表述信息 | string | null |
| editable | 表单是否允许编辑 | boolean | true |
| undoable | 编辑字段是否允许撤销 | boolean | true |
| [value](./src/pages/data/value.tsx) | 表单字段的值 | object | {} |
| isView | 设置编辑查看状态 | boolean | true |
| [config](./src/pages/data/config.tsx) | 表单字段信息 | object | {} |
| onSave | 保存按钮回调函数 | values => {} | null |
| focusId | 获取焦点的字段 | string | null |
| onCancel | 取消按钮的回调 | function | null |
| onItemEdit | 点击字段编辑按钮的回调 | fieldName => {} | null |
| collapseBordered | 表单容器 Collapse 是否具有边框 | boolean | false |
| getInstance | 获取组件实例的回调 | ref => {} | null |



## ⌨️ 本地开发
```bash
$ git clone git@github.com:Dolov/rc-dynamic-form.git
$ cd rc-dynamic-form
$ npm install
$ npm start
```

打开浏览器访问 http://127.0.0.1:8000