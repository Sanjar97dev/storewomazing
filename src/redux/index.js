import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import shopSlice from "./slice/shopSlice";


const store = configureStore({
    reducer: {
        shop: shopSlice,
        carts: cartSlice    
    }
})

export default store;