// Router.js
import React, { useState, useEffect } from 'react';
// @ts-ignore
import Product from 'product/Product';

export const Router = () => {
  const [currentApp, setCurrentApp] = useState<any>(null);

  useEffect(() => {
    const handleRouteChange = () => {
      const firstSegment = window.location.pathname.split('/')[1];
      switch (firstSegment) {
        case 'product':
          setCurrentApp(<Product />);
          break;
        default:
          setCurrentApp(
            <div>
              <h1>Shell 🐚</h1>
              <p>Shell is the Accuris Platform client side browser runtime.</p>
              <p>Responsible for:</p>
              <ol>
                <li>Authentication</li>
                <li>Authorization</li>
                <li>Event Bus</li>
                <li>Analytics</li>
                <li>HTTP Client</li>
                <li>Central Caches</li>
              </ol>
            </div>,
          );
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange(); // Initial load

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div>
      <nav>
        <a href="/">Shell Home</a>
        <a href="/product">Product</a>
      </nav>
      {currentApp}
    </div>
  );
};
