import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';

import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchProductById, getSelectedProduct} from '../../../redux/selectedProductRedux';
import AddToCart from '../../common/AddToCart/AddToCart';
import LoadingPage from '../../common/LoadingPage/LoadingPage';

import styles from './Product.module.scss';

const Product = () => {
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch]);

  const product = useSelector(state => getSelectedProduct(state));

  let {data} = product;

  const imgPath = '/img/products/';

  if (!data) {
    return <LoadingPage />;
  } else
    return (
      <div className={styles.Product}>
        <div className={styles.product_wrapper}>
          <div className={styles.imgages_main}>
            <img src={`${imgPath}/${data._id}/${data.imgMain}`} alt={data.title} />
          </div>
          <Container>
            <div className={styles.product_data}>
              <div className={styles.product_info}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <p>
                  <b>Autor: </b>
                  {data.author}
                </p>
              </div>
              <div className={styles.product_buy}>
                <AddToCart product={data} />
              </div>
            </div>
          </Container>
          <div className={styles.images_details}>
            <img src={`${imgPath}/${data._id}/${data.imgDetails[0]}`} alt={data.title} />
            <img src={`${imgPath}/${data._id}/${data.imgDetails[1]}`} alt={data.title} />
          </div>
        </div>
      </div>
    );
};

export default Product;
