import { useState } from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { AlternativeForm } from "./alternative-form/AlternativeForm";
import { FoodIngredientsList } from "./food-ingredients-list/FoodIngredientsList";
import { FoodNutrients } from "./food-nutrients/FoodNutrients";
import { Food, FoodDTO, Ingredient, IngredientDTO } from "../../interfaces/Food";
import { useAppSelector } from "../../app/hooks";
import { ingreds } from "../../common/ingredientsSlice";
import { useAddFoodMutation } from "../../api/foodEndpoints";
import { foodMicrosPerPortion } from "../../common/calculation-helpers/GetMicroArray";
import { foodMacrosPerPortion } from "../../common/calculation-helpers/GetMacroArray";

export const NewFood = () => {

    const [addFood, {error, isLoading}] = useAddFoodMutation()

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ingz:Ingredient[] = useAppSelector(ingreds)


    let ingiz: IngredientDTO[] = []

    for (let i = 0; i < ingz.length; i++) {
        const ingi = {
            quantity: ingz[i].quantity,
            itemId: ingz[i].item.id
        }
        ingiz.push(ingi);
    }

    const methods= useForm({
        //defaultValues: dets,
        // resetOptions: {
        //   keepDirtyValues: true
        // }
       // resolver: yupResolver(schema)
    
    }) 

    const microNutrients = foodMicrosPerPortion(ingz) 
    const macroNutrients = foodMacrosPerPortion(ingz)

    const onSubmit = async (data: any) => {  
    
        const food: FoodDTO = {
            foodName: data.foodName,
            foodNameSl: data.foodNameSl,
            processing: data.processing,
            portion: data.portionSize,
            gen: true,
            ingredients: ingiz,
            macroNutrients: macroNutrients,
            microNutrients: microNutrients

            
        }
       console.log("food is")
            console.log(food)   
        if (!ingz.length)
        {
            alert("Please select ingredients")
        }
        else {
            console.log("food is")
            console.log(food) 
            addFood(food)
            .unwrap()
            .then((payload) => console.log('fulfilled', payload))
            .catch((error) => console.error('rejected', error))  
               
         
        }
       // console.log("should submit")
       console.log(data)
 
        //  updateItem(data)
        //  .unwrap()
        //  .then((payload) => console.log('fulfilled', payload))
        //  .catch((error) => console.error('rejected', error))  
     }

    return(
       <>  
     <section className="pb-4 px-3">
        <h4 className="mt-3">New Food</h4>
       <FormProvider {...methods}>
       
       <Row>
            <Col xs={{span: 12}}  lg={{span: 4}} >
            <form  onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="form-group mt-2 mb-1">
                    <label >Product name English</label>
                    <input {...methods.register('foodName')} type="text" className="form-control" id="name" />
                    <small id="emailHelp" className="form-text text-danger"><>{methods.formState.errors.foodName?.message}</></small>
                </div>
                <div className="form-group mt-2 mb-1">
                    <label >Product name Slovenian</label>
                    <input {...methods.register('foodNameSl')} type="text" className="form-control" id="name"  />
                    <small id="emailHelp" className="form-text text-danger"><>{methods.formState.errors.foodNameSl?.message}</></small>
                </div>

                <div className="form-group mt-2 mb-1">
                    <label >Processing</label>
                    <select defaultValue="default"
                     {...methods.register('processing')} className="form-select" aria-label="Default select example">
                        <option value="default" disabled>select processing</option>
                        <option value="raw">raw</option>
                        <option value="light">lightly processed</option>
                        <option value="processed">processed</option>
                        <option value="home">home cooked</option>
                        </select>
                    <small id="emailHelp" className="form-text text-danger"><>{methods.formState.errors.processing?.message}</></small>
                </div>

                <div className="form-group mt-2 mb-1">
                    <label >Portion size(g)</label>
                    <input {...methods.register('portionSize')} type="text" className="form-control" id="name"  />
                    <small id="emailHelp" className="form-text text-danger"><>{methods.formState.errors.portionSize?.message}</></small>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </Col>
                <Col xs={{span: 12}}  lg={{span: 4}} >
                    <FoodIngredientsList  />
                </Col>
                <Col xs={{span: 12}}  lg={{span: 4}} >
                        <FoodNutrients />
                </Col>
                </Row>
       
       {/* <Offcanvas show={show} onHide={handleClose} placement="end">
       <Offcanvas.Header closeButton>
        
        </Offcanvas.Header>
        <Offcanvas.Body>
        <AlternativeForm />
        </Offcanvas.Body>
      </Offcanvas> */}
       
        
       
        </FormProvider>
       
        </section>
       </>
    )
}