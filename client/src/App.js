import React, {useEffect} from 'react';
import {fetchGetAllProducts, getAllProducts} from './redux/productsRedux';
import {useDispatch, useSelector} from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './components/pages/Home/Home';
import NoMatch from './components/pages/NoMatch/NoMatch';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/normalize.scss';
import './styles/global.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetAllProducts());
  }, [dispatch]);

  const products = useSelector(state => getAllProducts(state));
  console.log(products);

  return (
    <div className="App">

      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
