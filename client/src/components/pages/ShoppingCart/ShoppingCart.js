import React from 'react';
import {useSelector} from 'react-redux';
import {getPriceSum, getShoppingCart} from '../../../redux/shoppingCartRedux';
import Container from 'react-bootstrap/esm/Container';
import styles from './ShoppingCart.module.scss';
import ShoppingCartItem from '../../features/ShoppingCartItem/ShoppingCartItem';
import Break from '../../common/Break/Break';

const ShoppingCart = () => {
  const imgPath = '/img/products/';
  const shoppingCartItems = useSelector(state => getShoppingCart(state));
  const priceSum = useSelector(state => getPriceSum(state));
  if (shoppingCartItems.length === 0) {
    return (
      <div className={styles.ShoppingCart_empty}>
        <h4>Koszyk jest pusty</h4>
      </div>
    );
  } else
    return (
      <div className={styles.ShoppingCart}>
        <Container>
          <h3 className="mt-5 mb-5">Koszyk:</h3>
          <div className={styles.wrapper}>
            {shoppingCartItems.map(product => {
              return <ShoppingCartItem key={product.inCartId} product={product} imgPath={imgPath} />;
            })}
          </div>
          <Break />
          <h3 className={styles.sum}>
            Suma: <b>{priceSum}$</b>
          </h3>
        </Container>
      </div>
    );
};

export default ShoppingCart;
