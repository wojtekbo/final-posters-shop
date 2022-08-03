import React from 'react';
import Container from 'react-bootstrap/Container';
import {useSelector} from 'react-redux';
import {getPriceSum, getShoppingCart} from '../../../redux/shoppingCartRedux';
import Break from '../../common/Break/Break';
import OrderForm from '../../features/OrderForm/OrderForm';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import styles from './Order.module.scss';

const Form = () => {
  const shoppingCartItems = useSelector(state => getShoppingCart(state));
  const orderSum = useSelector(state => getPriceSum(state));

  if (shoppingCartItems.length <= 0) {
    return (
      <div className={styles.Form_empty}>
        <h4>
          Oby móc złoyć zamówienie,
          <br />
          najpierw dodaj produkty do koszyka
        </h4>
      </div>
    );
  } else
    return (
      <div className={styles.Form}>
        <Container>
          <OrderSummary shoppingCartItems={shoppingCartItems} orderSum={orderSum} />
          <Break />
          <OrderForm shoppingCartItems={shoppingCartItems} orderSum={orderSum} />
        </Container>
      </div>
    );
};

export default Form;
