import React, {createContext, useState, useContext} from 'react';


// 创建数据库
const StateContext = createContext();

const initialState = {
    chat: false,
    notification: false,
    userProfile: false
}

// 给出构造函数,将初始值和数据库包含进去      最终将暴露出一个能够提供给系统级状态的函数
export const ContextProvider = ({children}) => {
    // 这里相当于是构造函数默认的值,对应的children则更多的像是    
    const [activeMenu, setactiveMenu] = useState(true)

    return (<StateContext.Provider
        value={{
            activeMenu,
            setactiveMenu,
        }}
    >
        {/* 上面的value接受的是一个对象 */}
        {children}
    </StateContext.Provider>)
}

// 这里是将对应的状态暴露出去
export const useStateContext = () => useContext(StateContext)