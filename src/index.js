import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Navbar />
      <App />
      <Footer />
    </React.StrictMode>
);