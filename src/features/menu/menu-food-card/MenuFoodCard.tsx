import { Card, Button } from "react-bootstrap"
import { ElementBadges } from "../../../common/element-badges/ElementBadges"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { lang } from "../../../common/languageSlice"

import { Food } from "../../../interfaces/Food"
import { addFood } from "../../../common/foodsSlice"

export const MenuFoodCard = (props:any) => {
    const dets = props.details
    const lng = useAppSelector(lang)

   
    const dispatch = useAppDispatch()

    const handleClick = (food:Food) => {

 
      dispatch(addFood(food))

    }
    return(
        <>
               <Card style={{ width: '18rem', minHeight: '15rem'}} className="float-start m-2">
      
      <Card.Body>
         <ElementBadges badges={dets.tag}/>
        <Card.Title>{lng=='sl'? dets.foodNameSl : dets.foodName}</Card.Title>
       
        <Card.Text>
         {dets.macroNutrients.energyKcal} kcal/100g
        </Card.Text>
        <Button 
        onClick={()=>{handleClick(dets)}}
        variant="success" >Add to meal</Button>
      </Card.Body>
    </Card>
        </>
    )
}