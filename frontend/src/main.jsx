// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router } from 'react-router-dom'; // Import Router here
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//         <Router> {/* Wrap the app in Router so routes work globally */}
//       <App />
//     </Router>

    
//   </StrictMode>,
// )

// // below for drk mode 

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router here
import { ThemeProvider } from '../src/context/ThemeContext.jsx'; // Import ThemeProvider here
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Wrap the app in Router so routes work globally */}
      <ThemeProvider> {/* Wrap your app in ThemeProvider */}
        <App />
      </ThemeProvider>
    </Router>
  </StrictMode>
);
