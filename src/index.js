import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {CoinMarketsContextProvider} from './context/coinMarketsContext'
import {PortfolioContextProvider} from './context/portfolioContext'
import { CoinPageContextProvider } from './context/coinPageContext'

ReactDOM.render(
  <CoinMarketsContextProvider>
    <PortfolioContextProvider>
      <CoinPageContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </CoinPageContextProvider>
    </PortfolioContextProvider>
  </CoinMarketsContextProvider>,
  document.getElementById('root')
);

