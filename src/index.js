import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {CoinMarketsContextProvider} from './context/coinMarketsContext'
import {PortfolioContextProvider} from './context/portfolioContext'

ReactDOM.render(
  <CoinMarketsContextProvider>
    <PortfolioContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PortfolioContextProvider>
  </CoinMarketsContextProvider>,
  document.getElementById('root')
);

