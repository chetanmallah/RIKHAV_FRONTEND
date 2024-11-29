

// import React from 'react';
// import './About.css';

// import Navbar from '../../Components/Navbar/Navbar';
// import aboutusimg1 from '../../assets/aboutusimg1.jpg'; // Ensure the image path is correct
// import aboutusimg2 from '../../assets/aboutusimg2.jpg'; // Another image for the bottom section
// import cardImage1 from '../../assets/customer-oriented-approach-icon.svg'; // Card Image 1
// import cardImage2 from '../../assets/hands-on-research-icon.svg'; // Card Image 2
// import cardImage3 from '../../assets/accessibility-across-icon.svg'; // Card Image 3
// import cardImage4 from '../../assets/commitment-to-compliance-icon.svg'; // Card Image 4
// import Team from '../../Components/Team/Team';
// import Footer from '../../Components/Footer/Footer'


// const About = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="aboutus-section">
//         {/* Section for "Who are we" */}
//         <div className="aboutus-container">
//           <h1 className="aboutus-title">Who are We</h1>
//           <p className="aboutus-description">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae delectus dolorem repellat laboriosam est laborum saepe et quisquam nostrum nulla facere perferendis sint temporibus at, officia aliquid hic quidem placeat.
//           </p>
//         </div>

//         {/* Section for first image and "Our Mission" text */}
//         <div className="aboutus-content">
//           <div className="aboutus-image">
//             <img className="aboutusimg1" src={aboutusimg1} alt="About Us" />
//           </div>
//           <div className="aboutus-text-container1">
//             <div className="aboutus-mission">
//               <h1 className="aboutus-subtitle">Our Mission</h1>
//               <h3 className="aboutus-subtext">
//                 To be an organization that inculcates true 'financial confidence' in every Indian investor.
//               </h3>
//             </div>
//           </div>
//         </div>

//         {/* Section for second image and text */}
//         <div className="aboutus-content reverse">
//           <div className="aboutus-image">
//             <img className="aboutusimg2" src={aboutusimg2} alt="About Us" />
//           </div>
//           <div className="aboutus-text-container2">
//             <div className="aboutus-mission2">
//               <h1 className="aboutus-subtitle">Our Mission Continues</h1>
//               <h3 className="aboutus-subtext">
//                 Striving for excellence and innovation in providing the best services to every investor.
//               </h3>
//             </div>
//           </div>
//         </div>

//         {/* New Section: Why Choose Rikhav Securities */}
//         {/* New Section: Why Choose Rikhav Securities */}
// <div className="why-choose-section">
//   <h2 className="why-choose-title">Why Choose Rikhav Securities</h2>
//   <div className="why-choose-card-container">
//     <div className="whychooseuscard">
//       <img src={cardImage1} alt="Expert Advice" className="card-image" />
//       <h3 className="card-title">Expert Advice</h3>
//       <p className="card-description">Get professional insights to make informed decisions.</p>
//     </div>
//     <div className="whychooseuscard">
//       <img src={cardImage2} alt="Trustworthy" className="card-image" />
//       <h3 className="card-title">Trustworthy</h3>
//       <p className="card-description">Built on trust and reliability for every investor.</p>
//     </div>
//     <div className="whychooseuscard">
//       <img src={cardImage3} alt="Customer Support" className="card-image" />
//       <h3 className="card-title">Customer Support</h3>
//       <p className="card-description">24/7 assistance for your investment needs.</p>
//     </div>
//     <div className="whychooseuscard">
//       <img src={cardImage4} alt="Innovative Solutions" className="card-image" />
//       <h3 className="card-title">Innovative Solutions</h3>
//       <p className="card-description">Stay ahead with cutting-edge investment tools.</p>
//     </div>
//   </div>
// </div>

//       </div>
      
//       <Team/>
//       <Footer />
     
//     </>
//   );
// };

// export default About;

// responsive  nes 

import React from 'react';
import './About.css';
import Sidebar from '../../Components/Sidebar/Sidebar';

import Navbar from '../../Components/Navbar/Navbar';
import aboutusimg1 from '../../assets/aboutusimg1.jpg'; 
import aboutusimg2 from '../../assets/aboutusimg2.jpg'; 
import cardImage1 from '../../assets/customer-oriented-approach-icon.svg'; 
import cardImage2 from '../../assets/hands-on-research-icon.svg'; 
import cardImage3 from '../../assets/accessibility-across-icon.svg'; 
import cardImage4 from '../../assets/commitment-to-compliance-icon.svg'; 
import Team from '../../Components/Team/Team';
import Footer from '../../Components/Footer/Footer';
import { useState, useEffect} from 'react';

const About = () => {
  
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
      {/* <Navbar /> */}

      {isMobile ? <Sidebar/> : <Navbar/>}
      <div className="aboutus-section">
        {/* Section for "Who are we" */}
        <div className="aboutus-container">
          <h1 className="aboutus-title">Who are We</h1>
          <p className="aboutus-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae delectus dolorem repellat laboriosam est laborum saepe et quisquam nostrum nulla facere perferendis sint temporibus at, officia aliquid hic quidem placeat.
          </p>
        </div>

        {/* Section for first image and "Our Mission" text */}
        <div className="aboutus-content">
          <div className="aboutus-image">
            <img className="aboutusimg1" src={aboutusimg1} alt="About Us" />
          </div>
          <div className="aboutus-text-container1">
            <div className="aboutus-mission">
              <h1 className="aboutus-subtitle">Our Mission</h1>
              <h3 className="aboutus-subtext">
                To be an organization that inculcates true 'financial confidence' in every Indian investor.
              </h3>
            </div>
          </div>
        </div>

        {/* Section for second image and text */}
        <div className="aboutus-content reverse">
          <div className="aboutus-image">
            <img className="aboutusimg2" src={aboutusimg2} alt="About Us" />
          </div>
          <div className="aboutus-text-container2">
            <div className="aboutus-mission2">
              <h1 className="aboutus-subtitle">Our Mission Continues</h1>
              <h3 className="aboutus-subtext">
                Striving for excellence and innovation in providing the best services to every investor.
              </h3>
            </div>
          </div>
        </div>

        {/* New Section: Why Choose Rikhav Securities */}
        <div className="why-choose-section">
          <h2 className="why-choose-title">Why Choose Rikhav Securities</h2>
          <div className="why-choose-card-container">
            <div className="whychooseuscard">
              <img src={cardImage1} alt="Expert Advice" className="card-image" />
              <h3 className="card-title">Expert Advice</h3>
              <p className="card-description">Get professional insights to make informed decisions.</p>
            </div>
            <div className="whychooseuscard">
              <img src={cardImage2} alt="Trustworthy" className="card-image" />
              <h3 className="card-title">Trustworthy</h3>
              <p className="card-description">Built on trust and reliability for every investor.</p>
            </div>
            <div className="whychooseuscard">
              <img src={cardImage3} alt="Customer Support" className="card-image" />
              <h3 className="card-title">Customer Support</h3>
              <p className="card-description">24/7 assistance for your investment needs.</p>
            </div>
            <div className="whychooseuscard">
              <img src={cardImage4} alt="Innovative Solutions" className="card-image" />
              <h3 className="card-title">Innovative Solutions</h3>
              <p className="card-description">Stay ahead with cutting-edge investment tools.</p>
            </div>
          </div>
        </div>

      </div>
      
      <Team />
      <Footer />
     
    </>
  );
};

export default About;

