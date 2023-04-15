import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const initialState = ''

export const searchSlice = createSlice ({
    name: 'searchTerm',
    initialState,
    reducers: {
        updateSearchTerm: (state, action:PayloadAction<string>) => {
            state = action.payload
            return action.payload
        }
    }

})

export const { updateSearchTerm } = searchSlice.actions
export const searchTerm = (state: RootState) => state.searchTerm
export default searchSlice.reducer