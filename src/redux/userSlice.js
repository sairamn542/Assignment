import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'userDetails',
    initialState : [],
    reducers : {
        pushit : (state,action)=>{
            state.push(action.payload)
        },
        popit : (state,action) => {
            return state.filter(aaa=>aaa.id !== action.payload)
        }
    }
})

export const {pushit,popit} = userSlice.actions
export default userSlice.reducer