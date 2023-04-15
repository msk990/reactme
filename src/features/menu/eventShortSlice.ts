import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { Meal } from "../../interfaces/Meal"


interface EventShort {
    id: string,
    title: string,
    start: Date,

}
const initialState : EventShort = {
    id: "",
    title:"",
    start: new Date()

}

new Date()

export const eventShortSlice = createSlice({
    name:"eventShort",
    initialState, 
    reducers: {
        updateEventShort: (state, action:PayloadAction<EventShort>) => {
            
            state.id = action.payload.id
            state.title = action.payload.title
            state.start = action.payload.start

        },
        resetEventShort: () => {
            return initialState
        }
    }
})

export const { updateEventShort, resetEventShort } = eventShortSlice.actions
export const eventShort = (state:RootState) => state.eventShort 
export default eventShortSlice.reducer