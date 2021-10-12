import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Context = React.createContext();

const CoinMarketsContextProvider = ({children}) => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState('usd')

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error))
  }, [currency]);

  function whichCurrency(thisCurrency) {
    setCurrency(thisCurrency);
  }

  return (
    <Context.Provider value={{coins, whichCurrency, currency}}>
      {children}
    </Context.Provider>
  )
}

export {CoinMarketsContextProvider, Context}