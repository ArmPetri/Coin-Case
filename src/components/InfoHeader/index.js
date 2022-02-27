import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {InfoHead, InfoContainer, Stats, DataColor,
  CryptoStyling} from './InfoHeaderElements'

const InfoHeader = () => {
  const [gllDt, setGlDt] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/global')
    .then(res => {
      setGlDt(res.data);
    }).catch(error => console.log(error))
  }, []);

  const {data} = gllDt || {};
  const {active_cryptocurrencies, markets, market_cap_change_percentage_24h_usd, market_cap_percentage} = data || {};
  const {btc, eth, bnb} = market_cap_percentage || {}

  return (
    <InfoHead>
      <InfoContainer>
        <Stats>Total Coins: <DataColor>{active_cryptocurrencies}</DataColor></Stats>
        <Stats>Markets: <DataColor>{markets}</DataColor></Stats>
        <Stats>Market Cap 24h Change: <CryptoStyling type={market_cap_percentage === 0.00 ? "#4C7CE0" : (market_cap_change_percentage_24h_usd > 0 ? "#44D400" : "#D40044")}>{parseFloat(market_cap_change_percentage_24h_usd).toFixed(2)}%</CryptoStyling></Stats>
        <Stats>Market Cap Percentage: </Stats>
          <Stats>
            BTC: <DataColor>{parseFloat(btc).toFixed(2)} % </DataColor>  
          </Stats>
          <Stats>
            ETH: <DataColor>{parseFloat(eth).toFixed(2)}%</DataColor> 
            </Stats>
          <Stats>
            BNB: <DataColor>{parseFloat(bnb).toFixed(2)}%</DataColor> 
          </Stats>
        
      </InfoContainer>
    </InfoHead>
  )
}

export default InfoHeader

