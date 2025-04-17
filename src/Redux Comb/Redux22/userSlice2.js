import { createSlice } from "@reduxjs/toolkit";

const userSlice2 = createSlice({
    name : 'abc',
    initialState : [],
    reducers : {
        sendit : (state,action) => {
            state.push(action.payload)
        }
    }
})

export const {sendit} = userSlice2.actions;
export default userSlice2.reducer