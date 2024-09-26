import api from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrders = createAsyncThunk(
  "get order",
  async (token, { dispatch }) => {
    try {
      const response = await api.get("/orders/history", {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.setItem("token", token);
      return response.data;
    } catch (error) {
      console.error("Error setting user:", error);
      throw error;
    }
  }
);



const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder

      .addCase(getOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.error = null;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
