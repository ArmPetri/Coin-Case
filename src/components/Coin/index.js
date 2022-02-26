import React, {useContext, useState} from 'react'
import {Context} from '../../context/coinMarketsContext';
import {UserContext} from '../../context/userDataContext'
import { useMediaQuery } from 'react-responsive'
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
  const [short, setShort] = useState(true)
  const [long, setLong] = useState(false)

  const {portfolioCoins, addToPorfolio, removeFromPortfolio, currency} = useContext(Context)
  const {isLoggedIn, setShowModal} = useContext(UserContext)

  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })

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
          {
          isMobile ?
            <Symbol onMouseOver={() => setShort(false)} onMouseLeave={() => setShort(true)} zIndex={!short && '1'} shade={!short && 'white'}>{symbol.length <= 5 ? symbol : (short ? symbol.substring(0,4) + '...' : symbol) }</Symbol> :
            <Symbol>{symbol}</Symbol>
          }
        </CoinData>
        <CoinData>
          {
          isMobile ? 
          <CurrentPrice onMouseOver={() => setLong(true)} onMouseLeave={() => setLong(false)} zIndex={long && '1'} shade={long && 'white'}>{currency==="usd" ? '$' : '€'}{price.toString().length <= 5 ? price : (long ? price : price.toString().substring(0,5) + '...')}</CurrentPrice> :
          <CurrentPrice>{currency==="usd" ? '$' : '€'}{price}</CurrentPrice>
        }
        </CoinData>
        <CoinData>
          {
          priceChange > 0 ? (<PriceChangePositive>{parseFloat(priceChange).toFixed(2)}%</PriceChangePositive>) : (<PriceChangeNegative>{parseFloat(priceChange).toFixed(2)}%</PriceChangeNegative>) 
          }
        </CoinData>
        <CoinData>
          <MarketCap>${marketCap.toLocaleString()}</MarketCap>
        </CoinData>
      </CoinRow>
  )
}

export default Coin
