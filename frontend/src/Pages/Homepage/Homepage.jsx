// import React from 'react';

// import Hero from '../../Components/Hero/Hero';
// import Services from '../../Components/Services/Services';
// import Swiper from '../../Components/Swiper/Swiper';
// import ProductsWeOffer from '../../Components/ProductsWeOffer/ProductsWeOffer';
// import Offerings from '../../Components/Offerings/Offerings';
// import Features from '../../Components/Features/Features';
// import AboutUs from '../../Components/AboutUs/AboutUs';
// import Footer from '../../Components/Footer/Footer';
// import OurBanks from '../../Components/OurBanks/OurBank';

// import Navbar from '../../Components/Navbar/Navbar';
// import Sidebar from '../../Components/Sidebar/Sidebar';

// function Homepage() {
//   return (
//     <>
//        {/* <Navbar />  */}
//        <Sidebar/>
      
//       <Hero />
//       <Services />
     
//       <Swiper />
//       <ProductsWeOffer />
//       <Offerings />
//       <Features />
//       <AboutUs />
//       <OurBanks />
//       <Footer />
//     </>
//   );
// }

// export default Homepage;

//navbr for mobiel tablet 

import React, { useState, useEffect } from 'react';

import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
import Swiper from '../../Components/Swiper/Swiper';
import ProductsWeOffer from '../../Components/ProductsWeOffer/ProductsWeOffer';
import Offerings from '../../Components/Offerings/Offerings';
import Features from '../../Components/Features/Features';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Footer from '../../Components/Footer/Footer';
import OurBanks from '../../Components/OurBanks/OurBank';

import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

function Homepage() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    // Check screen size on component mount
    checkScreenSize();

    // Add resize event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      {/* Conditionally render Navbar or Sidebar based on screen size */}
      {isMobile ? <Sidebar /> : <Navbar />}

      <Hero />
      <Services />
      <Swiper />
      <ProductsWeOffer />
      <Offerings />
      <Features />
      <AboutUs />
      <OurBanks />
      <Footer />
    </>
  );
}

export default Homepage;

