import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL1 } from '../../global';

export const getCities = createAsyncThunk('cities/getCities', async (arg, { rejectWithValue }) => {
  try {
    const data = await axios.post(`${BASE_URL1}`, {
      country: arg,
    });
    return data.data.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  data1: [],
  isLoading: false,
  error: undefined,
};
export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    reset: (state) => {
      state.data1 = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.error = undefined;
        state.isLoading = false;
        state.data1 = action.payload.sort((a, b) => parseFloat(b.populationCounts[0].value) - parseFloat(a.populationCounts[0].value));
      })
      .addCase(getCities.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reset } = citiesSlice.actions;

export default citiesSlice.reducer;
