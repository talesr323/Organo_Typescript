import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// o codigo pode n receber nada, o ! força a dizer para o cod que nunca vai ser nulo
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
