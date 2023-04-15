import { useState } from "react"
import { Card, Button, Modal } from "react-bootstrap"
import { useAppSelector } from "../../../app/hooks";
import { ElementBadges } from "../../../common/element-badges/ElementBadges";
import { lang } from "../../../common/languageSlice";
import { IngredientDetails } from "../ingredient-details/IngredientDetails";
import { IngredientEdit } from "../ingredient-edit/IngredientEdit";

export const IngredientCard = (props:any) => {

  const [show, setShow] = useState(false)

  const [editIt, setEditIt] = useState(false)

  const lng = useAppSelector(lang)

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setEditIt(false)
  }

    const dets = props.details
    return (
        <>
            <Card style={{ width: '18rem', minHeight: '15rem'}} className="float-start m-2">
      
      <Card.Body>
         <ElementBadges badges={dets.tag}/>
        <Card.Title>{lng=='sl'? dets.itemNameSl : dets.itemName}</Card.Title>
       
        <Card.Text>
         {dets.macroNutrients.energyKcal} kcal/100g
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>See details</Button>
      </Card.Body>
    </Card>

    <Modal fullscreen show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */} 
          <h4>{dets.itemName}</h4>
        </Modal.Header>
        <Modal.Body>
        <div className={`banner ${editIt ? "d-none" : "d-block"}`}>
          <IngredientDetails details={dets} editIt={editIt} 
          setEditIt={setEditIt}
     
          />
         </div>

      

         <div className={`banner ${!editIt ? "d-none" : "d-block"}`}>
          <IngredientEdit details={dets} editIt={editIt} 
          setEditIt={setEditIt}
         
          />
         </div>
          
          </Modal.Body>

      </Modal>
        </>
    )
}