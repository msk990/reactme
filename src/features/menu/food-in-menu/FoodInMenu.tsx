import { Button, ListGroup } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { Food } from "../../../interfaces/Food"
import { lang } from "../../../common/languageSlice"
import { removeFood } from "../../../common/foodsSlice"

export const FoodInMenu = (props:any) => {
    const lng = useAppSelector(lang)


  
            const food = props.food
  
  const dispatch = useAppDispatch()
  

    const handleRemove = (food:Food) => {
       dispatch(removeFood(food))
      

        

        
    }
    return (
     
        <ListGroup.Item as="li" className="mt-3"
   
     >

    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{food.foodName}</h5>
      <div>
      <Button variant="danger"
     //</div> onClick={() => {addToMenu(item.id, item.title
      //  )}}
      size="sm"
      onClick = {() => handleRemove(food)}
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