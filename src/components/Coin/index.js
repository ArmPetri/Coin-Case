import React from 'react'
import StarIconYellow from '../../images/Star_yellow.svg'
import {
  CoinRow,
  CoinData,
  Star,
  MarketCapRank,
  CoinLogo,
  Name,
  Symbol,
  CurrentPrice,
  PriceChange,
  MarketCap} from './CoinElements'

const Coin = ({marketCapRank,
  logo,
  name,
  symbol,
  price,
  priceChange,
  marketCap}) => {
  return (
    <CoinRow>
      <CoinData>
          <img src={StarIconYellow} alt="" />
          <MarketCapRank>{marketCapRank}</MarketCapRank>
        </CoinData>
        <CoinData>
          <CoinLogo src={logo}></CoinLogo>
          <Name>{name}</Name>
          <Symbol>{symbol}</Symbol>
        </CoinData>
        <CoinData>
          <CurrentPrice>{price}$</CurrentPrice>
        </CoinData>
        <CoinData>
          <PriceChange>{priceChange}</PriceChange>
        </CoinData>
        <CoinData>
          <MarketCap>{marketCap}</MarketCap>
        </CoinData>
    </CoinRow>
  )
}

export default Coin
