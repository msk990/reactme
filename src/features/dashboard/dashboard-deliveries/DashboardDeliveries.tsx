import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

export const DashboardDeliveries = () => {
    const events = [
        { title: 'Meeting', 
        start: new Date().setUTCHours(0,0,0,0)
    
    },
    { title: 'Meeting at dawn', 
    start: new Date().setUTCHours(7,30,0,0)

}
      ]

    return (
        <>
         <div>
      <h4 className='mt-2'>Deliveries</h4>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView='timeGridDay'
        weekends={false}
        events={events}
        aspectRatio={0.9}
     //   eventContent={renderEventContent}
      />
    </div>
        </>
    )
}

function renderEventContent(eventInfo:any) {
    return (
      <div className="bg-success">
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    )
  }