

// import React from 'react';
// import './Services.css';
// import { FaRegMoneyBillAlt, FaRegCreditCard, FaChartLine, FaMoneyCheck } from 'react-icons/fa'; // Importing icons
// import { useTheme } from '../../context/ThemeContext'; // Import the useTheme hook

// const servicesData = [
//   {
//     title: 'For above 30 years of age',
//     description: '₹0 Account opening fee',
//     icon: <FaRegCreditCard />, // Use the imported icon
//   },
//   {
//     title: '₹10 per order',
//     description: 'Brokerage on all intraday trades',
//     icon: <FaRegMoneyBillAlt />, // Use the imported icon
//   },
//   {
//     title: '₹10 per order',
//     description: 'Brokerage on all carry forward F&O trades',
//     icon: <FaChartLine />, // Use the imported icon
//   },
//   {
//     title: '0.20%',
//     description: 'Brokerage on stock delivery trades',
//     icon: <FaMoneyCheck />, // Use the imported icon
//   },
// ];

// export const Services = () => {
//   const { isDarkMode } = useTheme(); // Get the current theme state

//   return (
//     <div className="services-section">
//       {/* Section Title and Description */}
//       <div className="services-header">
//         <h2 className="services-title">Our Services</h2>
//         <div className="services-description">
//           <p className='services-p'>
//             Welcome to Rikhav Securities! Get the best trading services with
//             affordable charges and a seamless experience.
//           </p>
//           <p className='services-p'>
//             Whether you're just starting or you're a seasoned investor, our
//             services cater to all your trading needs with transparency and
//             reliability.
//           </p>
//         </div>
//       </div>

//       {/* Cards Container */}
//       <div className="services-container">
//         {servicesData.map((service, index) => (
//           <div
//             className={`service-card ${isDarkMode ? 'dark' : 'light'}`} // Conditionally apply class based on theme
//             key={index}
//           >
//             <div className="service-icon">{service.icon}</div>
//             <h3 className="service-title">{service.title}</h3>
//             <div className="service-line"></div> {/* Line under title */}
//             <p className="service-description">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';
import './Services.css';
import { FaRegMoneyBillAlt, FaRegCreditCard, FaChartLine, FaMoneyCheck } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const servicesData = [
  {
    title: 'For above 30 years of age',
    description: '₹0 Account opening fee',
    icon: <FaRegCreditCard />,
  },
  {
    title: '₹10 per order',
    description: 'Brokerage on all intraday trades',
    icon: <FaRegMoneyBillAlt />,
  },
  {
    title: '₹10 per order',
    description: 'Brokerage on all carry forward F&O trades',
    icon: <FaChartLine />,
  },
  {
    title: '0.20%',
    description: 'Brokerage on stock delivery trades',
    icon: <FaMoneyCheck />,
  },
];

export const Services = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="ourservices-section">
      <div className="ourservices-header">
        <h2 className="ourservices-title">Our Services</h2>
        <div className="ourservices-description">
          <p className="ourservices-p">
            Welcome to Rikhav Securities! Get the best trading services with affordable charges and a seamless experience.
          </p>
          <p className="ourservices-p">
            Whether you're just starting or you're a seasoned investor, our services cater to all your trading needs with transparency and reliability.
          </p>
        </div>
      </div>
      <div className="ourservices-container">
        {servicesData.map((service, index) => (
          <div
            className={`ourservices-card ${isDarkMode ? 'dark' : 'light'}`}
            key={index}
          >
            <div className="ourservices-icon">{service.icon}</div>
            <h3 className="ourservices-card-title">{service.title}</h3>
            <div className="ourservices-card-line"></div>
            <p className="ourservices-card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
