import { Button, ListGroup } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { removeIngredient } from "../../../common/ingredientsSlice"
import { Ingredient } from "../../../interfaces/Food"
import { lang } from "../../../common/languageSlice"

export const IngredientInList = (props:any) => {
    const ingredient = props.ingredient
    const index = props.index
    const dispatch = useAppDispatch()
    const lng = useAppSelector(lang)
  

    const handleRemove = (ing:Ingredient) => {
        dispatch(removeIngredient(ing))
        console.log(ing)

        

        
    }
    return (
     
        <ListGroup.Item as="li" key={index} className="mt-3"
   
     >

    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{ingredient.quantity} kg {lng=='sl' ? ingredient.item.itemNameSl : ingredient.item.itemName}</h5>
     <div>
      <Button variant="danger"
     //</div> onClick={() => {addToMenu(item.id, item.title
      //  )}}
      size="sm"
      onClick = {() => handleRemove(ingredient)}
      >remove</Button>
    </div>
    </div>
   <div>
   {  

    // <>
    //     <Badge className="mr-5" bg="secondary">{item.type}</Badge>
    //     <span>{' '}</span>
        
    //     </>

      }
       
    </div>

  </ListGroup.Item>
     
    )
}


