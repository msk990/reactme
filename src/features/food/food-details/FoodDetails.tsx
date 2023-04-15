import { useState } from "react"
import { CaloriesCalculator } from "../../../common/calculation-helpers/CaloriesCalculator"
import { Food } from "../../../interfaces/Food"
import { Tag } from "../../../interfaces/Tag"
import { Button, Col, Row } from "react-bootstrap"
import { ElementBadges } from "../../../common/element-badges/ElementBadges"
import { FoodChart } from "../food-chart/FoodChart"
import { FoodIngredients } from "../food-ingredients/FoodIngredients"
import { VitaminsFilled } from "../../../common/vitamins-filled/VitaminsFilled"
import { MineralsFilled } from "../../../common/minerals-filled/MineralsFilled"

export const FoodDetails = (props:any) => {
    const food: Food = props.details
    const editIt = props.editIt
    const setEditIt = props.setEditIt

    const currCalories = CaloriesCalculator(food.macroNutrients)
    
    let [itemTags, setItemTags] = useState<Tag[]>([])
if (food.tag?.length) {
    setItemTags(food.tag)
}
    return (
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
                <FoodChart {...currCalories}/>
              
           
            </Col>
            <Col xs={{span: 12}}  lg={{span: 4}} >
                    <FoodIngredients ings={food.ingredients} />
            </Col>

            <Col xs={{span: 12}}  lg={{span: 4}} >
                <VitaminsFilled microNutrients={food.macroNutrients}/>
                <MineralsFilled microNutrients={food.macroNutrients}/>
            </Col>
            </Row>


        </>
    )
}