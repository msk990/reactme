import { Row, Col } from "react-bootstrap"
import { MacroNutrients } from "../../../common/macro-nutrients/MacroNutrients"
import { Minerals } from "../../../common/minerals/Minerals"
import { Vitamins } from "../../../common/vitamins/Vitamins"

export const AlternativeForm = () => {

    return(
        <>
        <Row>
            <Col>
            <MacroNutrients  per="portion"/>
            <Minerals per="portion"/>
            </Col>
            <Col>
            <Vitamins per="portion"/>
            </Col>
        </Row>
        
        </>
    )
}