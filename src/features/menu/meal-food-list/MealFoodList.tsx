import { Button, ListGroup, Modal } from "react-bootstrap"
import { FoodInMenu } from "../food-in-menu/FoodInMenu"
import { Food } from "../../../interfaces/Food"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"

import { MenuFoodSelctor } from "../menu-food-selector/MenuFoodSelector"
import { foodLst } from "../../../common/foodsSlice"
import { useAddMealMutation } from "../../../api/mealEndpoints"
import { eventShort } from "../eventShortSlice"

export const MealFoodList = (props:any) => {
    const modalShow = props.modalShow
    const setModalShow = props.setModalShow 
    const foodShow = props.foodShow
    const setFoodShow = props.setFoodShow

    

    const dispatch = useAppDispatch()
   const foods = useAppSelector(foodLst)

   const {id, title, start} = useAppSelector(eventShort)

   const [addMeal, {error, isLoading}] = useAddMealMutation()
const newMeal = {
  start: start,
  foods:foods
}
const saveMeal = () => {
  if (foods.length) {
      addMeal(newMeal)
    .unwrap()
    .then((payload) => {
      console.log('fulfilled', payload)
     // console.log(mealData)
    
   })
   .catch((error) => console.error('rejected', error)) 
  }
  else { alert("Please add food items")}
}

    return(

        <>

<ListGroup variant="flush">
            {
               foods&&foods.length ?
foods.map((food:any, index:number) =>(
  
<FoodInMenu key={index} food={food} index={index}/>

  
   )) : null
}
</ListGroup>
<div>
<Button 
className="mt-3" 
variant="success"
onClick={() => setFoodShow(true)}
>Add Food</Button>

<Button 
className="mt-3" 
variant="primary"
onClick={() => saveMeal()}
>Submit</Button>

</div>
<Modal
        //size="lg"
        fullscreen
        show={foodShow}
        onHide={() => setFoodShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Select Food
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <MenuFoodSelctor modalShow={modalShow} setModalShow={setModalShow} foodShow={foodShow} setFoodShow={setFoodShow}/>
        </Modal.Body>
      </Modal>     
        </>
    )
}