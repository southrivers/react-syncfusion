import React from 'react'
import {ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject} from '@syncfusion/ej2-react-schedule'

import { scheduleData } from '../data/dummy'

const Calendar = () => {
  return (
    <>
      <ScheduleComponent
        selectedDate={new Date(2021,0,10)}
        height="650"
        eventSettings={{dataSource: scheduleData}}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>
    </>
  )
}

export default Calendar