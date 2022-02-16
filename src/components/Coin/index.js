import React, {useContext} from 'react'
import {Context} from '../../context/coinMarketsContext';
import {UserContext} from '../../context/userDataContext'
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
  
  import StarIcon from '../../images/Star.svg'
  import StarIconYellow from '../../images/Star_yellow.svg'

const Coin = ({coin, 
  marketCapRank,
  logo,
  name,
  symbol,
  price,
  priceChange,
  marketCap}) => {

    const {portfolioCoins, addToPorfolio, removeFromPortfolio, currency} = useContext(Context)
    const {isLoggedIn, setShowModal} = useContext(UserContext)

    function starTheIcon() {
      const alreadyInPortfolio = portfolioCoins.some(portfolioCoin => 
        portfolioCoin.id === coin.id,
      )

      const theCoin = portfolioCoins.find(portfolioCoin => {
        if(portfolioCoin.id === coin.id){
          return portfolioCoin
        } 
      }
    )

      if(alreadyInPortfolio) {
        return <Star onClick={(e)=> {
          e.target.src = StarIcon
          removeFromPortfolio(theCoin)}} src={StarIconYellow}></Star>
      }
        return <Star onClick={(e)=> {
          e.target.src = StarIconYellow
          addToPorfolio(coin.id)
      }} src={StarIcon}></Star> 
    }

  return (
    <CoinRow>
      <CoinData>
        {isLoggedIn ? starTheIcon() : <Star onClick={() =>  setShowModal(true)} src={StarIcon}></Star> }
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
