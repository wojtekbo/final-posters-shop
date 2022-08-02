import React from 'react';
import styles from './OrderSummary.module.scss';

const OrderSummary = ({shoppingCartItems, orderSum}) => {
  return (
    <div className={styles.OrderSummary}>
      <h4>W koszyku:</h4>
      <div className={styles.products_list_wrapper}>
        <div className={styles.products_list}>
          <ul>
            {shoppingCartItems.map(product => {
              return (
                <li key={product.inCartId} className={styles.product_details}>
                  <span className={styles.product_title}>{product.title}</span>
                  <span className={styles.product_dimensions}>{product.dimensions}</span>
                  <span className={styles.product_times}>x</span>
                  <span className={styles.product_quantity}>{product.quantity}</span>
                  <span className={styles.product_equals}>=</span>
                  <span className={styles.product_price}>{product.quantity * product.price}$</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.sum_wrapper}>
        <span className={styles.order_sum}>Suma: {orderSum} $</span>
      </div>
    </div>
  );
};

export default OrderSummary;
