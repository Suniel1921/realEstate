// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { AuthProvider } from './context/AuthContext.jsx'
// import { SearchProvider } from './context/SearchContext.jsx'
// import { CategoryProvider } from './context/CategoryContext.jsx'



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <CategoryProvider>

//     <SearchProvider>
//     <AuthProvider>
//     <App />
//     </AuthProvider>
//     </SearchProvider>

//     </CategoryProvider>
//   </React.StrictMode>,
// )



import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import { CategoryProvider } from './context/CategoryContext.jsx';
import { CategoryPurposeProvider } from './context/CategoryPurposeContext.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CategoryProvider>
      <CategoryPurposeProvider>
        <SearchProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </SearchProvider>
      </CategoryPurposeProvider>
    </CategoryProvider>
  </React.StrictMode>
);
