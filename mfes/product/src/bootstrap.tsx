import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Product />
    </React.StrictMode>,
  );
}
