import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import './global.css';
import Auth0Providers from './auth/Auth0Provider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0Providers>
          <AppRouter />
        </Auth0Providers>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
