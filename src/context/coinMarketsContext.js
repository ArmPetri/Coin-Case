import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Context = React.createContext();

const CoinMarketsContextProvider = ({children}) => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error))
  });

  return (
    <Context.Provider value={{coins}}>
      {children}
    </Context.Provider>
  )
}

export {CoinMarketsContextProvider, Context}