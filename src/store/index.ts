import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlice";
import commentReducer from "./slices/commentSlice";

const store = configureStore({
  reducer: {
    // auth: authReducer,
    posts: postReducer,
    comments: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
