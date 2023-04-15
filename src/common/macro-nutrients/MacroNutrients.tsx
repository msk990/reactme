import { Table } from "react-bootstrap"
import { useFormContext } from "react-hook-form";

export const MacroNutrients = (props:any) => {
    const { register, formState: { errors } } = useFormContext();
    
    const per = props.per
    return(
        <>
               <h5 className="mt-4 mb-3">Macronutrients (per {per})</h5>
                <Table bordered hover size="sm">
                   

                   <tbody>
                   <tr>
                       <td>Energy (kj)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('macroNutrients.energyKj')}
                       
                        className="form-control form-control-sm"
                        
                        
                        />
                     
                         <small id="emailHelp" className="form-text text-danger">
                            <>{errors.energyKj?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Energy (kcal)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('macroNutrients.energyKcal')}
                       
                        className="form-control form-control-sm" 
                        
                       
                        />
                     
                         <small  className="form-text text-danger">
                            <>{errors.energyKcal?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Protein (g)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('macroNutrients.protein')}
                       
                        className="form-control form-control-sm" 

                        
                        />
                     
                         <small className="form-text text-danger">
                            <>{errors.protein?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Carbs (g)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('macroNutrients.carbs')}
                       
                        className="form-control form-control-sm" 

                       
                        />
                     
                         <small className="form-text text-danger">
                            <>{errors.carbs?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Sugars (g)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('macroNutrients.sugars')}
                       
                        className="form-control form-control-sm" 

                        
                        />
                     
                         <small className="form-text text-danger">
                            <>{errors.sugars?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Dietary Fiber (g)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('macroNutrients.dietaryFibre')}
                       
                        className="form-control form-control-sm" 

                        
                        />
                     
                         <small className="form-text text-danger">
                            <>{errors.dietaryFiber?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Fat (g)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('macroNutrients.fat')}
                       
                        className="form-control form-control-sm" 

                        />
                     
                         <small className="form-text text-danger">
                            <>{errors.fat?.message}</>
                        </small>
                        </td>
                   </tr>

                   <tr>
                       <td>Saturated fat (g)</td>
                       {/* <td>{item.microNutrients.vitaminC} mg</td> */}
                       <td>
                      
                        <input 
                        {...register('macroNutrients.saturated')}
                       
                        className="form-control form-control-sm" 

                      
                        />
                     
                         <small className="form-text text-danger">
                            <>{errors.saturated?.message}</>
                        </small>
                        </td>
                   </tr>
                   </tbody>
                 </Table>
        </>
    )
}