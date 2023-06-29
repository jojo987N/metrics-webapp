import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';
import citiesReducer from './cities/citiesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    cities: citiesReducer,
  },
});
export default store;
