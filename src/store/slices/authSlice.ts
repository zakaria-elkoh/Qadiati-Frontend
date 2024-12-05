// src/store/slices/authSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { signOut } from "aws-amplify/auth";

// Define Types
interface AuthUser {
  email: string;
  email_verified: boolean;
  family_name?: string;
  given_name?: string;
  sub?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  authUser: AuthUser | null;
  accessToken: string | null;
  isLoading: boolean;
  error: string | null;
}

// Initial State
const initialState: AuthState = {
  isAuthenticated: false,
  authUser: null,
  accessToken: null,
  isLoading: true,
  error: null,
};

// Create Async Thunk for Logout
export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut();
      return true;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<AuthUser>) => {
      state.authUser = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.authUser = null;
      state.accessToken = null;
      state.isLoading = false;
      state.error = null;
      // Clear localStorage
      localStorage.removeItem("reduxState");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.authUser = null;
        state.accessToken = null;
        state.isLoading = false;
        state.error = null;
        // Clear localStorage
        localStorage.removeItem("reduxState");
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions
export const { setAuthUser, setAccessToken, setLoading, logout, clearError } =
  authSlice.actions;

// Export selectors
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const selectIsAuthenticated = (state: { auth: AuthState }) =>
  state.auth.isAuthenticated;
export const selectAuthUser = (state: { auth: AuthState }) =>
  state.auth.authUser;
export const selectIsLoading = (state: { auth: AuthState }) =>
  state.auth.isLoading;
export const selectError = (state: { auth: AuthState }) => state.auth.error;

export default authSlice.reducer;
