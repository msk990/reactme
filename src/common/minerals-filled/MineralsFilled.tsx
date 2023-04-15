import { Table } from "react-bootstrap"

export const MineralsFilled = (props:any) => {

    const microNutrients = props.microNutrients
    return(
        <>
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
        </>
    )
}