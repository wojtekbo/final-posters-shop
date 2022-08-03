import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {getAllProducts} from '../../../redux/productsRedux';
import styles from './ProductsList.module.scss';

const ProductsList = () => {
  const products = useSelector(state => getAllProducts(state));
  const imgPath = '/img/products';

  if (!products) {
    <></>;
  } else
    return (
      <div id="products_list" className={styles.ProductsList}>
        <Container>
          <div className={styles.products_wrapper}>
            {products.data.map(product => (
              <div key={`product_${product._id}`} className={styles.product}>
                <NavLink to={`/product/${product._id}`}>
                  <img src={`${imgPath}/${product.productId}/${product.imgMini}`} alt={product.title} />

                  <div className={styles.background}></div>
                  <div className={styles.description}>
                    <h3>{product.title}</h3>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
};

export default ProductsList;
