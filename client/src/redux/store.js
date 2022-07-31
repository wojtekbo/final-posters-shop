import {configureStore} from '@reduxjs/toolkit';
import initialState from './initialState';
import productsRedux from './productsRedux.js';
import mainCarouselRedux from './mainCarouselRedux.js';
import selectedProductRedux from './selectedProductRedux.js';

const store = configureStore({
  reducer: {
    products: productsRedux,
    selectedProduct: selectedProductRedux,
    mainCarouselImgs: mainCarouselRedux,
  },
  preloadedState: initialState,
});

export default store;
