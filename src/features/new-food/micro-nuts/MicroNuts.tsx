import { Col, Form, Row, Table } from "react-bootstrap"

export const MicroNuts = (props:any) => {

    const microNutrients = props.microNutrients
    return (
        <>
     
       {microNutrients ? (<>
       
       
     
        
            <h5>Vitamins</h5>
            <Table bordered hover size="sm">
                   

                    <tbody>
                    <tr>
                        <td>Vitamin C</td>
                        {/* <td>{microNutrients.vitaminC} mg</td> */}
                        <td><Form.Control size="sm" type="text" placeholder="Small text" /></td>
                    </tr>

                    <tr>
                        <td>Vitamin E</td>
                        <td>{microNutrients.vitaminE!} mg</td>
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
           
        
     
            <h5>Minerals</h5>
            <Table bordered hover size="sm">
                

                    <tbody>
                    <tr>
                        <td>Calcium</td>
                        <td>{microNutrients.ca} mg</td>
                    </tr>

                    <tr>
                        <td>Iron</td>
                        <td>{microNutrients.fe} mg</td>
                    </tr>

                    <tr>
                        <td>Magnesium</td>
                        <td>{microNutrients.mg} mg</td>
                    </tr>


                    <tr>
                        <td>Potassium</td>
                        <td>{microNutrients.k} mg</td>
                    </tr>

                    <tr>
                        <td>Sodium</td>
                        <td>{microNutrients.na} mg</td>
                    </tr>

                    <tr>
                        <td>Zinc</td>
                        <td>{microNutrients.zn} mg</td>
                    </tr>
                    
                    </tbody>
                </Table>
            

        </>) : null}
        </>
    )
}