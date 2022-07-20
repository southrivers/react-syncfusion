import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {SiShopware} from 'react-icons/si'
import {MdCancel} from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data/dummy';


const SiderBar = () => {
  return (
    // overflow-auto可以控制当元素超出页面的时候有滚动条的出现
    <div className='h-screen overflow-auto'>
      {/* 侧边导航头 */}
      <div className='flex m-3 mt-4 justify-between'>
        <Link to="/" onClick={()=>{}} className='flex m-2 mt-4 space-x-1'>
          <SiShopware/> <span className='font-bold'>Shoppy</span>
        </Link>
        <div className='m-2 mt-4'>
          <TooltipComponent content="关闭" position='TopCenter'>
            <button type='button'>
              <MdCancel className='text-xl'/>
            </button>
          </TooltipComponent>
        </div>
      </div>
      <div className='mt-10'>
        {links.map((item) => (
          <div key={item.title}>
            <p className='mt-4 m-4 uppercase'>
              {item.title}
            </p>
            {item.links.map((link) => (
                <NavLink to={`/${link.name}`} key={links.name} onClick={()=>{}} className='capitalize items-center flex gap-5 ml-2 pl-4 pt-3 pb-2.5'>
                  {/* icon 是块元素,可以控制该块对应元素不要显示在一行 */}
                  {link.icon}
                  <span>{link.name}</span>
                </NavLink>
            ))}
          </div>
        ))}
        {/* {links.map(item => {
          // 使用大括号来构建元素的话需要return,如果使用小括号的话不需要return
          return <div key={item.title} className='m-3 mt-4'>
              {item.title}
          </div>

        })} */}
      </div>
    </div>
  )
}

export default SiderBar

// Link 或者NavLink都是控制数据在页面上的显示效果,真正的路由发生在对应的routes中.
// 在js中callback的意义在于获取ajax数据,如果单纯的链接跳转的话,更多的像是静态页面,因此回调函数在js中非常重要