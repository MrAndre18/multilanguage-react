import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';

import './API/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Suspense fallback='loading'>
    <App />
  </React.Suspense>
);
