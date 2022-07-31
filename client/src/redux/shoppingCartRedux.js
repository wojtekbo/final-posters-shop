import axios from 'axios';
import uniqid from 'uniqid';

//selectors
export const getShoppingCart = ({shoppingCart}) => {
  return shoppingCart;
};

/* thunk creators */
// export const fetchProductById = id => {
//   return (dispatch, getState) => {
//     dispatch(fetchStarted());
//     axios
//       .get(`http://localhost:8000/api/products/${id}`)
//       .then(res => {
//         dispatch(fetchProductByIdSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(fetchError(err.message || true));
//       });
//   };
// };

// actions
const createActionName = actionName => `app/selectedProduct/${actionName}`;
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const EDIT_PRODUCT = createActionName('EDIT_PRODUCT');
// const FETCH_START = createActionName('FETCH_START');
// const FETCH_PRODUCT_BY_ID_SUCCESS = createActionName('FETCH_PRODUCT_BY_ID_SUCCESS');
// const FETCH_ERROR = createActionName('FETCH_ERROR');

// action creators
export const addProduct = payload => ({type: ADD_PRODUCT, payload});
export const editProduct = payload => ({type: EDIT_PRODUCT, payload});
// export const fetchStarted = payload => ({payload, type: FETCH_START});
// export const fetchProductByIdSuccess = payload => ({payload, type: FETCH_PRODUCT_BY_ID_SUCCESS});
// export const fetchError = payload => ({payload, type: FETCH_ERROR});

const shoppingCartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...statePart, {...action.payload, id: uniqid()}];
    case EDIT_PRODUCT:
      return statePart.map(product => (product.id === action.payload.id ? {...product, ...action.payload} : product));
    // case FETCH_START: {
    //   return {...statePart, loading: {active: true, error: false}};
    // }
    // case FETCH_PRODUCT_BY_ID_SUCCESS: {
    //   return {...statePart, loading: {active: false, error: false, loadingDate: new Date().toUTCString()}, data: action.payload};
    // }
    // case FETCH_ERROR: {
    //   return {...statePart, loading: {active: false, error: action.payload}};
    // }
    default:
      return statePart;
  }
};

export default shoppingCartReducer;
