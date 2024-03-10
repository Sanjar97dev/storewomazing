import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
  'productId/getProduct',
  async (id) => {
    const { data } = await axios.get('https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name/' + id);
    console.log(data);
    return data;
  }
);

const cartSlice = createSlice({
  name: 'productId',
  initialState: {
    product: [], 
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.product = payload;  
      })
      .addCase(getProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  }
});

export default cartSlice.reducer;
