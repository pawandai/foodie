import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter';
import './global.css';
import Auth0Providers from './auth/Auth0Provider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from './components/ui/sonner';

import net from 'net';

const server = net.createServer((socket) => {
  socket.on('error', (error) => {
    console.error('Socket error:', error);
    socket.destroy(); // Destroy the socket on error
  });

  socket.on('data', (data) => {
    // Handle incoming data
    console.log('destroying sucket', data);
  });
});

server.on('clientError', (error, socket) => {
  console.error('Client error:', error);
  socket.destroy();
});

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
          <Toaster visibleToasts={1} position='bottom-center' richColors />
        </Auth0Providers>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
