import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./index.css";

import "@fontsource/outfit";
import "@fontsource/roboto";

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { WeatherProvider } from './context/Weather';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
