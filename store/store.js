import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";
import categoriesSlice from "./categoriesSlice";
import productSlice from "./productSlice";
import wishlistSlice from "./wishlistSlice";
import reviewsSlice from "./reviewsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categoriess: categoriesSlice,
    productss: productSlice,
    cartss: cartSlice,
    reviewss: reviewsSlice,
    orderr: orderSlice,
    wishlist: wishlistSlice,
  },
});
