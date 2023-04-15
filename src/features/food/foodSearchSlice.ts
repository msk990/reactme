import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { Tag } from "../../interfaces/Tag"

interface SearchPage {
    term: string,
    page: number,
    tag: Tag,
}
const initialState: SearchPage = {
    term: "",
    page: 0,
    tag: {
        id: "",
        tag:"",
        tagSl:"",
        color:""
    }
}

export const ingredientSearchSlice = createSlice({
    name: "foodSearch",
    initialState,
    reducers: {
        updateFoodSearch: (state, action: PayloadAction<SearchPage>) => {
            state.term = action.payload.term
            state.page = action.payload.page
            state.tag = action.payload.tag
        },
        resetFoodSearch:() => {
            return initialState
        }
    }
})


export const { updateFoodSearch, resetFoodSearch } = ingredientSearchSlice.actions
export const foodSearch = (state: RootState) => state.foodSearch
export default ingredientSearchSlice.reducer