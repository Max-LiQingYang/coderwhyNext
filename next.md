## React18 ssr
在 React 中创建 SSR 需要调用 ReactDOM.hydrateRoot() 而不是 ReactDOM.createRoot()

- createRoot: 创建一个 Root 接着调用 render 方法将 App 直接加载到页面上
- hydrateRoot: 创建 水合Root，在激活的模式下渲染 App

服务端可用 ReactDOM.renderToString 来进行渲染。

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../index.jsx';

// 在客户端激活应用, 应用可以进行交互(这个过程称为 hydration 水合)
ReactDOM.hydrateRoot(document.getElementById('root'), <App />);
```


## Node 搭建