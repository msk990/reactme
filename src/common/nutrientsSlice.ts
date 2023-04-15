import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { AllNutrients } from "../interfaces/Nutrients";

const initialState: AllNutrients = {
    weight:0,

    macroNutrients: {
        energyKj: 0,
        energyKcal: 0,
        protein: 0,
        carbs: 0,
        sugars: 0,
        dietaryFibre: 0,
        fat: 0,
        saturated: 0,
    },
    microNutrients: {
        ca: 0,
        fe: 0,
        mg: 0,
        k: 0,
        na: 0,
        zn: 0,
        carotenoide: 0,
        retinol: 0,
        thiamin: 0,
        riboflavin: 0,
        niacin: 0,
        b6: 0,
        b12: 0,
        folate: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0, 
    }
}

export const nutrientsSlice = createSlice({
    name: "nutrients",
    initialState,
    reducers: {
        updateNutrients: (state, action:PayloadAction<AllNutrients>) => {
            state.weight = action.payload.weight
            state.macroNutrients = action.payload.macroNutrients
            state.microNutrients = action.payload.microNutrients
        },
        resetNutrients:() => {
            return initialState
        }
    }
})
export const { updateNutrients, resetNutrients } = nutrientsSlice.actions
export const nutrients = (state: RootState) => state.nutrients
export default nutrientsSlice.reducer