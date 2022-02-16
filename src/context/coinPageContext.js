import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CoinContext = React.createContext()

const CoinPageContextProvider = ({children}) => {
  const [coinPageCoin, setCoinPageCoin] = useState('bitcoin');
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(false);

 useEffect(() => {
    async function gettingData () {
      setLoading(true)
        const controller = new AbortController();
        let source = axios.CancelToken.source();
        await axios.get(`https://api.coingecko.com/api/v3/coins/${coinPageCoin}`, {
          cancelToken: source.token,
        })
        .then(res => {
        setCoinData(res.data);
        controller.abort()
        setLoading(false)
        }).catch(error => console.log(error))
      }
      gettingData()
  }, [coinPageCoin])



  return (
    <CoinContext.Provider value={{coinPageCoin, setCoinPageCoin, coinData, loading}}>{children}</CoinContext.Provider>
  )
}

export {CoinPageContextProvider, CoinContext}