import { useState } from "react"
import { Ingredient } from "../../../interfaces/Food"
import { ListGroup } from "react-bootstrap"
import { FoodIngredient } from "../food-ingredient/FoodIngredient"

export const FoodIngredients = (props:any) => {
   
    const ingz = props.ings

    const [show, setShow] = useState(false)
    const [addIt, setAddIt] = useState(false)

    const handleAddIng = () => {
        setShow(true)
        setAddIt(false)
      //  setShow(false)
      

    }

   // let ingz:Ingredient[] = useAppSelector(ingreds)
    return (
        <>
        <h5>Ingredients</h5>
        <ListGroup variant="flush">
            {
ingz.map((ingredient : Ingredient, index:number) =>(
  
<FoodIngredient key={index} ingredient={ingredient} index={index}/>

  
   ))
}
</ListGroup>
        </>
    )

}