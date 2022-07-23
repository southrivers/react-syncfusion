import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Resize, Sort, Search, Toolbar} from '@syncfusion/ej2-react-grids'
import { ordersData, ordersGrid } from '../data/dummy'

const Orders = () => {
  return (
    <>
      <GridComponent
        key='orders'
        dataSource={ordersData}
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 10 }}
        width="auto"
        toolbar={['Search']}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            // 这里是渲染一个单元格,通过repeat达到对表头的渲染
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Resize, Sort, Search,Toolbar]}/>
      </GridComponent>
    </>
  )
}

export default Orders