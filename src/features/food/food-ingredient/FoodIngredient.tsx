import { Button, ListGroup } from "react-bootstrap"
import { useAppSelector } from "../../../app/hooks"
import { lang } from "../../../common/languageSlice"

export const FoodIngredient = (props:any) => {

    const ingredient = props.ingredient
    const index = props.index
  
    const lng = useAppSelector(lang)
    return(
        <>
                <ListGroup.Item as="li" key={index} className="mt-3"
   
   >

  <div className="d-flex w-100 justify-content-between">
    <h6 className="mb-1">{ingredient.quantity} kg {lng=='sl' ? ingredient.item.itemNameSl : ingredient.item.itemName}</h6>
   <div>
   
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
        </>
    )
}