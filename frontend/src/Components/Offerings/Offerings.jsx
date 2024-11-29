import React from 'react';
import "./Offerings.css";

import offer1 from '../../assets/offer_model1.png';
import offer2 from '../../assets/offer_model2.png';
import offer3 from '../../assets/offer_model3.png';
import offer4 from '../../assets/offer_model4.png';
import offer5 from '../../assets/offer_model5.png';
import offer6 from '../../assets/offer_model1.png';
import rightImage from '../../assets/red_girl_model.png'; // Use a transparent PNG if possible
import { useTheme } from '../../context/ThemeContext'; // Import the theme hook

const offerCards = [
  { id: 0, image: offer1, title: "Futures and Options", description: "Empowering you with theoptions." },
  { id: 2, image: offer2, title: "Margin Trading Facility", description: "Empowering you with flexible trading." },
  { id: 3, image: offer3, title: "Currency", description: "Trade in various global currencies." },
  { id: 4, image: offer4, title: "Commodity", description: "Invest in commodities like gold, silver." },
  { id: 5, image: offer5, title: "Mutual Funds", description: "Grow wealth with top mutual funds." },
  { id: 6, image: offer6, title: "Tax-Free Bonds", description: "Invest in tax-free bonds for stability." },
];

const Offerings = () => {
  const { isDarkMode } = useTheme(); // Access the theme

  const arrayDataItems = offerCards.map((offercard) => (
    <div key={offercard.id} className={`offer-card  ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <img className='offer-card-image' src={offercard.image} alt={offercard.title} />
      <div className="card-content">
        <h1 className={`offer-card-title  ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>{offercard.title}</h1>
        <p className="card-description">{offercard.description}</p>
        <div className="button-arrow"></div>
      </div>
    </div>
  ));

  return (
    
    <div className="offerings-section">
      <div className="offer-card-container">
       
        <h1 className={`main-title  ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>OUR OFFERS</h1>
      
        <h3 className= {`Sub-title  ${isDarkMode ? 'dark-mode' : 'light-mode'}`}></h3>
        <div className="offer-card-component">
          {arrayDataItems}
        </div>
      </div>
      <div className="offer-image-container">
        <img src={rightImage} alt="Model" className="right-image" /> {/* Right image section */}
      </div>
    </div>
  );
};

export default Offerings;
