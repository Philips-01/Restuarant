import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Classwork from './Classwork';
// import Grocery from './Grocery';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
// import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
