import api from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password, token }, { rejectWithValue }) => {
    try {
      let response;
      if (token) {
        // Google sign-in
        localStorage.setItem("token", token);
        console.log("Token stored:", response.data.token);
        response = await axios.get("/api/auth/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // Regular sign-in
        response = await axios.post("/api/auth/signin", { email, password });
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const setUser = createAsyncThunk(
  "auth/setUser",
  async (arg, { dispatch }) => {
    try {
      const response = await api.get("/auth/user");
      return response.data;
    } catch (error) {
      console.error("Error setting user:", error);
      throw error;
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/update User",
  async (formData, { dispatch }) => {
    try {
      const response = await api.put("/auth/profile", formData);
      return response.data;
    } catch (error) {
      console.error("Error setting user:", error);
      throw error;
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ name, email, password, mobileNumber }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
        mobileNumber,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/auth/user");
      return response.data;
    } catch (error) {
      localStorage.removeItem("token");
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const checkTokenValidity = createAsyncThunk(
  "auth/checkTokenValidity",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await axios.get("/api/auth/validate-token", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      localStorage.removeItem("token");
      dispatch(logout());
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);


export const Addaddress = createAsyncThunk(
  "auth/address",
  async (address, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/address",address);
      return response.data;
    } catch (error) {
      localStorage.removeItem("token");
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload && action.payload.message
            ? action.payload.message
            : "An error occurred during sign up";
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload && action.payload.message
            ? action.payload.message
            : "An error occurred during sign in";
      })
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      })
      .addCase(setUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(setUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = localStorage.getItem("token");
      })
      .addCase(setUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(Addaddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(Addaddress.fulfilled, (state, action) => {
        state.user.address = action.payload;
      })
      .addCase(Addaddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
