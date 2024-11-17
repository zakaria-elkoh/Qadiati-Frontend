import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/api/api";

interface CommentAuthor {
  name: string;
  profileImage: string;
}

interface Comment {
  _id: string;
  content: string;
  postId: string;
  authorId: string;
  author: CommentAuthor;
  createdAt: Date;
  updatedAt: Date;
}

interface CommentState {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}

const initialCommentState: CommentState = {
  comments: [],
  loading: false,
  error: null,
};

// Comment Thunks
export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (postId: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`/posts/${postId}/comments`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface CreateCommentData {
  postId: string;
  content: string;
}

export const createComment = createAsyncThunk(
  "comments/createComment",
  async (commentData: CreateCommentData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/posts/${commentData.postId}/comments`, {
        content: commentData.content,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface UpdateCommentData {
  id: string;
  content: string;
}

export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async (commentData: UpdateCommentData, { rejectWithValue }) => {
    try {
      const response = await api.put(`/posts/comments/${commentData.id}`, {
        content: commentData.content,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (id: string, { rejectWithValue }) => {
    try {
      await api.delete(`/posts/comments/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Comment Slice
const commentSlice = createSlice({
  name: "comments",
  initialState: initialCommentState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Comments
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchComments.fulfilled,
        (state, action: PayloadAction<{ data: Comment[] }>) => {
          state.loading = false;
          state.comments = action.payload.data;
        }
      )
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Create Comment
      .addCase(
        createComment.fulfilled,
        (state, action: PayloadAction<{ data: Comment }>) => {
          state.comments.unshift(action.payload.data);
        }
      )
      // Update Comment
      .addCase(
        updateComment.fulfilled,
        (state, action: PayloadAction<{ data: Comment }>) => {
          const index = state.comments.findIndex(
            (comment) => comment._id === action.payload.data._id
          );
          if (index !== -1) {
            state.comments[index] = action.payload.data;
          }
        }
      )
      // Delete Comment
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = state.comments.filter(
          (comment) => comment._id !== action.payload
        );
      });
  },
});

export default commentSlice.reducer;
