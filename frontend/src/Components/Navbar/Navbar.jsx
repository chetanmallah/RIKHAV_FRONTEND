
// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import $ from 'jquery';
// import './Navbar.css';
// import { FaSun, FaMoon } from 'react-icons/fa';
// import Rikhav_logo from '../../assets/Rikhav_logo.png';

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     // Check localStorage for dark mode preference on initial load
//     const savedMode = localStorage.getItem('lightmode');
//     return savedMode === 'true'; // Default to light mode if not found
//   });

//   const location = useLocation();

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

//   // Adjust navbar selector position based on active tab
//   const updateNavSelector = () => {
//     const activeItem = $('#navbarSupportedContent').find('.active');
//     if (activeItem.length) {
//       const height = activeItem.innerHeight();
//       const width = activeItem.innerWidth();
//       const top = activeItem.position().top;
//       const left = activeItem.position().left;
//       $('.hori-selector').css({ top, left, height, width });
//     }
//   };

//   useEffect(() => {
//     // Update selector position on load
//     updateNavSelector();

//     // Update selector position on window resize
//     $(window).on('resize', () => setTimeout(updateNavSelector, 500));

//     // Toggle selector position on navbar item click
//     $('#navbarSupportedContent').on('click', 'li', function () {
//       $('#navbarSupportedContent ul li').removeClass('active');
//       $(this).addClass('active');
//       updateNavSelector();
//     });

//     return () => {
//       $(window).off('resize');
//       $('#navbarSupportedContent').off('click', 'li');
//     };
//   }, []);

//   useEffect(() => {
//     // Set active class based on path
//     const currentPath = location.pathname;
//     $('#navbarSupportedContent ul li').removeClass('active');
//     $(`#navbarSupportedContent ul li a[href="${currentPath}"]`).parent().addClass('active');
//     updateNavSelector();
//   }, [location.pathname]);

//   useEffect(() => {
//     // Apply the saved mode on initial load
//     document.body.classList.toggle('dark-mode', isDarkMode);
//     document.body.classList.toggle('light-mode', !isDarkMode);
//   }, [isDarkMode]);

//   return (
//     <nav className={`navbar navbar-expand-custom navbar-mainbg ${isDarkMode ? 'dark' : 'light'}`}>
//       <a className="navbar-brand navbar-logo" href="#">
//         <img src={Rikhav_logo} alt="Logo" className="logo-img" />
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <i className="fas fa-bars text-white"></i>
//       </button>
//       <div className="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
//         <ul className="navbar-nav">
//           <div className="hori-selector">
//             <div className="left"></div>
//             <div className="right"></div>
//           </div>
//           <div className="new-navbar">
//             <li className="nav-item active">
//               <Link className="nav-link" to="/">
//                 <i className="navbar-link">Home</i>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 <i className="navbar-link">About</i>
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 <i className="navbar-link">Contact</i>
//               </Link>
//             </li>
//           </div>
//         </ul>

//         {/* Sign In Button */}
//         <button className="btn btn-signin">Sign In</button>

//         {/* Theme Toggle Button */}
//         <div className="btn-toggle-theme" onClick={toggleDarkMode}>
//           {isDarkMode ? <FaSun className="theme-icon-sun" /> : <FaMoon className="theme-icon-moon" />}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// initial theme light mode 

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import $ from 'jquery';
import './Navbar.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import Rikhav_logo from '../../assets/Rikhav_logo.png';

const Navbar = () => {
  // Initialize state for dark mode and default to light mode // <-- CHANGE MADE
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode

  const location = useLocation();

  // Dark mode toggle handler
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Apply or remove the mode class on the body
      document.body.classList.toggle('dark-mode', newMode);
      document.body.classList.toggle('light-mode', !newMode);
      // Save the preference to localStorage
      localStorage.setItem('darkMode', newMode); // <-- CHANGE MADE
      return newMode;
    });
  };

  // Apply light mode on initial render
  useEffect(() => {
    // Ensure body has the correct default mode classes // <-- CHANGE MADE
    document.body.classList.add('light-mode'); // Default to light mode
    document.body.classList.remove('dark-mode');

    // Optionally check saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }
  }, []); // Only run on initial render

  // Adjust navbar selector position based on active tab
  const updateNavSelector = () => {
    const activeItem = $('#navbarSupportedContent').find('.active');
    if (activeItem.length) {
      const height = activeItem.innerHeight();
      const width = activeItem.innerWidth();
      const top = activeItem.position().top;
      const left = activeItem.position().left;
      $('.hori-selector').css({ top, left, height, width });
    }
  };

  useEffect(() => {
    // Update selector position on load
    updateNavSelector();

    // Update selector position on window resize
    $(window).on('resize', () => setTimeout(updateNavSelector, 500));

    // Toggle selector position on navbar item click
    $('#navbarSupportedContent').on('click', 'li', function () {
      $('#navbarSupportedContent ul li').removeClass('active');
      $(this).addClass('active');
      updateNavSelector();
    });

    return () => {
      $(window).off('resize');
      $('#navbarSupportedContent').off('click', 'li');
    };
  }, []);

  useEffect(() => {
    // Set active class based on path
    const currentPath = location.pathname;
    $('#navbarSupportedContent ul li').removeClass('active');
    $(`#navbarSupportedContent ul li a[href="${currentPath}"]`).parent().addClass('active');
    updateNavSelector();
  }, [location.pathname]);

  return (
    <nav className={`navbar navbar-expand-custom navbar-mainbg ${isDarkMode ? 'dark' : 'light'}`}>
      <a className="navbar-brand navbar-logo" href="#">
        <img src={Rikhav_logo} alt="Logo" className="logo-img" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <div className="new-navbar">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <i className="navbar-link">Home</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <i className="navbar-link">About</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i className="navbar-link">Contact</i>
              </Link>
            </li>
          </div>
        </ul>

        {/* Sign In Button */}
        <button className="btn btn-signin">Sign In</button>

        {/* Theme Toggle Button */}
        <div className="btn-toggle-theme" onClick={toggleDarkMode}>
          {/* {isDarkMode ? <FaSun className="theme-icon-sun" /> : <FaMoon className="theme-icon-moon" />} */}
          {isDarkMode ? <FaSun className="theme-icon-moon" /> : <FaMoon className="theme-icon-moon" />}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
