import { BrowserRouter } from 'react-router-dom';
import React, { StrictMode } from 'react'; // Ensure React is imported
import ReactDOM from 'react-dom/client'; // Correct import for ReactDOM
import './index.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);