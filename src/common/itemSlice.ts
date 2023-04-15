import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Item } from "../interfaces/NewIngredientDto";

const initialState: Item = {
    id:'',
    itemName: '',
    itemNameSl: '',
    processing:'',

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
    },
    tag:[]
}

export const itemSlice = createSlice({ 
    name:'itm',
    initialState,
    reducers: {
        updateItem: (state, action:PayloadAction<Item>) => {
            state.id = action.payload.id
            state.itemName = action.payload.itemName
            state.itemNameSl = action.payload.itemNameSl
            state.processing = action.payload.processing
            state.macroNutrients = action.payload.macroNutrients
            state.microNutrients = action.payload.microNutrients

        },
        resetItem:() => {
            return initialState
        }
    }
    
})

export const { updateItem, resetItem } = itemSlice.actions
export const itm = (state:RootState) => state.itm
export default itemSlice.reducer