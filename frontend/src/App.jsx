// import React from 'react';
// import { Routes, Route } from "react-router-dom";
// import Homepage from './Pages/Homepage/Homepage';
// import About from './Pages/About/About';
// import Contact from './Pages/Contact/Contact';

// function App() {
//   return (
//     <>
//       {/* Define routes for the different pages */}
//       <Routes>
//         <Route path="/" element={<Homepage />} /> {/* Default homepage route */}
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* Add other routes here as needed */}
//         {/* <Route path="/investors" element={<Investors />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/research" element={<Research />} /> */}
//       </Routes>
//     </>
//   );
// }

// export default App;


// abouve ok but down for dark ligh mode 

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from '../src/context/ThemeContext'; // Import the useTheme hook
import Homepage from './Pages/Homepage/Homepage';
import About from './Pages/About/About';
import Contact from './Pages/Contactus/Contact';

function App() {
  const { isDarkMode, toggleTheme } = useTheme(); // Access the theme state from context

  useEffect(() => {
    // Apply dark mode to the body element when the theme changes
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Add your theme toggle button or switch */}
      {/* <button onClick={toggleTheme}>
        Toggle Theme
      </button> */}

      {/* Define routes for the different pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
