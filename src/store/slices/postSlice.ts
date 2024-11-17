import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "@/api/api";

// Types
interface Author {
  id: string;
  name: string;
  profilePictureUrl?: string;
  jobTitle?: string;
}

interface Post {
  _id: string;
  author: Author;
  title?: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  hashtags: string[];
  privacyLevel: string;
  allowComments: boolean;
  isPinned: boolean;
  isDeleted: boolean;
  archived: boolean;
  isDraft: boolean;
  createdAt: Date;
  originalPost: string | null;
}

interface PostState {
  posts: Post[];
  currentPost: Post | null;
  loading: boolean;
  error: string | null;
}

// Initial states
const initialPostState: PostState = {
  posts: [],
  currentPost: null,
  loading: false,
  error: null,
};

// Post Thunks
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/posts");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`/posts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface CreatePostData {
  title?: string;
  content: string;
  hashtags?: string[];
  privacyLevel?: string;
  allowComments?: boolean;
  isDraft?: boolean;
}

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData: CreatePostData, { rejectWithValue }) => {
    try {
      const response = await api.post("/posts", postData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id: string, { rejectWithValue }) => {
    try {
      await api.delete(`/posts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createRepost = createAsyncThunk(
  "posts/createRepost",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await api.post(`/posts/${id}/repost`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateRepost = createAsyncThunk(
  "posts/updateRepost",
  async (
    { id, content }: { id: string; content: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.put(`/posts/${id}/repost`, { content });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

interface UpdatePostData {
  id: string;
  title?: string;
  content?: string;
  hashtags?: string[];
  privacyLevel?: string;
  allowComments?: boolean;
  isPinned?: boolean;
  archived?: boolean;
  isDraft?: boolean;
}

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (updateData: UpdatePostData, { rejectWithValue }) => {
    try {
      const { id, ...data } = updateData;
      const response = await api.put(`/posts/${id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Post Slice
const postSlice = createSlice({
  name: "posts",
  initialState: initialPostState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<{ data: Post[] }>) => {
          state.loading = false;
          state.posts = action.payload.data;
        }
      )
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch Single Post
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPostById.fulfilled,
        (state, action: PayloadAction<{ data: Post }>) => {
          state.loading = false;
          state.currentPost = action.payload.data;
        }
      )
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Create Post
      .addCase(
        createPost.fulfilled,
        (state, action: PayloadAction<{ data: Post }>) => {
          state.posts.unshift(action.payload.data);
        }
      )
      // Update Post
      .addCase(
        updatePost.fulfilled,
        (state, action: PayloadAction<{ data: Post }>) => {
          const index = state.posts.findIndex(
            (post) => post._id === action.payload.data._id
          );
          if (index !== -1) {
            state.posts[index] = action.payload.data;
          }
          if (state.currentPost?._id === action.payload.data._id) {
            state.currentPost = action.payload.data;
          }
        }
      )
      // Delete Post
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload);
        if (state.currentPost?._id === action.payload) {
          state.currentPost = null;
        }
      })
      // Create Repost
      .addCase(
        createRepost.fulfilled,
        (state, action: PayloadAction<{ data: Post }>) => {
          state.posts.unshift(action.payload.data);
        }
      )
      // Update Repost
      .addCase(
        updateRepost.fulfilled,
        (state, action: PayloadAction<{ data: Post }>) => {
          const index = state.posts.findIndex(
            (post) => post._id === action.payload.data._id
          );
          if (index !== -1) {
            state.posts[index] = action.payload.data;
          }
        }
      );
  },
});

export default postSlice.reducer;
