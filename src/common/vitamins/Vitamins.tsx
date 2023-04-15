import { Table } from "react-bootstrap";
import { useFormContext } from "react-hook-form";

export const Vitamins = (props:any) => {
    const per = props.per
    const { register, formState: { errors } } = useFormContext();
    return(
        <>
        <h5 className="mt-4 mb-3">Vitamins (per {per})</h5>
                <Table bordered hover size="sm">
                   

                   <tbody>
                   <tr>
                       <td>Carotenoids (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.carotenoide')}
                       
                        className="form-control form-control-sm"
                        
                       
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.carotenoide?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Retinol (mg)</td>
                       
                       <td>
                      
                        <input 
                        {...register('microNutrients.retinol')}
                       
                        className="form-control form-control-sm"
                        
                       
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.retinol?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Thiamin (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.thiamin')}
                       
                        className="form-control form-control-sm"
                        
                     
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.thiamin?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Riboflavin (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.riboflavin')}
                       
                        className="form-control form-control-sm"
                        
                      
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.Riboflavin?.message}</>
                        </small>
                        </td>
                   </tr>
                   <tr>
                       <td>Niacin (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.niacin')}
                       
                        className="form-control form-control-sm"
                        
                       
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.niacin?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Vitamin b6 (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.b6')}
                       
                        className="form-control form-control-sm"
                        
                       
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.b6?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Vitamin b12 (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.b12')}
                       
                        className="form-control form-control-sm"
                        
                     
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.b12?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Folate (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.folate')}
                       
                        className="form-control form-control-sm"
                        
                      
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.folate?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Vitamin C (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.vitaminC')}
                       
                        className="form-control form-control-sm"
                        
                      
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.vitaminC?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Vitamin D (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.vitaminD')}
                       
                        className="form-control form-control-sm"
                        
                
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.vitaminD?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Vitamin E (mg)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('microNutrients.vitaminE')}
                       
                        className="form-control form-control-sm"
                        
                       
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.vitaminE?.message}</>
                        </small>
                        </td>
                   </tr>
                   </tbody>
                   </Table>
        </>
    )
}