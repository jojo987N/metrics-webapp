import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import BASE_URL from '../global';

export const getCountries = createAsyncThunk('countries/getCountries', async (arg, { rejectWithValue }) => {
  try {
    const data = await axios.get(`${BASE_URL}`);
    return data.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  data: [
    {
      cca2: 'RS',
      name: {
        common: 'Serbia',
        official: 'Republic of Serbia',
        nativeName: {
          srp: {
            official: 'Република Србија',
            common: 'Србија',
          },
        },
      },
      population: 6908224,
    },
    {
      cca2: 'AD',
      name: {
        common: 'Andorra',
        official: 'Principality of Andorra',
        nativeName: {
          cat: {
            official: "Principat d'Andorra",
            common: 'Andorra',
          },
        },
      },
      population: 77265,
    },
    {
      cca2: 'UA',
      name: {
        common: 'Ukraine',
        official: 'Ukraine',
        nativeName: {
          ukr: {
            official: 'Україна',
            common: 'Україна',
          },
        },
      },
      population: 44134693,
    },
    {
      cca2: 'NO',
      name: {
        common: 'Norway',
        official: 'Kingdom of Norway',
        nativeName: {
          nno: {
            official: 'Kongeriket Noreg',
            common: 'Noreg',
          },
          nob: {
            official: 'Kongeriket Norge',
            common: 'Norge',
          },
          smi: {
            official: 'Norgga gonagasriika',
            common: 'Norgga',
          },
        },
      },
      population: 5379475,
    },
    {
      cca2: 'JE',
      name: {
        common: 'Jersey',
        official: 'Bailiwick of Jersey',
        nativeName: {
          eng: {
            official: 'Bailiwick of Jersey',
            common: 'Jersey',
          },
          fra: {
            official: 'Bailliage de Jersey',
            common: 'Jersey',
          },
          nrf: {
            official: 'Bailliage dé Jèrri',
            common: 'Jèrri',
          },
        },
      },
      population: 100800,
    },
  ],
  isLoading: false,
  error: undefined,
};
export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
  },
  extraReducers() {
  },
});

export default countriesSlice.reducer;
