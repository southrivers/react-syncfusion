import React from 'react'

import {KanbanComponent, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-kanban'

import {kanbanData, kanbanGrid} from '../data/dummy'


const Kanban = () => {
  return (
    <>
      <KanbanComponent
      id='kanban'
      dataSource={kanbanData}
      cardSettings={{contentField: 'Summary', headerField:'Id'}}
      keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </>
  )
}

export default Kanban