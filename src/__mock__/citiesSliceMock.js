import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL1 } from '../global';

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
  data1: [
    {
      city: 'ZAGREB',
      country: 'Croatia',
      populationCounts: [
        {
          year: '2011',
          value: '790017',
          sex: 'Both Sexes',
          reliabilty: 'Final figure, complete',
        },
        {
          year: '2001',
          value: '779145',
          sex: 'Both Sexes',
          reliabilty: 'Final figure, complete',
        },
      ],
    },
    {
      city: 'Split',
      country: 'Croatia',
      populationCounts: [
        {
          year: '2011',
          value: '178102',
          sex: 'Both Sexes',
          reliabilty: 'Final figure, complete',
        },
        {
          year: '2001',
          value: '188694',
          sex: 'Both Sexes',
          reliabilty: 'Final figure, complete',
        },
      ],
    },
    {
      city: 'Rijeka',
      country: 'Croatia',
      populationCounts: [
        {
          year: '2011',
          value: '128624',
          sex: 'Both Sexes',
          reliabilty: 'Final figure, complete',
        },
        {
          year: '2001',
          value: '144043',
          sex: 'Both Sexes',
          reliabilty: 'Final figure, complete',
        },
      ],
    },
    {
      city: 'Osijek',
      country: 'Croatia',
      populationCounts: [
        {
          year: '2011',
          value: '108048',
          sex: 'Both Sexes',
          reliabilty: 'Final figure, complete',
        },
        {
          year: '2001',
          value: '114616',
          sex: 'Both Sexes',
          reliabilty: 'Final figure, complete',
        },
      ],
    },
  ],
  isLoading: false,
  error: undefined,
};
export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
  },
  extraReducers() {
  },
});

export const { reset } = citiesSlice.actions;

export default citiesSlice.reducer;
