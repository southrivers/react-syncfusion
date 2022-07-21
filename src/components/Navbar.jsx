import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import { useStateContext } from '../contexts/ContextProvider';
import {BiNotification} from 'react-icons/bi'


// {} 表示组件用来接受参数的容器,这个和state并不同,state是全局共享的,props是组件间进行传递的

// 注意:这里的函数使用的是小括号不是中括号,只有使用小括号才算是返回值,或者简单点,如果使用大括号就需要return
const NavButton = ({title, icon, customFunc}) => (
  <TooltipComponent
  content={title}
  position="BottomCenter"
  >
    {/* 为什么这里的onclick不是回调函数????,因为这里传递的就是一个回调函数 */}
    <button type='button' onClick={customFunc} className='text-2xl'>
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu, setactiveMenu} = useStateContext()
  return (
    <div className='flex justify-between p-2 pt-5 relative space-x-100'>
        <NavButton title="菜单" icon={<AiOutlineMenu/>} customFunc={() => {
          setactiveMenu((pre) => !pre);
        }}/>
        <div className='flex'>
          <NavButton title='消息' icon={<BiNotification/>} customFunc={()=>{
            // handleClick('notification');
          }}/>
        </div>
        {/* <TooltipComponent content="菜单" position='BottomCenter'>
          <AiOutlineMenu/>
        </TooltipComponent> */}
    </div>
  )
}

export default Navbar