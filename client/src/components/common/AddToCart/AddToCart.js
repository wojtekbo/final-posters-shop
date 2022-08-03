import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {addProduct} from '../../../redux/shoppingCartRedux';
import {useDispatch} from 'react-redux';
import styles from './AddToCart.module.scss';

const AddToBasket = ({product}) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit: validate,
    formState: {errors},
  } = useForm();

  const [quantity, setQuantity] = useState(1);
  const [choosenSize, setSize] = useState();
  const [addToCartAnimation, setAddToCartAnimation] = useState('false');

  const getPrice = () => {
    let price;
    product.size.forEach(el => {
      if (el.type === choosenSize) {
        price = el.price;
      }
    });
    return price;
  };

  const getDimensions = () => {
    let dimensions;
    product.size.forEach(el => {
      if (el.type === choosenSize) {
        dimensions = el.dimensions;
      }
    });
    return dimensions;
  };

  const onSubmit = () => {
    if (quantity >= 1) {
      dispatch(addProduct({...product, quantity, choosenSize, price: getPrice(), dimensions: getDimensions()}));
      setAddToCartAnimation(true);
    }
  };

  const handleAddToCartAnimationEvent = () => {
    setAddToCartAnimation(false);
  };

  const quantityChange = e => {
    e.target.value && e.target.value > 0 && setQuantity(parseInt(e.target.value));
  };

  return (
    <div className={styles.AddToCart}>
      <Form onSubmit={validate(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Ilość</Form.Label>
          <Form.Control {...register('quantity', {required: true})} value={quantity} onChange={e => quantityChange(e)} type="number" />
          {errors.quantity && <small className="d-block form-text text-danger mt-1">Pole wymagane</small>}
          <Form.Label className="mt-2">Rozmiar</Form.Label>
          <Form.Select
            {...register('choosenSize', {required: true})}
            onChange={e => {
              setSize(e.target.value);
            }}
            aria-label="Wybierz rozmiar"
          >
            <option></option>
            {/* <option>Wybierz rozmiar</option> */}
            {product.size.map(el => (
              <option key={el.type} value={el.type}>
                {el.dimensions} - {el.price} $
              </option>
            ))}
          </Form.Select>
          {errors.choosenSize && <small className="d-block form-text text-danger mt-1">Pole wymagane</small>}
        </Form.Group>

        <Button className="mt-2" variant="primary" type="submit">
          Dodaj do koszyka
        </Button>
        <p className={styles.info_box} data-animation={addToCartAnimation} onAnimationEnd={handleAddToCartAnimationEvent}>
          {/* Dodano do koszyka */}+ {quantity} szt.
        </p>
      </Form>
    </div>
  );
};

export default AddToBasket;
