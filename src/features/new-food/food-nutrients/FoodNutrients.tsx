import { Button, Col, Form, Offcanvas, Row, Table } from "react-bootstrap"
import { useAppSelector } from "../../../app/hooks"
import { foodCaloriesPerPortion } from "../../../common/calculation-helpers/GetMacroArray"
import { ingreds } from "../../../common/ingredientsSlice"
import { MacroChart } from "../../../common/macro-chart/MacroChart"
import { Ingredient } from "../../../interfaces/Food"
import { useState } from "react"
import { MicroNutrients } from "../../../interfaces/Nutrients"
import { foodMicrosPerPortion, getMicroPerPortion } from "../../../common/calculation-helpers/GetMicroArray"
import { MicroNuts } from "../micro-nuts/MicroNuts"

export const FoodNutrients = () => {

    const [showSide, setShowSide] = useState(false)


    const ingz:Ingredient[] = useAppSelector(ingreds)

    const ju = ingz.length ? foodCaloriesPerPortion(ingz) : null

    // const micros = {
    //     ca: 0,
    //     fe: 0,
    //     mg: 0,
    //     k: 0,
    //     na: 0,
    //     zn: 0,
    //     carotenoide: 0,
    //     retinol:0,
    //     thiamin: 0,
    //     riboflavin: 0,
    //     niacin: 0,
    //     b6: 0,
    //     b12: 0,
    //     folate: 0,
    //     vitaminC: 0,
    //     vitaminD: 0,
    //     vitaminE: 0,
    // }

    const microNutrients = ingz.length ? foodMicrosPerPortion(ingz) : null
    //ingz.length ? foodCaloriesPerPortion(ingz) : null

    // if (ingz.length) {
    //     setMicroNutrients(foodMicrosPerPortion(ingz))
    // }
  


    return(
        <>
      {ingz.length ? (<MacroChart {...ju}/>) : null}  

        <Button 
        onClick={() => setShowSide(true)}
        variant="success">
            See micro nutrients</Button>

        <Offcanvas show={showSide} onHide={() => {setShowSide(false)}} placement="end">
       <Offcanvas.Header closeButton>
        
        </Offcanvas.Header>
        <Offcanvas.Body>
        {/* <AlternativeForm /> */}
        <MicroNuts microNutrients={microNutrients}/>
        
       
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
}