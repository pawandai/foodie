import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import './global.css';
import Auth0Providers from './auth/Auth0Provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0Providers>
        <AppRouter />
      </Auth0Providers>
    </Router>
  </React.StrictMode>
);
