import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Context = React.createContext();

const CoinMarketsContextProvider = ({children}) => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState('usd')
  const [portfolioCoins, setPortfolioCoins] = useState([])

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error))
  }, [currency]);

  function whichCurrency(thisCurrency) {
    setCurrency(thisCurrency);
  }

  function addToPorfolio(newPortfolioCoin) {
    setPortfolioCoins(prevPortfolioCoins => [...prevPortfolioCoins, newPortfolioCoin])
  }
  
  function removeFromPortfolio(id) {
    setPortfolioCoins(prevPortfolioCoins => prevPortfolioCoins.filter(portfolioCoin => 
      portfolioCoin.id !== id))
  }

  return (
    <Context.Provider value={{coins, portfolioCoins, addToPorfolio, removeFromPortfolio, whichCurrency, currency}}>
      {children}
    </Context.Provider>
  )
}

export {CoinMarketsContextProvider, Context}