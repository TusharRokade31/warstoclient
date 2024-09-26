import api from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getReviews = createAsyncThunk(
  "get Reviews",
  async (ID, { dispatch }) => {
    try {
      const response = await api.get(`/reviews/product/${ID}`);
      return response.data;
    } catch (error) {
      console.error("Error setting user:", error);
      throw error;
    }
  }
);



const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    Reviews: {},
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder

      .addCase(getReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.Reviews = action.payload;
        state.error = null;
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default reviewsSlice.reducer;
