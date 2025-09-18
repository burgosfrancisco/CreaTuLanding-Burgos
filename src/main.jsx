import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // ✅ importá esto
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider> {/* ✅ envolvé App */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
