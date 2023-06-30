import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSliceMock';
import citiesReducer from './citiesSliceMock';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    cities: citiesReducer,
  },
});
export default store;
