import React from 'react';
import {useDispatch} from 'react-redux';
import {addProduct, removeOne, removeProduct} from '../../../redux/shoppingCartRedux';
import styles from './ShoppingCartControls.module.scss';

const ShoppingCartControls = ({product}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.ShoppingCartControls}>
      <div
        className={styles.icon}
        onClick={() => {
          dispatch(addProduct({...product, quantity: 1}));
        }}
      >
        <i className="fas fa-plus"></i>
      </div>
      <div
        className={styles.icon}
        onClick={() => {
          dispatch(removeOne({...product}));
        }}
      >
        <i className="fas fa-minus"></i>
      </div>
      <div
        className={styles.icon}
        onClick={() => {
          dispatch(removeProduct({...product}));
        }}
      >
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  );
};

export default ShoppingCartControls;
