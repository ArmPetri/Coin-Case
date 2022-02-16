import React, {useState, useContext, useRef, useEffect} from 'react';
import {Context} from '../../context/coinMarketsContext';
import {PortfolioContext} from '../../context/portfolioContext';
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
  import PortfolioViewModal from '../PortfolioViewModal'

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
    const {portfolioCoins, addToPorfolio, removeFromPortfolio, currency} = useContext(Context)
    const {holdings, profitandloss, arrrrr, portChangeArr, pnlArr, remainingInitialArr} = useContext(PortfolioContext)
    const totalBalance = useRef(0)
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

      const theCoin = portfolioCoins.find(portfolioCoin => {
          if(portfolioCoin.id === coin.id){
            return portfolioCoin
          } 
        }
      )
      if(alreadyInPortfolio) {
            return <Star onClick={()=> {
              removeFromPortfolio(theCoin)}} src={StarIconYellow}></Star>
              } 
                return <Star onClick={()=> {
                  addToPorfolio(coin.id)}} src={StarIcon}></Star>
    }

    const [pnl, pnlPercentage, remainingInitial] = profitandloss(symbol, price)
    const [holding, holdingUsd, eachPortChange] = holdings(symbol, price)

    useEffect(() => {
      if(totalBalance.current !== 0) {
        let balanceRef = totalBalance.current.innerHTML
        arrrrr.push(balanceRef.slice(1, balanceRef.indexOf(' ')));
        portChangeArr.push(eachPortChange)
      }
      if(pnl !== 0) {
        pnlArr.push(pnl)
        remainingInitialArr.push(remainingInitial)
      }
    }, [holdings()])

  return (
    <>
    {whichModal==="addTransaction" && <PortfolioAddModal showModal={showModal} setShowModal={setShowModal} symbol={symbol}></PortfolioAddModal>}
    {whichModal==="viewTransactions" && <PortfolioViewModal showModal={showModal} setShowModal={setShowModal} price={price} coin={symbol}></PortfolioViewModal>}
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
          <CurrentPrice>{currency==="usd" ? '$' : '€'}{price}</CurrentPrice>
        </CoinData>
        <CoinData>
          {priceChange > 0 ? (<PriceChangePositive>{priceChange.toFixed(2)}%</PriceChangePositive>) : (<PriceChangeNegative>{priceChange.toFixed(2)}%</PriceChangeNegative>) }
        </CoinData>
        <CoinData>
          <MarketCap>${marketCap.toLocaleString()}</MarketCap>
        </CoinData>
        <CoinData>
          <Holdings ref={totalBalance}>{holdingUsd < 0 ? "-$" + Math.abs(holdingUsd) : "$" + holdingUsd} <br />
          {holding + symbol.toUpperCase()}
            </Holdings>
        </CoinData>
        <CoinData>
        <PNL type={pnl === 0 ? "rgba(178,198,242,0.69)" : pnl > 0 ? "#44D400" : pnl < 0 && "#D40044"}>
            {(pnl > 0 ? "+" : pnl < 0 ? "-" : "") + "$" + Math.abs(pnl)}
            <br />
            {isNaN(pnlPercentage) ? "0.00%" : (pnlPercentage > 0 ? "+" : pnlPercentage < 0 ? "-" : "") + Math.abs(pnlPercentage) + "%"}
            </PNL> 
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
            <Greater onClick={openModal} id="viewTransactions"
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

