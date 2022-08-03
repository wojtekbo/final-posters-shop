import React, {useCallback, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useNavigate} from 'react-router-dom';
import styles from './OrderForm.module.scss';

import axios from 'axios';
import {API_URL} from '../../../config';
// import {API_URL} from '../config';

const OrderForm = ({shoppingCartItems, orderSum}) => {
  const products = shoppingCartItems.map(product => {
    return {product: product.title, quantity: product.quantity, dimensions: product.dimensions, price: product.price, totalPrice: product.price * product.quantity, productId: product._id};
  });

  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [apartmentNo, setApartmentNo] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const sendOrderRedirect = useCallback(() => navigate('/'), [navigate]);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      let payload = {
        name,
        surname,
        phone,
        email,
        street,
        houseNo,
        apartmentNo,
        city,
        zipCode,
        orderTotalPrice: orderSum,
        products: products,
      };

      const sendOrder = async () => {
        try {
          let res = await axios.post(`${API_URL}/orders`, payload);
        } catch (e) {
          console.log('Błąd zapisu do bazy');
        }
      };

      sendOrder();

      sendOrderRedirect();
    } else if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className={styles.OrderForm}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} xs="6" md="6" controlId="validationCustom01">
            <Form.Label>Imię</Form.Label>
            <Form.Control required type="text" value={name} onChange={e => setName(e.target.value)} />
            <Form.Control.Feedback type="invalid">Pole wymagane.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} xs="6" md="6" controlId="validationCustom02">
            <Form.Label>Nazwisko</Form.Label>
            <Form.Control required type="text" value={surname} onChange={e => setSurname(e.target.value)} />
            <Form.Control.Feedback type="invalid">Pole wymagane.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xs="6" md="6" controlId="validationCustom03">
            <Form.Label>Numer telefonu</Form.Label>
            <Form.Control required type="phone" value={phone} onChange={e => setPhone(e.target.value)} />
            <Form.Control.Feedback type="invalid">Pole wymagane.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6" md="6" controlId="validationCustom04">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Form.Control.Feedback type="invalid">Pole wymagane.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" xs="12" md="6" controlId="validationCustom05">
            <Form.Label>Ulica</Form.Label>
            <Form.Control type="text" required value={street} onChange={e => setStreet(e.target.value)} />
            <Form.Control.Feedback type="invalid">Pole wymagane.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6" md="3" controlId="validationCustom06">
            <Form.Label>Numer domu</Form.Label>
            <Form.Control type="text" required value={houseNo} onChange={e => setHouseNo(e.target.value)} />
            <Form.Control.Feedback type="invalid">Pole wymagane.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6" md="3" controlId="validationCustom07">
            <Form.Label>Numer mieszkania</Form.Label>
            <Form.Control type="text" value={apartmentNo} onChange={e => setApartmentNo(e.target.value)} />
            <Form.Control.Feedback type="invalid">Pole wymagane.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xs="6" md="6" controlId="validationCustom08">
            <Form.Label>Miasto</Form.Label>
            <Form.Control type="text" required value={city} onChange={e => setCity(e.target.value)} />
            <Form.Control.Feedback type="invalid">Pole wymagane.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs="6" md="3" controlId="validationCustom09">
            <Form.Label>Kod pocztowy</Form.Label>
            <Form.Control type="text" required value={zipCode} onChange={e => setZipCode(e.target.value)} />
            <Form.Control.Feedback type="invalid">Pole wymagane.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button className="mt-4" type="submit">
          Wyślij zamówienie
        </Button>
      </Form>
    </div>
  );
};

export default OrderForm;
