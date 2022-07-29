import React from 'react';
import styles from './MainCarousel.module.scss';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import required modules
import {Autoplay, Navigation} from 'swiper';

const MainCarousel = () => {
  return (
    <div className={styles.MainCarousel}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/products/AoH-01-PSYCHO-1d.gif" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/products/AoH-01-PSYCHO-1d.gif" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/products/AoH-01-PSYCHO-1d.gif" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainCarousel;
