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
  PriceChange,
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

    console.log(portfolioCoins)

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
          <PriceChange>{priceChange}</PriceChange>
        </CoinData>
        <CoinData>
          <MarketCap>{marketCap}</MarketCap>
        </CoinData>
    </CoinRow>
  )
}

export default Coin
