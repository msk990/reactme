import { Row, Col, Table, Button } from "react-bootstrap"




import { foodList } from "../FoodListData"
import { useState } from "react"
import { MealFoodList } from "../meal-food-list/MealFoodList"
import { MacroChart } from "../../../common/macro-chart/MacroChart"
import { FoodMainChart } from "../food-main-chart/FoodMainChart"
import { FoodBarChart } from "../food-bar-chart/FoodBarChart"
import { FoodProcessingChart } from "../food-processing-chart/FoodProcessingChart"
import { LegendNutrients } from "../../../common/legend-nutrients/LegendNutrients"
import { LegendProcessing } from "../../../common/legend-processing/LegendProcessing"

export const MenuModal = (props:any) => {

    const modalShow = props.modalShow
const setModalShow = props.setModalShow 
const foodShow = props.foodShow
const setFoodShow = props.setFoodShow
    return(
        <>
        <Row>
            <Col xs={{span: 12}}  lg={{span: 3}} >
               <MealFoodList  modalShow={modalShow} setModalShow={setModalShow} foodShow={foodShow} setFoodShow={setFoodShow}/>

            </Col>

            <Col xs={{span: 12}}  lg={{span: 9}} >
                

                <Row className="p-3">
                    
                <Col xs={{span: 12}}  lg={{span: 5}} >
                    <h5>Macro nutrients</h5>
                   
                    <FoodMainChart />
                    <div className="mt-3">
                        <h5>Daily %</h5>
                    <FoodBarChart />
                    </div>
                </Col>
                <Col xs={{span: 12}}  lg={{span: 1}} >
              <div className="ml-20">
            <LegendNutrients />

               </div>
             
                </Col>
                <Col xs={{span: 12}}  lg={{span: 4}} >
              <h5>Food processing</h5>
              
                <FoodProcessingChart />

                <h5 className="mt-3 mb-2">Micro nutrients</h5>
            <Table bordered hover size="sm" className="text-sm">
                   <thead>
                   <td>nutrients</td>
                        <td> quantity</td> 
                        <td>% daily</td>

                   </thead>

                    <tbody>
                    <tr>
                        <td>Vitamin C</td>
                        <td>200 mg</td> 
                        <td>90%</td>
                    </tr>
                    <tr>
                        <td>Vitamin D</td>
                        <td>100 mg</td> 
                        <td>74%</td>
                    </tr>

                    <tr>
                        <td>Calcium</td>
                        <td>200 mg</td> 
                        <td>90%</td>
                    </tr>

                    <tr>
                        <td>Iron</td>
                        <td>200 mg</td> 
                        <td>90%</td>
                    </tr>
                    </tbody>

            </Table>

            <Button variant="primary" size="sm" className="float-end">
          See all micro nutrients
        </Button>
                </Col>
                <Col xs={{span: 12}}  lg={{span: 2}} >
                <LegendProcessing />
                </Col>
               
                </Row>
               
            </Col>
        </Row>
        </>
    )
}