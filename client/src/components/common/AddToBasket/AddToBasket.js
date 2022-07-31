import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uniqid from 'uniqid';

const AddToBasket = ({product}) => {
  const {
    register,
    handleSubmit: validate,
    formState: {errors},
  } = useForm();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState();

  const onSubmit = () => {
    console.log('WYSYLAM');
    console.log('quantity', quantity);
    console.log('size', size);
    // setPublishedDateError(!publishedDate);
    //   action({title, content, publishedDate, price, localization, user, phone, status: 'published'});
  };

  return (
    <div>
      {/* <p>{product.size}</p> */}

      <Form onSubmit={validate(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Ilość</Form.Label>
          <Form.Control {...register('quantity', {required: true})} value={quantity} onChange={e => setQuantity(e.target.value)} type="number" />
          {errors.quantity && <small className="d-block form-text text-danger mt-1">Pole wymagane</small>}
          <Form.Label className="mt-2">Rozmiar</Form.Label>
          <Form.Select {...register('size', {required: true})} onChange={e => setSize(e.target.value)} aria-label="Wybierz rozmiar">
            <option></option>
            {/* <option>Wybierz rozmiar</option> */}
            {product.size.map(el => (
              <option key={el.type} value={el.type}>
                {el.dimensions} - {el.price} $
              </option>
            ))}
          </Form.Select>
          {errors.size && <small className="d-block form-text text-danger mt-1">Pole wymagane</small>}
        </Form.Group>

        <Button className="mt-2" variant="primary" type="submit">
          Dodaj do koszyka
        </Button>
      </Form>
    </div>
  );
};

export default AddToBasket;
