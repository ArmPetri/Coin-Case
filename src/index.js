import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {CoinMarketsContextProvider} from './context/coinMarketsContext'
import {PortfolioContextProvider} from './context/portfolioContext'
import { CoinPageContextProvider } from './context/coinPageContext'
import {UserDataContextProvider} from './context/userDataContext'
import { HamburgerContextProvider } from './context/hamburgerContext'

ReactDOM.render(
  <CoinMarketsContextProvider>
    <UserDataContextProvider>
      <PortfolioContextProvider>
        <CoinPageContextProvider>
        <HamburgerContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        </HamburgerContextProvider>
        </CoinPageContextProvider>      
      </PortfolioContextProvider>
    </UserDataContextProvider>
  </CoinMarketsContextProvider>,
  document.getElementById('root')
);

