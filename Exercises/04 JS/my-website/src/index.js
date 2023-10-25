import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyWebsite from './MyWebsite';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyWebsite />
  </React.StrictMode>
);

reportWebVitals();
