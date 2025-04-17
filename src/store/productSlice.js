import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    status : "idle"
}
const productSlice = createSlice({
    name : "product",
    initialState,
   
    extraReducers : (builder)=> {
        builder.addCase(getProduct.pending, (state,action)=>{
            state.status = 'loading...'
        })
        builder.addCase(getProduct.fulfilled, (state,action)=>{
            state.data = action.payload
            state.status = 'idle'
        })
        builder.addCase(getProduct.rejected, (state,action)=>{
            state.status = 'error'
        })
    }
})

export const {fetchProducts} = productSlice.actions 
export default productSlice.reducer

export const getProduct = createAsyncThunk('product/get', async ()=> {
    const data = await fetch('https://fakestoreapi.com/products')
            const result = await data.json()
            return result;
})

// export function getProduct(){
//     return async function getDataThunks(dispatch,getState) {
//       const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json()
//             dispatch(fetchProducts(result))
//     }
// }