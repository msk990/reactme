import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Calories } from "../interfaces/Calories";

const initialState: Calories = {
    total: 0,
    proteins: 0,
    pureCarbs: 0,
    fiber: 0,
    sugars: 0,
    pureFat: 0,
    saturated: 0
}

export const caloriesSlice = createSlice({
    name: "savedCalories",
    initialState,
    reducers: {
        updateCalories: (state, action:PayloadAction<Calories>) => {
            state.total = action.payload.total
            state.proteins = action.payload.proteins
            state.pureCarbs = action.payload.pureCarbs
            state.fiber = action.payload.fiber
            state.sugars = action.payload.sugars
            state.pureFat = action.payload.pureFat
            state.saturated = action.payload.saturated
        },
        resetCalories:() => {
            return initialState
        }
    }
})

export const { updateCalories, resetCalories } = caloriesSlice.actions
export const savedCalories = (state:RootState) => state.savedCalories
export default caloriesSlice.reducer