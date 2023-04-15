import { Table } from "react-bootstrap"
import { useFormContext } from "react-hook-form";
export const Minerals = (props:any) => {
  const per = props.per
    const { register, formState: { errors } } = useFormContext();
    return(
        <>
        <h5 className="mt-4 mb-3">Minerals (per {per})</h5>
                <Table bordered hover size="sm">
                   

                   <tbody>
                   <tr>
                       <td>Calcium (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.ca')}
                       
                        className="form-control form-control-sm"
                        
                      
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.ca?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Iron (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.fe')}
                       
                        className="form-control form-control-sm"
                        
                        
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.fe?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Magnesium (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.mg')}
                       
                        className="form-control form-control-sm"
                    
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.mg?.message}</>
                        </small>
                        </td>
                   </tr>
                   <tr>
                       <td>Potassium (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.k')}
                       
                        className="form-control form-control-sm"
                      
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.k?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Sodium (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.na')}
                       
                        className="form-control form-control-sm"
                        
                       
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.na?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Zinc (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.zn')}
                       
                        className="form-control form-control-sm"
                        
                      
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.zn?.message}</>
                        </small>
                        </td>
                   </tr>

                   </tbody>
                </Table>

        </>
    )
}