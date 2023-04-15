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
    name: "ingredientSearch",
    initialState,
    reducers: {
        updateIngredientSearch: (state, action: PayloadAction<SearchPage>) => {
            state.term = action.payload.term
            state.page = action.payload.page
            state.tag = action.payload.tag
        },
        resetAll:() => {
            return initialState
        }
    }
})


export const { updateIngredientSearch, resetAll } = ingredientSearchSlice.actions
export const ingredientSearch = (state: RootState) => state.ingredientSearch
export default ingredientSearchSlice.reducer