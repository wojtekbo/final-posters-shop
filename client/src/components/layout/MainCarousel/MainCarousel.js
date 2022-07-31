import React from 'react';
import {getAllMainCarouselImgs} from '../../../redux/mainCarouselRedux';
import {useSelector} from 'react-redux';

import styles from './MainCarousel.module.scss';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import {Autoplay, Navigation} from 'swiper';
import {NavLink} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';

const MainCarousel = () => {
  const imgPath = '/img/carousel/';
  const imgs = useSelector(state => getAllMainCarouselImgs(state));

  return (
    <div className={styles.MainCarousel}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {imgs.length > 0 &&
          imgs.map(el => {
            return (
              <SwiperSlide key={'carusel_' + el._id}>
                <Nav.Link className="me-2 p-0" as={NavLink} to={`/product/${el._id}`}>
                  <img src={imgPath + el.img} alt={el.title} />
                </Nav.Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default MainCarousel;
