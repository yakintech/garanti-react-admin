import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FavoritesProvider } from './context/FavoritesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </QueryClientProvider>

);

