import api from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk(
  "get cart",
  async (arg, { dispatch }) => {
    try {
      const response = await api.get("/cart");
      return response.data;
    } catch (error) {
      console.error("Error setting user:", error);
      throw error;
    }
  }
);

export const addToCart = createAsyncThunk(
  "addToCart",
  async (product, { dispatch }) => {
    try {
      const response = await api.post("/cart/add", product);
      return response.data;
    } catch (error) {
      console.error("Error setting user:", error);
      throw error;
    }
  }
);

export const updateCart = createAsyncThunk(
  "updateCart",
  async (product, { dispatch }) => {
    try {
      const response = await api.put("/cart/update", product);
      return {
        product,
        responseData: response.data,
      };
    } catch (error) {
      console.error("Error setting user:", error);
      throw error;
    }
  }
);

export const removeItem = createAsyncThunk(
  "removeItem",
  async (id, { dispatch }) => {
    try {
      const response = await api.post("/cart/remove", { productId: id });
      return {
        id,
        responseData: response.data,
      };
    } catch (error) {
      console.error("Error setting user:", error);
      throw error;
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartitems: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartitems = action.payload;
        state.error = null;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      })

      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartitems = action.payload ;
        state.error = null;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;  
      })

      .addCase(updateCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.loading = false;
        const { product } = action.payload;
        const item = state.cartitems.items.find(
          (item) => item.product._id === product.productId
        );
        if (item) {
          item.quantity = product.quantity;
        }
        state.error = null;
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;  // Improved error handling
      })

      .addCase(removeItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeItem.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        state.cartitems.items = state.cartitems.items.filter(
          (item) => item.product._id !== id
        );
      })
      .addCase(removeItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;  // Improved error handling
      });
  },
});

export default cartSlice.reducer;
