import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { mealNutr } from "../../interfaces/MealNutr";

const initialState:mealNutr = {
    weight: 0,
    calories:0,

        nutrients: {
            proteins: {
                weight: 0,
                calories: 0
            },
            carbs: {
                weight: 0,
                calories: 0
            },
            sugars: {
                weight: 0,
                calories: 0
            },
            fat: {
                weight: 0,
                calories: 0
            },
            saturated: {
                weight: 0,
                calories: 0
            }
        }
  
}
export const mealChartSlice = createSlice({
    name: "mealData",
    initialState,
    reducers: {
        updateMealChart: (state, action:PayloadAction<any>) => {
           // state = action.payload
           
             state.calories = action.payload.calories 
            state.weight = action.payload.weight 
            state.nutrients = action.payload.nutrients
            return state
           // console.log(action.)
        }
    }
})

export const { updateMealChart } = mealChartSlice.actions
export const mealData = (state: RootState) => state.mealData
export default mealChartSlice.reducer