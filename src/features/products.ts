import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    title: string;
    images: string[];
    price: number;
    description?:string;
    category?:string;
}
const initialState: { products: Product[], loading: Boolean } = {
    products: [],
    loading: true
}

export const loadProduts = createAsyncThunk(
    'products/load', async (_, thunkAPI) => {
        try {
            let response = await fetch('https://dummyjson.com/products')
            let data = await response.json()
            return data.products
        } catch {
            return thunkAPI.rejectWithValue('loading products failed')

        }
    }
)







export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    }, extraReducers: (builder) => {
        builder
            .addCase(loadProduts.pending, (state__,) => { state__.loading = true })
            .addCase(loadProduts.rejected, (state__) => { state__.loading = true })
            .addCase(loadProduts.fulfilled, (state__, action) => {
                state__.loading = false
                state__.products = action.payload
            })
    }
})
export const { } = productSlice.actions
export default productSlice.reducer