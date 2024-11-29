import React from 'react';
import hero_banner6 from '../../assets/hero_banner_6.png';
import './Hero.css';

export const Hero = () => {
  return (
    <div className='banner'>
      <img src={hero_banner6} alt='Hero Banner' />
      <div className="banner-text">
        Empowering Your Trades, <br /> Powered by Rikhav
      </div>
    </div>
  );
};

export default Hero;
