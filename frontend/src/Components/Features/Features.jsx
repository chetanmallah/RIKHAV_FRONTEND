import React, { useState } from 'react';
import './Features.css';
import { useTheme } from '../../context/ThemeContext'; // Import the theme hook
import Traders_image1 from '../../assets/feature_image_1.png';
import Traders_image2 from '../../assets/feature_image_2.png';
import Traders_image3 from '../../assets/feature_image_3.png';
import Traders_image4 from '../../assets/feature_image_4.png';

import Investor_image1 from '../../assets/feature_image_investor_1.png';
import Investor_image2 from '../../assets/feature_image_investor_2.png';
import Investor_image3 from '../../assets/feature_image_investor_3.png';
import Investor_image4 from '../../assets/feature_image_investor_4.png';

const traderFeatures = [
    { id: 1, image: Traders_image1, Title: "Trading Calls", Description: "Get access to trading calls from Kotak's research team." },
    { id: 2, image: Traders_image2, Title: "Basket Order", Description: "No need to save basket, just select contracts & place order." },
    { id: 3, image: Traders_image3, Title: "Payoff Analyzer", Description: "Build and Analyze Options strategies at your fingertips." },
    { id: 4, image: Traders_image4, Title: "Price Alert", Description: "Set alerts so you don’t have to track stock movements manually." }
];

const investorFeatures = [
    { id: 1, image: Investor_image1, Title: "Long-Term Growth", Description: "Track long-term growth investments with ease." },
    { id: 2, image: Investor_image2, Title: "Portfolio Tracker", Description: "Monitor your investment portfolio in real-time." },
    { id: 3, image: Investor_image3, Title: "Dividend Alerts", Description: "Receive alerts for dividend payouts on your investments." },
    { id: 4, image: Investor_image4, Title: "Risk Analysis", Description: "Analyze risk profiles for diversified investment strategies." }
];

export const Features = () => {
    const { isDarkMode } = useTheme(); // Access the theme
    const [isTraderView, setIsTraderView] = useState(true);

    const handleToggle = () => {
        setIsTraderView(!isTraderView);
    };

    const featureCards = (isTraderView ? traderFeatures : investorFeatures).map((feature) => (
        <div key={feature.id} className="feature-card">
            <img src={feature.image} alt="Feature" />
            <div className="feature-card-content">
                <h2 className={`feature-card-title  ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>{feature.Title}</h2>
                <p className="feature-card-description">{feature.Description}</p>
            </div>
        </div>
    ));

    return (
        <div className="feature-card-section">
            <h1 className="feature-card-main-title">Features of Rikhav Security</h1>
            
            <div className="feature-toggle-slider" onClick={handleToggle}>
                <div className={`slider ${isTraderView ? "trader" : "investor"}`}>
                    {isTraderView ? "Built for Traders" : "Built for Investors"}
                </div>
            </div>
            
            <p className="feature-subtitle">Amplify your trading experience with these enhanced features.</p>
            
            <div className="feature-card-container">
                {featureCards}
            </div>
        </div>
    );
};

export default Features;
