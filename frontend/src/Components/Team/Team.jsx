import React, { useState } from 'react'
import './Team.css'
import { useTheme } from '../../context/ThemeContext';
import Traders_image1 from '../../assets/feature_image_1.png';
import Traders_image2 from '../../assets/feature_image_2.png';
import Traders_image3 from '../../assets/feature_image_3.png';
import Traders_image4 from '../../assets/feature_image_4.png';

import Investor_image1 from '../../assets/feature_image_investor_1.png';
import Investor_image2 from '../../assets/feature_image_investor_2.png';
import Investor_image3 from '../../assets/feature_image_investor_3.png';
import Investor_image4 from '../../assets/feature_image_investor_4.png';

const boardDirectors = [
    { id: 1, image: Traders_image1, Title: "Trading Calls", Description: "Get access to trading calls from Kotak's research team." },
    { id: 2, image: Traders_image2, Title: "Basket Order", Description: "No need to save basket, just select contracts & place order." },
    { id: 3, image: Traders_image3, Title: "Payoff Analyzer", Description: "Build and Analyze Options strategies at your fingertips." },
    { id: 4, image: Traders_image4, Title: "Price Alert", Description: "Set alerts so you don’t have to track stock movements manually." }
];

const managementTeam = [
    { id: 1, image: Investor_image1, Title: "Long-Term Growth", Description: "Track long-term growth investments with ease." },
    { id: 2, image: Investor_image2, Title: "Portfolio Tracker", Description: "Monitor your investment portfolio in real-time." },
    { id: 3, image: Investor_image3, Title: "Dividend Alerts", Description: "Receive alerts for dividend payouts on your investments." },
    { id: 4, image: Investor_image4, Title: "Risk Analysis", Description: "Analyze risk profiles for diversified investment strategies." }
];

export const Team = () => {
    const {isDarkMode} = useTheme();
    const[ isDirectorsView, setIsDirectorsView] = useState(true);


 const handleToggle = () => {
    setIsDirectorsView(!isDirectorsView);
 };

 const teamCards = (isDirectorsView ? boardDirectors : managementTeam ).map((team)=>(
<div key={team.id} className="team-card">
<img src={team.image} alt="Feature" />
<div className="team-card-content">
    <h2 className={`team-card-title  ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>{team.Title}</h2>
    <p className="team-card-description">{team.Description}</p>
</div>
</div>
 ));


    return(
   <div className='team-card-section'>
    <h1 className='team-card-main-title'>
  Meet Our Team
    </h1>
    <div className='team-toggle-slider' onClick={handleToggle}>
        <div className={`team-slider ${isDirectorsView ? "director" : "management"}`}>
  {isDirectorsView ? "Our Directors" : "Our Management Team"}
        </div>

    </div>
    <p className='team-subtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia dicta dolorem beatae iure eius laudantium aspernatur vitae cupiditate aut voluptatem eligendi, tempore ab illum sequi, molestias temporibus harum mollitia natus?</p>

    <div className='team-card-container'>
        {teamCards}
    </div>
   </div>

    );

}

export default Team;