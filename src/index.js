import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './App-main.css';
import { AlertBanner } from './Components';


ReactDOM.render(
    <BrowserRouter>
    <AlertBanner />
<App />
</BrowserRouter>
, document.getElementById('root'));
reportWebVitals();