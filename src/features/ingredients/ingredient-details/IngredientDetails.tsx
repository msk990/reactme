import { useState } from "react"
import { Row, Col, Table, Button, Form, Modal } from "react-bootstrap"
import { useAppSelector } from "../../../app/hooks"
import { CaloriesCalculator } from "../../../common/calculation-helpers/CaloriesCalculator"
import {savedCalories} from "../../../common/caloriesSlice"
import { Item } from "../../../interfaces/NewIngredientDto"
import { IngredientChart } from "../ingredient-chart/IngredientChart"
import { ElementBadges } from "../../../common/element-badges/ElementBadges"
import { Tag } from "../../../interfaces/Tag"

export const IngredientDetails = (props:any) => {
    const item: Item = props.details
    const editIt = props.editIt
    const setEditIt = props.setEditIt
  
const currCalories = CaloriesCalculator(item.macroNutrients)

const svCalories = useAppSelector(savedCalories)

let [itemTags, setItemTags] = useState<Tag[]>([])
if (item.tag?.length) {
    setItemTags(item.tag)
}




    return(
        <>
        <Row>
            <Col xs={{span: 12}}  lg={{span: 4}} >
            <ElementBadges badges={itemTags}/>
                <Button 
                onClick={()=>{
                    setEditIt(true)
                 
                }}
                variant="success float-start me-3">Edit</Button>

                <Button 
                onClick={()=>{
                  //  setEditIt(true)
                 
                }}
                variant="danger float-start me-3">Delete</Button>


                <div className="clearfix"></div>
                <IngredientChart {...currCalories}/>
              
           
            </Col>

            
            <Col xs={{span: 12}}  lg={{span: 4}} >
            <h5>Vitamins</h5>
            <Table bordered hover size="sm">
                   

                    <tbody>
                    <tr>
                        <td>Vitamin C</td>
                        <td>{item.microNutrients.vitaminC} mg</td>
                        {/* <td><Form.Control size="sm" type="text" placeholder="Small text" /></td> */}
                    </tr>

                    <tr>
                        <td>Vitamin E</td>
                        <td>{item.microNutrients.vitaminE} mg</td>
                    </tr>

                    <tr>
                        <td>Vitamin D</td>
                        <td>{item.microNutrients.vitaminD} mg</td>
                    </tr>

                    <tr>
                        <td>Carotenoides</td>
                        <td>{item.microNutrients.carotenoide} mg</td>
                    </tr>

                    <tr>
                        <td>Retinol</td>
                        <td>{item.microNutrients.retinol} mg</td>
                    </tr>

                    <tr>
                        <td>Thiamin</td>
                        <td>{item.microNutrients.thiamin} mg</td>
                    </tr>

                    <tr>
                        <td>Riboflavin</td>
                        <td>{item.microNutrients.riboflavin} mg</td>
                    </tr>

                    <tr>
                        <td>Niacin</td>
                        <td>{item.microNutrients.niacin} mg</td>
                    </tr>

                    <tr>
                        <td>Vitamin B6</td>
                        <td>{item.microNutrients.b6} mg</td>
                    </tr>

                    <tr>
                        <td>Vitamin B12</td>
                        <td>{item.microNutrients.b12} mg</td>
                    </tr>

                    <tr>
                        <td>Folate</td>
                        <td>{item.microNutrients.folate} mg</td>
                    </tr>
                    </tbody>
            </Table>
           
            </Col>


            <Col xs={{span: 12}}  lg={{span: 4}} >
     
            <h5>Minerals</h5>
            <Table bordered hover size="sm">
                

                    <tbody>
                    <tr>
                        <td>Calcium</td>
                        <td>{item.microNutrients.ca} mg</td>
                    </tr>

                    <tr>
                        <td>Iron</td>
                        <td>{item.microNutrients.fe} mg</td>
                    </tr>

                    <tr>
                        <td>Magnesium</td>
                        <td>{item.microNutrients.mg} mg</td>
                    </tr>


                    <tr>
                        <td>Potassium</td>
                        <td>{item.microNutrients.k} mg</td>
                    </tr>

                    <tr>
                        <td>Sodium</td>
                        <td>{item.microNutrients.na} mg</td>
                    </tr>

                    <tr>
                        <td>Zinc</td>
                        <td>{item.microNutrients.zn} mg</td>
                    </tr>
                    
                    </tbody>
                </Table>
            </Col>


        </Row>
        </>
    )
}


