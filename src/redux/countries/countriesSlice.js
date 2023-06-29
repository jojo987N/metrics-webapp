import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BASE_URL from '../../global';

export const getCountries = createAsyncThunk('countries/getCountries', async (arg, { rejectWithValue }) => {
  try {
    const data = await axios.get(`${BASE_URL}`);
    // console.log(data.data.filter((_, i) => i < 5).map((x) => ({
    //   name: x.name,
    //   population: x.population,
    // })));
    return data.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  data: [],
  isLoading: false,
  error: undefined,
};
export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(getCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.sort((a, b) => b.population - a.population);
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default countriesSlice.reducer;
