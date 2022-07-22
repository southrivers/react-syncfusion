import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useEffect } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import { useStateContext } from '../contexts/ContextProvider';
import {BiNotification} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {UserProfile, Chat} from '.'


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
  // 将屏幕尺寸的函数放到这里也是可以的,因为不论什么页面肯定会加载这里的组件,放到侧边可能不太好
  const {activeMenu, setactiveMenu, isClicked, setisClicked, handleClick,screenSize, setscreenSize} = useStateContext()

  // 组件的初始化函数,一般是可以用于从数据库中获取数据
  useEffect(()=>{
    // 为什么要分开定义屏幕尺寸?
    const handleWindowSize = () => {
      setscreenSize(window.innerWidth);
    }
    // https://blog.csdn.net/weixin_46554760/article/details/109177309
    // https://juejin.cn/post/6844903958499049479
    window.addEventListener('resize',handleWindowSize);
    // TODO 这一步才是针对初始化所作的操作,添加和移除事件监听器的逻辑和这里是没有关系的
    handleWindowSize();
    return () => {
      window.removeEventListener('resize',handleWindowSize);
    }
  },[])

  // 监听屏幕的尺寸,并对显示或者隐藏进行调整
  useEffect(()=> {
    if (screenSize < 798) {
      setactiveMenu(false);
    } else {
      setactiveMenu(true);
    }
  },[screenSize])

  return (
    <div className='flex justify-between p-2 pt-5 relative space-x-100'>
        <NavButton title="菜单" icon={<AiOutlineMenu/>} customFunc={() => {
          setactiveMenu((pre) => !pre);
        }}/>
        <div className='flex space-x-5 mr-2'>
          <NavButton title='消息' icon={<BiNotification/>} customFunc={()=>{
            console.log('消息')
            handleClick('chat');
          }}/>
          <NavButton title='个人信息' icon={<AiOutlineUser/>} customFunc={()=>{
            handleClick('userProfile');
          }}/>
          {isClicked.chat && <Chat/>}
          {isClicked.userProfile && <UserProfile/>}
        </div>
        {/* <TooltipComponent content="菜单" position='BottomCenter'>
          <AiOutlineMenu/>
        </TooltipComponent> */}
    </div>
  )
}

export default Navbar



// boolean && Component 是一种很骚气的写法,之所以能这样做，是因为在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false。
// https://zh-hans.reactjs.org/docs/conditional-rendering.html