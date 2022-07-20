import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {SiShopware} from 'react-icons/si'
import {MdCancel} from 'react-icons/md'
// TODO 这里应该不允许和pages有冲突
import {SiderBar, Navbar, Footer, ThemeSettings} from './components';

import { Calendar, Customers, Ecommerce, Editor, Employees, Kanban, Orders } from './pages'

import './App.css'

const App = () => {
  const activeMenu = true;

  return (
    <div className='h-screen'>
      {/* 使用内联的style去定义样式的时候是想要改变主题
       */}
      <BrowserRouter>
        <div className='flex relative'>
          <div className='fixed right-4 bottom-4 z-1000'>
            <TooltipComponent content="设置" position='TopCenter'>
              <button type='button' className='text-3xl'>
                <FiSettings></FiSettings>
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? 
          (<div className='fixed w-72 bg-slate-700'>
            <SiderBar/>
          </div>) : (<div className='w-0 bg-secondary-dark-bg'>
            <SiderBar/>
          </div>)}
          {/* react js 脚本不仅可以在html中使用，也可以在标签中的属性中使用，并且可以借用字符串模板进行使用，字符串模板中使用需要用$将其括起来 */}
            <div className={`min-h-screen w-full  ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
              <div className='flex md:static w-full items-center justify-center'>
                <Navbar/>
              </div>
              <div>
                <Routes>
                  <Route path="/" element={<Ecommerce/>}/>
                  <Route path="/ecommerce" element={<Ecommerce/>}/>

                  {/* pages */}
                  <Route path="/orders" element={<Orders/>}/>
                  <Route path="/employees" element={<Employees/>}/>
                  <Route path="/customers" element={<Customers/>}/>

                  {/* Apps */}
                  <Route path="/kanban" element={<Kanban/>}/>
                  <Route path="/editor" element={<Editor/>}/>
                  <Route path="/calendar" element={<Calendar/>}/>
                </Routes>
              </div>
            </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App


// position 是用来控制位置的，常见的属性值有fixed、absolute、relative、static
// https://developer.mozilla.org/zh-CN/docs/Web/CSS/position
// display 是用来控制显示的样式的，常见的有flex、block、none 并且只对其直属元素才有控制的能力，是直属元素
