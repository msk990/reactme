import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Ingredient } from "../interfaces/Food";

const initialState: Ingredient[] = []

export const ingredientsSlice = createSlice({
    name: "ingreds",
    initialState,
    reducers: {
        updateIngredients: (state, action:PayloadAction<Ingredient>) => {
            state.push(action.payload)
           
        },
        removeIngredient: (state, action: PayloadAction<Ingredient>) => {
          
           return state = state
           // .filter(obj => {return obj !== action.payload})
            .filter((item) => item.item.id !== action.payload.item.id)
          //const newState = state.filter(obj => {return obj !== action.payload})
          //  return newState
          console.log(action.payload.item.macroNutrients)
        },
        resetIngredients:() => {
            return initialState
        }
    }
})

export const { updateIngredients, removeIngredient, resetIngredients } = ingredientsSlice.actions
export const ingreds = (state:RootState) => state.ingreds
export default ingredientsSlice.reducer