import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'

import interactionPlugin from '@fullcalendar/interaction'

import { Container, Modal } from "react-bootstrap"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"


import { MenuFront, repeatingEvents } from "./MenuFront"
import { MenuModal } from "./menu-modal/MenuModal"
import { useAddMealMutation, useGetAllMealsQuery } from "../../api/mealEndpoints"
import { eventShort, resetEventShort, updateEventShort } from "./eventShortSlice"
import { resetFoods } from "../../common/foodsSlice"

export const Menu = () => {


    const [modalShow, setModalShow] = useState(false);
    const [foodShow, setFoodShow] = useState(false);



    const [data, setData] = useState(MenuFront)

    const [repeatingEvent, setRepeatingEvents] = useState(repeatingEvents)

    

const evntShort = useAppSelector(eventShort)

    const dispatch = useAppDispatch()
//const selectedMealSlot = useAppSelector(selMealSlot)
const { data:mealData, error: mealError, isFetching, isLoading: mealLoading } = useGetAllMealsQuery()

console.log("meal data is available")
console.log(mealData)
function handleEventClick(eventInfo:any){
    setModalShow(true)
    // dispatch(changeSelectedMealSlot({
    //     title:eventInfo.event.title,
    //     start: eventInfo.event.start.toString(),
    //     end: eventInfo.event.end.toString(),
    //     menu: eventInfo.event.extendedProps.menu,
    //     color: eventInfo.event.color
    // }))
  

  let ttl 
  if ( eventInfo.event.start.getHours() == 7) {
    ttl = "breakfast s juje"
  } else if ( eventInfo.event.start.getHours()==9) {
    ttl = "morning snack"
  }
  else if ( eventInfo.event.start.getHours()==11) {
    ttl = "morning snack"
  }
  else {
    ttl = "afternoon snack"
  }


   dispatch(resetFoods())

    if (eventInfo.event.extendedProps.foods.length) {
      dispatch(updateEventShort({id:eventInfo.event.id, title:ttl, start: eventInfo.event.start}))
    }
    else {
      dispatch(updateEventShort({id: "", title:ttl, start: eventInfo.event.start}))
    }
  //   addMeal(newMeal)
  //   .unwrap()
  //   .then((payload) => {
  //     console.log('fulfilled', payload)
  //     console.log(mealData)
    
  //  })
  //  .catch((error) => console.error('rejected', error))  
}

function handleModalHide(){
  setModalShow(false)
  dispatch(resetEventShort)
}

function renderEventContent(eventInfo:any) {
       // console.log(eventInfo)
        return (
         
            <div className="text-body position-relative p-3 border-top">

                <div className="menu-img-div">
                    <img className="cover" 
                    src={process.env.PUBLIC_URL + `/imgs/${eventInfo.event.title=="breakfast" ? "tea.jpg"
                : eventInfo.event.title=="morning snack" ? "sun.jpg"
                : eventInfo.event.title=="lunch" ? "rice.jpg"
               : "flower.jpg"}`} />
                 </div>
         
          {
         eventInfo.event.extendedProps.foods.map((item:any, index:any) => (<div key={index}>{item.foodName}</div>))
          } </div>
          
        )
      }

    return (
        <>
        <Container>
        <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        eventSources={[data,
           repeatingEvents, mealData]}
        weekends={false}
        slotDuration= "00:30:00"
  slotLabelInterval= "02:00:00"
        slotMinTime="07:00:00"
        slotMaxTime="17:00:00"
        aspectRatio={2.6}
        eventMinHeight={100}
        allDaySlot={false}
        displayEventTime={false}

        eventContent={renderEventContent}
        // dateClick={handleDayClick}
        eventClick={handleEventClick}
      />
   
    <Modal
    //size="xl"
    fullscreen
    show={modalShow}
    onHide={() => { handleModalHide()}}
    aria-labelledby="example-modal-sizes-title-lg"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
      
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <MenuModal modalShow={modalShow} setModalShow={setModalShow} foodShow={foodShow} setFoodShow={setFoodShow}/>
    </Modal.Body>
  </Modal>
  </Container>
        </>
    )
}