import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {CoinMarketsContextProvider} from './context/coinMarketsContext'

ReactDOM.render(
  <CoinMarketsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CoinMarketsContextProvider>,
  document.getElementById('root')
);

