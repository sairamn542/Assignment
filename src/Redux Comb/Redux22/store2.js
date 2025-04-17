import { configureStore } from "@reduxjs/toolkit";
import userSlice2 from './userSlice2'

const strre22 = configureStore({
    reducer : {
        userData : userSlice2
    }
})

export default strre22;