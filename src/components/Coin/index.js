import React, {useContext} from 'react'
import {Context} from '../../context/coinMarketsContext';
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

    const {currency} = useContext(Context)

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
          <CurrentPrice>{currency==="usd" ? '$' : '€'} {price}</CurrentPrice>
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
