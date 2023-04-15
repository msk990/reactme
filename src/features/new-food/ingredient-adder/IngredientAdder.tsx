import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { updateIngredients } from "../../../common/ingredientsSlice";
import { itm } from "../../../common/itemSlice"
import { Ingredient } from "../../../interfaces/Food";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const IngredientAdder = (props:any) => {

    const addIt = props.addIt
    const setAddIt = props.setAddIt

    const setShow = props.setShow
const item = useAppSelector(itm)

const dispatch = useAppDispatch()

let juje: Ingredient

const schema = yup.object().shape({
  quantity: yup.number().positive("must be greater than 0").required("Please provide quantity").typeError("Must be a positive number"),

});

const quantSubmit = (data:any) => {
    juje = {
        quantity: data.quantity,
        item: item
    }
    dispatch(updateIngredients(juje))
    console.log(juje)
    setAddIt(false)
    setShow(false)
}

const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
    return(
        <>
         <h5 className="mb-4">{item.itemName}</h5>
        <h6> How many kg for 100 portions?</h6>
      <div className="w-25">
        <form  onSubmit={handleSubmit2(quantSubmit)}>

        <div className="form-group mt-2 mb-3">
        <div className="input-group">
          <input 
          {...register2('quantity')}
          type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">kg</span>
            
        </div>
        
      </div>
      
      <small id="emailHelp" className="form-text text-danger"><>{errors2.quantity?.message}</></small>
      </div>
<button type="submit" className="btn btn-primary mt-2">Submit</button>
</form>
</div>
        </>
    )
}