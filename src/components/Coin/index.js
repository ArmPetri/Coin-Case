import React from 'react'
import StarIconYellow from '../../images/Star_yellow.svg'
import {
  CoinRow,
  CoinData,
  MarketCapRank,
  CoinLogo,
  Name,
  Symbol,
  CurrentPrice,
  MarketCap} from './CoinElements'

const Coin = () => {
  return (
    <CoinRow>
      <CoinData>
          <img src={StarIconYellow} alt="" />
          <MarketCapRank>1</MarketCapRank>
        </CoinData>
        <CoinData>
          <CoinLogo></CoinLogo>
          <Name>BTC</Name>
          <Symbol>btc</Symbol>
        </CoinData>
        <CoinData>
          <CurrentPrice>1$</CurrentPrice>
        </CoinData>
        <CoinData>
        </CoinData>
        <CoinData>
          <MarketCap>12000$</MarketCap>
        </CoinData>
    </CoinRow>
  )
}

export default Coin
