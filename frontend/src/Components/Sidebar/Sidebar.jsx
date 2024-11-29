
// toggle buton dark ligh mode


// import React, { useState, useEffect } from 'react';
// import './Sidebar.css'; // Import the CSS file for styling
// import { Link } from 'react-router-dom'; // Using react-router for page routing
// import { FaSun, FaMoon } from 'react-icons/fa';
// import Rikhav_logo from '../../assets/Rikhav_logo.png';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     // Check localStorage for dark mode preference on initial load
//     const savedMode = localStorage.getItem('darkMode');
//     return savedMode === 'true'; // Default to light mode if not found
//   });

//   // Function to toggle the sidebar visibility
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   // Dark mode toggle handler
//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => {
//       const newMode = !prevMode;
//       // Apply or remove the mode class on the body
//       document.body.classList.toggle('dark-mode', newMode);
//       document.body.classList.toggle('light-mode', !newMode);
//       // Save the preference to localStorage
//       localStorage.setItem('darkMode', newMode);
//       return newMode;
//     });
//   };

//   useEffect(() => {
//     // Apply the saved mode on initial load
//     document.body.classList.toggle('dark-mode', isDarkMode);
//     document.body.classList.toggle('light-mode', !isDarkMode);
//   }, [isDarkMode]);

//   return (
//     <div>
//       {/* Navbar with logo, theme toggle, and hamburger icon */}
//       <div className="sidebar-navbar">
//         <div className="sidebar-logo">
//           <img src={Rikhav_logo} alt="Logo" /> {/* Replace with your logo */}
//         </div>

//         {/* Dark/Light Mode Toggle Button */}
//         <div className="btn-toggle-theme" onClick={toggleDarkMode}>
//           {isDarkMode ? <FaSun className="theme-icon-sun" /> : <FaMoon className="theme-icon-moon" />}
//         </div>

//         {/* Hamburger Menu */}
//         <div className="sidebar-hamburger" onClick={toggleSidebar}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>

//       {/* Sidebar */}
//       <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//         <div className="sidebar-close-btn" onClick={toggleSidebar}>
//           <span>&times;</span> {/* Close button */}
//         </div>
//         <div className="sidebar-content">
//           <ul>
//             <li>
//               <Link to="/" onClick={toggleSidebar}>Home</Link>
//             </li>
//             <li>
//               <Link to="/about" onClick={toggleSidebar}>About</Link>
//             </li>
//             <li>
//               <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// initial thema tlght mode

import React, { useState, useEffect } from 'react';
import './Sidebar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom'; // Using react-router for page routing
import { FaSun, FaMoon } from 'react-icons/fa';
import Rikhav_logo from '../../assets/Rikhav_logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for dark mode preference on initial load
    const savedMode = localStorage.getItem('darkMode');
    /* Changes here: Default to false (light mode) if no saved preference */
    return savedMode === 'true'; // Default to light mode if not found
  });

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Dark mode toggle handler
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Apply or remove the mode class on the body
      document.body.classList.toggle('dark-mode', newMode);
      document.body.classList.toggle('light-mode', !newMode);
      // Save the preference to localStorage
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    // Apply the saved mode on initial load
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  /* Changes here: Ensure light mode class is applied initially if no saved preference */
  useEffect(() => {
    if (localStorage.getItem('darkMode') === null) {
      document.body.classList.add('light-mode');
    }
  }, []);

  return (
    <div>
      {/* Navbar with logo, theme toggle, and hamburger icon */}
      <div className="sidebar-navbar">
        <div className="sidebar-logo">
          <img src={Rikhav_logo} alt="Logo" /> {/* Replace with your logo */}
        </div>

        {/* Dark/Light Mode Toggle Button */}
        <div className="btn-toggle-theme" onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun className="theme-icon-sun" /> : <FaMoon className="theme-icon-moon" />}
        </div>

        {/* Hamburger Menu */}
        <div className="sidebar-hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-close-btn" onClick={toggleSidebar}>
          <span>&times;</span> {/* Close button */}
        </div>
        <div className="sidebar-content">
          <ul>
            <li>
              <Link to="/" onClick={toggleSidebar}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleSidebar}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
