
import React from 'react';
import './ProductsWeOffer.css';
import { useTheme } from '../../context/ThemeContext'; // Import the theme hook

import card0 from '../../assets/weoffer0.svg';
import card1 from '../../assets/weoffer1.svg';
import card2 from '../../assets/weoffer2.svg';
import card3 from '../../assets/weoffer3.svg';
import card4 from '../../assets/weoffer4.svg';
import card5 from '../../assets/weoffer5.svg';
import card6 from '../../assets/weoffer6.svg';
import card7 from '../../assets/weoffer7.svg';
import card8 from '../../assets/weoffer8.svg';
import card9 from '../../assets/weoffer9.svg';
import card10 from '../../assets/weoffer10.svg';

const cards = [
  { id: 0, image: card0, title: "Futures and Options" },
  { id: 1, image: card1, title: "Margin Trading Facility" },
  { id: 2, image: card2, title: "Exchange Traded Funds" },
  { id: 3, image: card3, title: "Currency" },
  { id: 4, image: card4, title: "Commodity" },
  { id: 5, image: card5, title: "Mutual Funds" },
  { id: 6, image: card6, title: "SipIt" },
  { id: 7, image: card7, title: "StockCase" },
  { id: 8, image: card8, title: "Tax Free Bonds" },
  { id: 9, image: card9, title: "IPO" },
  { id: 10, image: card10, title: "Sovereign Gold Bond" },
];

function ProductsWeOffer() {
  const { isDarkMode } = useTheme(); // Access the theme

  return (
    <div className={`products-we-offer-section ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1 className="products-we-offer-title">Products We Offer</h1>
      <h4 className="products-we-offer-subtitle">Explore our diverse product portfolio</h4>

      <div className="cards">
        {cards.map((card) => (
          <div key={card.id} className={`card ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <img src={card.image} alt={card.title} />
            <h1>{card.title}</h1>
          </div>
        ))}
        <div className="card explore-card">
          <h1 className="explore-card-text">Explore all Products</h1>
        </div>
      </div>
    </div>
  );
}

export default ProductsWeOffer;
