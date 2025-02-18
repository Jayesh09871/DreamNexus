import React from 'react';
import App from './App.jsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
    <App />
  </Router>
  </StrictMode>
)
