import { Table } from "react-bootstrap"

export const VitaminsFilled = (props:any) => {

    const microNutrients = props.microNutrients
    return(
        <>
         <h5>Vitamins</h5>
            <Table bordered hover size="sm">
                   

                    <tbody>
                    <tr>
                        <td>Vitamin C</td>
                        <td>{microNutrients.vitaminC} mg</td>
                        {/* <td><Form.Control size="sm" type="text" placeholder="Small text" /></td> */}
                    </tr>

                    <tr>
                        <td>Vitamin E</td>
                        <td>{microNutrients.vitaminE} mg</td>
                    </tr>

                    <tr>
                        <td>Vitamin D</td>
                        <td>{microNutrients.vitaminD} mg</td>
                    </tr>

                    <tr>
                        <td>Carotenoides</td>
                        <td>{microNutrients.carotenoide} mg</td>
                    </tr>

                    <tr>
                        <td>Retinol</td>
                        <td>{microNutrients.retinol} mg</td>
                    </tr>

                    <tr>
                        <td>Thiamin</td>
                        <td>{microNutrients.thiamin} mg</td>
                    </tr>

                    <tr>
                        <td>Riboflavin</td>
                        <td>{microNutrients.riboflavin} mg</td>
                    </tr>

                    <tr>
                        <td>Niacin</td>
                        <td>{microNutrients.niacin} mg</td>
                    </tr>

                    <tr>
                        <td>Vitamin B6</td>
                        <td>{microNutrients.b6} mg</td>
                    </tr>

                    <tr>
                        <td>Vitamin B12</td>
                        <td>{microNutrients.b12} mg</td>
                    </tr>

                    <tr>
                        <td>Folate</td>
                        <td>{microNutrients.folate} mg</td>
                    </tr>
                    </tbody>
            </Table>
           
        </>
    )
}