import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Swiper.css';
import { useTheme } from '../../context/ThemeContext';

import img1 from '../../assets/swipper_banner1.svg'; 
import img2 from '../../assets/swipper_banner2.svg';
import img3 from '../../assets/swipper_banner3.svg';
import img4 from '../../assets/swipper_banner4.svg';

const slides = [
  {
    image: img1,
    title: 'Tezi sey Catch the IPO Action',
    subtitle: 'Swiggy, ACME and more',
    button: 'Explore Now',
    tag: 'IPOs'
  },
  {
    image: img2,
    title: 'Mutual Fund SIPs for tez investors',
    subtitle: 'Swiggy, ACME and more',
    button: 'Know More',
    tag: 'Mutual funds'
  },
  {
    image: img3,
    title: 'Tez in buying, flexible in selling',
    subtitle: 'Swiggy, ACME and more',
    button: 'Know More',
    tag: 'MTF'
  },
  {
    image: img4,
    title: 'Another Investment Option',
    subtitle: 'Swiggy, ACME and more',
    button: 'Learn More',
    tag: 'New'
  }
];

const CustomSwiper = () => {
  const { isDarkMode } = useTheme(); // Access the theme
  return (
    <div className={`swiper-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className={`slider-main-title ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>SMART INVESTMENT OPTIONS</h2>
      
      <Swiper
        modules={[Navigation]}
        spaceBetween={5} // Reduced space between slides globally
        slidesPerView={2} // Default for larger screens
        navigation
        loop={true}
        allowTouchMove={true} // Ensure touch/swipe functionality on mobile
        breakpoints={{
          1030: { slidesPerView: 3, spaceBetween: -70 },
          1024: { slidesPerView: 2, spaceBetween: -60 }, // Tablets and above
          768: { slidesPerView: 2, spaceBetween: 15 },  // Smaller tablets
          480: { slidesPerView: 1, spaceBetween: -80 } ,  // Mobile screens, one slide at a time
          412: { slidesPerView: 1, spaceBetween: -50 } 
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
              <div className="text-overlay">
                <span className="slide-tag">{slide.tag}</span>
                <h4 className="slide-title">{slide.title}</h4>
                <button className="slide-button">{slide.button}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
