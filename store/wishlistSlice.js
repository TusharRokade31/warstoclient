import api from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getwishlist = createAsyncThunk(
  "get wishlist",
  async (arg, { dispatch }) => {
    try {
      const response = await api.get("/wishlist");
      return response.data;
    } catch (error) {
      console.error("Error setting user:", error);
      throw error;
    }
  }
);

export const Addwishlist = createAsyncThunk(
  "Add wishlist",
  async (id, { dispatch }) => {
    try {
      const response = await api.post("/wishlist/add", { productId: id });
      return response.data;
    } catch (error) {
      console.error("Error setting user:", error);
      throw error;
    }
  }
);

export const removeWishlist = createAsyncThunk(
  "removeWishlist",
  async (id, { dispatch }) => {
    try {
      const response = await api.delete(`/wishlist/remove/${id}`);
      return { id, responseData: response.data };
    } catch (error) {
      console.error("Error setting user:", error);
      throw error;
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    products: {},
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getwishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(getwishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getwishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(Addwishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(Addwishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.products?.products?.push(action.payload.product);
        state.error = null;
      })
      .addCase(Addwishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeWishlist.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        state.products.products = state.products.products.filter(
          (item) => item?.id !== id
        );
        state.error = null;
      })
      .addCase(removeWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
