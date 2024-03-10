import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getShop = createAsyncThunk(
    'shop/getShop',
    async () => {
        const { data } = await axios.get('https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name');
        return data;
    }
)

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [],
        loading: false,
        error: "",
    },
    extraReducers: (builder) => {
        builder
            .addCase(getShop.pending, (state) => {
                state.loading = true;
            })
            .addCase(getShop.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.products = payload;
            })
            .addCase(getShop.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
    }
})

export default shopSlice.reducer;