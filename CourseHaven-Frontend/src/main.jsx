import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider } from 'react-router'
import router from './routes/AppRoutes.jsx'
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './authProvider/AuthProvider.jsx'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient} >
          <RouterProvider router={router} />
          <Toaster />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
)
