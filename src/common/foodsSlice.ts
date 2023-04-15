import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Food } from "../interfaces/Food";
import { RootState } from "../app/store";

const initialState : Food[] = []

export const foodsSlice = createSlice({
    name: "foods",
    initialState,
    reducers: {
        addFood: (state, action:PayloadAction<Food>) => {
            state.push(action.payload)
        },
        removeFood: (state, action:PayloadAction<Food>) => {
            return state = state.filter((food) => food.id != action.payload.id)
        },
        resetFoods:() => {
            return initialState
        }

    }
})

export const { addFood, removeFood, resetFoods } = foodsSlice.actions
export const foodLst = (state:RootState) => state.foodLst
export default foodsSlice.reducer