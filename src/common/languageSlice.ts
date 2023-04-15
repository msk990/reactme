import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

const initialState:string = 'en'

export const languageSlice = createSlice({
    name: 'lang',
    initialState,
    reducers:{
        changeThemeLanguage: (state, action:PayloadAction<string>) => {
            state = action.payload
            return action.payload
        }
    }
    
})

export const { changeThemeLanguage } = languageSlice.actions
export const lang = (state: RootState) => state.lang
export default languageSlice.reducer