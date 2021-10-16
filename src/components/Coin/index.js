import React, {useContext} from 'react'
import {Context} from '../../context/coinMarketsContext';
import StarIcon from '../../images/Star.svg'
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
  PriceChangePositive,
  PriceChangeNegative,
  MarketCap} from './CoinElements'

const Coin = ({coin, 
  marketCapRank,
  logo,
  name,
  symbol,
  price,
  priceChange,
  marketCap}) => {

    const {portfolioCoins, addToPorfolio, removeFromPortfolio, currency} = useContext(Context)

    function starTheIcon() {
      const alreadyInPortfolio = portfolioCoins.some(portfolioCoin => 
        portfolioCoin.id === coin.id,
        )
      if(alreadyInPortfolio) {
        return <Star onClick={()=> {
          removeFromPortfolio(coin.id)}} src={StarIconYellow}></Star>
    } 
        return <Star onClick={()=> {
          addToPorfolio(coin)}} src={StarIcon}></Star>
    }

  return (
    <CoinRow>
      <CoinData>
        {starTheIcon()}
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
        {priceChange > 0 ? (<PriceChangePositive>{priceChange.toFixed(2)}%</PriceChangePositive>) : (<PriceChangeNegative>{priceChange.toFixed(2)}%</PriceChangeNegative>) }
        </CoinData>
        <CoinData>
          <MarketCap>${marketCap.toLocaleString()}</MarketCap>
        </CoinData>
    </CoinRow>
  )
}

export default Coin
