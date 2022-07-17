import {configureStore} from '@reduxjs/toolkit';
import initialState from './initialState';
import productsRedux from './productsRedux.js';

const store = configureStore({
  reducer: {
    products: productsRedux,
  },
  preloadedState: initialState,
});

export default store;
