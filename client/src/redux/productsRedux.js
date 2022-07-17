import axios from 'axios';

//selectors
export const getAllProducts = ({products}) => {
  return products;
};

/* thunk creators */
export const fetchGetAllProducts = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    axios
      .get('http://localhost:8000/api/products')
      .then(res => {
        console.log('res', res.data);
        dispatch(fetchProductsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const FETCH_START = createActionName('FETCH_START');
const FETCH_PRODUCTS_SUCCESS = createActionName('FETCH_PRODUCTS_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

// action creators
export const fetchStarted = payload => ({payload, type: FETCH_START});
export const fetchProductsSuccess = payload => ({payload, type: FETCH_PRODUCTS_SUCCESS});
export const fetchError = payload => ({payload, type: FETCH_ERROR});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case FETCH_START: {
      return {...statePart, loading: {active: true, error: false}};
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {...statePart, loading: {active: false, error: false, loadingDate: new Date().toUTCString()}, data: action.payload};
    }
    case FETCH_ERROR: {
      return {...statePart, loading: {active: false, error: action.payload}};
    }
    default:
      return statePart;
  }
};

export default postsReducer;
