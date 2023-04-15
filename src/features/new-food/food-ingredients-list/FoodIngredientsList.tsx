import { useState } from "react"
import { Badge, Button, ListGroup, Modal } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { ingreds, removeIngredient } from "../../../common/ingredientsSlice"
import { resetItem } from "../../../common/itemSlice"
import { Ingredient } from "../../../interfaces/Food"
import { IngredientAdder } from "../ingredient-adder/IngredientAdder"
import { IngredientInList } from "../ingredient-in-list/IngredientInList"
import { IngredientSelector } from "../ingredient-selector/IngredientSelector"

export const FoodIngredientsList = (props:any) => {
    const dispatch = useAppDispatch()

    const [show, setShow] = useState(false)
    const [addIt, setAddIt] = useState(false)

    const handleAddIng = () => {
        setShow(true)
        setAddIt(false)
      //  setShow(false)
        dispatch(resetItem())

    }

    let ingz:Ingredient[] = useAppSelector(ingreds)

    const handleRemove = (ing:Ingredient) => {
        dispatch(removeIngredient(ing))
        
        
    }
    
    return (
        <>
        <h5>Ingredients</h5>
        <Button 
        variant="success"
        className="mt-2"
        onClick={()=>{handleAddIng()}}
        
        >Add ingredient</Button>

        <ListGroup variant="flush">
            {
ingz.map((ingredient : Ingredient, index) =>(
  
<IngredientInList key={index} ingredient={ingredient} index={index}/>

  
   ))
}
</ListGroup>
<Modal
        //size="lg"
        fullscreen
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Select ingredient
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className={`banner ${addIt ? "d-none" : "d-block"}`}>
            <IngredientSelector addIt={addIt} setAddIt={setAddIt}/>
        </div>
        <div className={`banner ${!addIt ? "d-none" : "d-block"}`}>
            <IngredientAdder addIt={addIt} setAddIt={setAddIt} setShow={setShow}/>
        </div>
        </Modal.Body>
      </Modal>
        </>
    )
}