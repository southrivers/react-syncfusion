import React from 'react';
import { GridComponent, Toolbar, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => {

  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <>
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        {/* 这里必须要注入Toolbar,在强制刷新的时候才会依然保留搜索框 */}
        <Inject services={[Search, Page, Toolbar]} />

      </GridComponent>
    </>
  )
}

export default Employees