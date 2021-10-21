import React, {useState, useContext} from 'react';
import {Context} from '../../context/coinMarketsContext';
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
  MarketCap, 
  Holdings, 
  Plus,
  Greater,
  PNL, 
  Transactions,
  Tooltip, 
  TooltipText 
} from './PortfolioCoinElements'

  import PortfolioAddModal from '../PortfolioAddModal'

  import StarIcon from '../../images/Star.svg'
  import StarIconYellow from '../../images/Star_yellow.svg'

const PortfolioCoin = ({
  coin,
  marketCapRank,
  name,
  price,
  logo,
  symbol,
  priceChange,
  marketCap}) => {
    const [whichTooltip, setWhichTooltip] = useState('')
    const {portfolioCoins, addToPorfolio, removeFromPortfolio} = useContext(Context)
    const [whichModal, setWhichModal] = useState('')
    const [showModal, setShowModal] = useState(false)

    const openModal = (e) => {
      setShowModal(prev => !prev)
      setWhichModal(e.target.id)
    }
    
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
    <>
    {whichModal==="addTransaction" && <PortfolioAddModal showModal={showModal} setShowModal={setShowModal} symbol={symbol}></PortfolioAddModal>}
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
          <CurrentPrice>${price}</CurrentPrice>
        </CoinData>
        <CoinData>
          {priceChange > 0 ? (<PriceChangePositive>{priceChange.toFixed(2)}%</PriceChangePositive>) : (<PriceChangeNegative>{priceChange.toFixed(2)}%</PriceChangeNegative>) }
        </CoinData>
        <CoinData>
          <MarketCap>${marketCap.toLocaleString()}</MarketCap>
        </CoinData>
        <CoinData>
          <Holdings>1324124</Holdings>
        </CoinData>
        <CoinData>
          <PNL> - </PNL>
          <Transactions>
            <Tooltip>
            <Plus onClick={openModal} id="addTransaction" 
            onMouseOver={(e) => {
              if(e.target.id === "addTransaction") {
                setWhichTooltip('Add')
                  }
                } 
              }
            onMouseOut={() => setWhichTooltip('')}>
            </Plus>
            { whichTooltip==="Add" && <TooltipText>Add Transaction</TooltipText>}
            </Tooltip>
            <Tooltip>
            <Greater id="viewTransactions"
            onMouseOver={(e) => {
              if(e.target.id==="viewTransactions"){
                setWhichTooltip('View')
                }  
              }
            }
            onMouseOut={() => setWhichTooltip('')}
            >
            </Greater>
            {whichTooltip==='View' && <TooltipText>View Transactions</TooltipText>}
            </Tooltip>


          </Transactions>
        </CoinData>

  
      </CoinRow>
    
      </>
  )
}

export default PortfolioCoin

