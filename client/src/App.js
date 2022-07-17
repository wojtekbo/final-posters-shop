import React, {useEffect} from 'react';
import {fetchGetAllProducts, getAllProducts} from './redux/productsRedux';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetAllProducts());
  }, [dispatch]);

  const products = useSelector(state => getAllProducts(state));
  console.log(products);

  return (
    <div className="App">
      <h1>App</h1>
      <ul>
        {products.data.map(product => {
          return <li>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
