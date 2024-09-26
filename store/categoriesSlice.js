import api from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "get Categories",
  async (arg, { dispatch }) => {
    try {
      const response = await api.get(`/products/collections`);
      return response.data;
    } catch (error) {
      console.error("Error in get categories:", error);
      throw error;
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    Collections: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.Collections = action.payload;
        state.error = null;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
