import React, {useEffect} from 'react';
import {fetchGetAllProducts, getAllProducts} from './redux/productsRedux';
import {fetchGetAllMainCarouselImgs} from './redux/mainCarouselRedux';
import {useDispatch, useSelector} from 'react-redux';
import {Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home/Home';
import NoMatch from './components/pages/NoMatch/NoMatch';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/normalize.scss';
import './styles/global.scss';
import Product from './components/pages/Product/Product';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetAllProducts());
    dispatch(fetchGetAllMainCarouselImgs());
  }, [dispatch]);

  const products = useSelector(state => getAllProducts(state));

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
