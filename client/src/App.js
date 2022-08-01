import React, {useEffect} from 'react';
import {fetchGetAllProducts} from './redux/productsRedux';
import {fetchGetAllMainCarouselImgs} from './redux/mainCarouselRedux';
import {useDispatch} from 'react-redux';
import {Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home/Home';
import NoMatch from './components/pages/NoMatch/NoMatch';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/normalize.scss';
import './styles/global.scss';
import Product from './components/pages/Product/Product';
import ShoppingCart from './components/pages/ShoppingCart/ShoppingCart';
import ProductsList from './components/pages/ProductsList/ProductsList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetAllProducts());
    dispatch(fetchGetAllMainCarouselImgs());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products-list" element={<ProductsList />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
