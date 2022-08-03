import axios from 'axios';
import {API_URL} from '../config';

//selectors
export const getSelectedProduct = ({selectedProduct}) => {
  return selectedProduct;
};

/* thunk creators */
export const fetchProductById = id => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    axios
      .get(`${API_URL}/products/${id}`)
      .then(res => {
        dispatch(fetchProductByIdSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

// actions
const createActionName = actionName => `app/selectedProduct/${actionName}`;
const FETCH_START = createActionName('FETCH_START');
const FETCH_PRODUCT_BY_ID_SUCCESS = createActionName('FETCH_PRODUCT_BY_ID_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

// action creators
export const fetchStarted = payload => ({payload, type: FETCH_START});
export const fetchProductByIdSuccess = payload => ({payload, type: FETCH_PRODUCT_BY_ID_SUCCESS});
export const fetchError = payload => ({payload, type: FETCH_ERROR});

const productReducer = (statePart = [], action) => {
  switch (action.type) {
    case FETCH_START: {
      return {...statePart, loading: {active: true, error: false}};
    }
    case FETCH_PRODUCT_BY_ID_SUCCESS: {
      return {...statePart, loading: {active: false, error: false, loadingDate: new Date().toUTCString()}, data: action.payload};
    }
    case FETCH_ERROR: {
      return {...statePart, loading: {active: false, error: action.payload}};
    }
    default:
      return statePart;
  }
};

export default productReducer;
