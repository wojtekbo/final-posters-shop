import React from 'react';
import ShoppingCartControls from '../ShoppingCartControls/ShoppingCartControls';
import styles from './ShoppingCartItem.module.scss';

const ShoppingCartItem = ({product, imgPath}) => {
  return (
    <div className={styles.product_cart}>
      <div className={styles.product_img}>
        <img src={`${imgPath}/${product.productId}/${product.imgMini}`} alt={product.title} />
      </div>
      <div className={styles.product_details}>
        <div className={styles.details_wrapper}>
          <h4>{product.title}</h4>
          <p>
            ilość: <b>{product.quantity}</b>
          </p>
          <p>
            rozmiar: <b>{product.dimensions}</b>
          </p>
          <p>
            cena: <b>{product.quantity * product.price}$</b>
          </p>
        </div>
      </div>
      <div className={styles.product_controls}>
        <ShoppingCartControls product={product} />
      </div>
    </div>
  );
};

export default ShoppingCartItem;
