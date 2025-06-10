import { asyncThunkCreator, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  mode: 'dark' | 'light';
  error: string | null;
  loading: boolean;
}

const initialState: ThemeState = {
  mode: 'light',
  error: null,
  loading: false
}

export const fetchUserThemePreference = createAsyncThunk(
  'theme/fetchUserThemePreference',
  async (_, { rejectWithValue }) => {
    // Simulating a network request
    try {
      const response = await new Promise<{ mode: 'dark' | 'light' }>((resolve, reject) => {
        setTimeout(() => {
          const success = true;
          if (success) {
            resolve({ mode: 'dark' })
          } else {
            reject("Failed to theme preference!")
          }
        }, 1000)
      })
      return response.mode
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error occurred');
    }
  }
)

const themSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.mode = action.payload
    },
    toggleTheme: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.mode = state.mode === 'light' ? 'light' : "dark"
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUserThemePreference.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchUserThemePreference.fulfilled, (state, action) => {
      state.mode = action.payload;
      state.loading = false;
    })
    builder.addCase(fetchUserThemePreference.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
})

export const { setTheme, toggleTheme } = themSlice.actions;
export default themSlice.reducer;