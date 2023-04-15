import { Button, Card } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { ElementBadges } from "../../../common/element-badges/ElementBadges"
import { updateItem } from "../../../common/itemSlice"
import { lang } from "../../../common/languageSlice"
import { Item } from "../../../interfaces/NewIngredientDto"

export const SelectIngredientCard = (props:any) => {

    const dets = props.details
    const dispatch = useAppDispatch()
    const lng = useAppSelector(lang)

    const addIt = props.addIt
    const setAddIt = props.setAddIt

    const handleAddIt =(item:Item) => {
        setAddIt(true)
        dispatch(updateItem(item))
    }
    return(
        <>
           <Card style={{ width: '18rem', minHeight: '15rem'}} className="float-start m-2">
      
      <Card.Body>
         <ElementBadges badges={dets.tag}/>
        <Card.Title>{lng=='sl'? dets.itemNameSl : dets.itemName}</Card.Title>
       
        <Card.Text>
         {dets.macroNutrients.energyKcal} kcal/100g
        </Card.Text>
        <Button variant="success" 
        onClick={()=>{handleAddIt(dets)}}
        >
            Add ingredient</Button>
      </Card.Body>
    </Card>
        </>
    )
}