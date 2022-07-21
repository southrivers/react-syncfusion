import React from 'react';
// 为什么引入依赖不可以使用"{}" ?
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
// 加{}的导入操作更多的像是析构函数的导入,也就是从中提取有用的导出数据,不加{}则只将default的组件导出
import { ContextProvider } from './contexts/ContextProvider'


ReactDOM.render(
    <ContextProvider>
        <App/>
    </ContextProvider>
    , document.getElementById('root'))