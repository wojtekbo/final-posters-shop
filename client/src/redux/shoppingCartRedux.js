import axios from 'axios';
import uniqid from 'uniqid';

//selectors
export const getShoppingCart = ({shoppingCart}) => {
  return shoppingCart;
};
export const getPriceSum = ({shoppingCart}) => {
  let priceSum = 0;
  shoppingCart.forEach(element => {
    priceSum = priceSum + element.quantity * element.price;
  });
  return priceSum;
};

/* thunk creators */
// export const fetchProductById = inCartId => {
//   return (dispatch, getState) => {
//     dispatch(fetchStarted());
//     axios
//       .get(`http://localhost:8000/api/products/${inCartId}`)
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
const REMOVE_ONE = createActionName('REMOVE_ONE');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');

// action creators
export const addProduct = payload => ({type: ADD_PRODUCT, payload});
export const removeOne = payload => ({type: REMOVE_ONE, payload});
export const removeProduct = payload => ({type: REMOVE_PRODUCT, payload});

const shoppingCartReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let product = statePart.find(el => el._id === action.payload._id && el.choosenSize === action.payload.choosenSize);
      if (product) {
        return statePart.map(product =>
          product._id === action.payload._id && product.choosenSize === action.payload.choosenSize ? {...product, quantity: product.quantity + action.payload.quantity} : {...product}
        );
      } else return [...statePart, {...action.payload, inCartId: uniqid()}];
    case REMOVE_ONE:
      if (action.payload.quantity > 1) {
        return statePart.map(product => (product.inCartId === action.payload.inCartId ? {...product, quantity: product.quantity - 1} : {...product}));
      } else return statePart;
    case REMOVE_PRODUCT:
      return statePart.filter(product => product.inCartId !== action.payload.inCartId);
    default:
      return statePart;
  }
};

export default shoppingCartReducer;
