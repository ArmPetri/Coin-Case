import React, {useState} from 'react';
import {
  CoinRow,
  CoinData,
  MarketCapRank,
  CoinLogo,
  Name,
  Symbol,
  CurrentPrice,
  MarketCap, 
  Holdings, 
  Plus,
  Greater,
  PNL, 
  Transactions,
  Tooltip, 
  TooltipText 
} from './PortfolioCoinElements'

  import StarIcon from '../../images/Star.svg'
  import StarIconYellow from '../../images/Star_yellow.svg'

const PortfolioCoin = ({
  marketCapRank,
  name,
  price,
  logo,
  symbol,
  priceChange,
  marketCap}) => {
    const [whichTooltip, setWhichTooltip] = useState('')

  return (
    <>
      <CoinRow>
        <CoinData>
          <img src={StarIconYellow} alt="" />
          <MarketCapRank>{marketCapRank}</MarketCapRank>
        </CoinData>
        <CoinData>
          <CoinLogo></CoinLogo>
          <Name>{name}</Name>
          <Symbol>{symbol}</Symbol>
        </CoinData>
        <CoinData>
          <CurrentPrice>${price}</CurrentPrice>
        </CoinData>
        <CoinData>
          {priceChange}
        </CoinData>
        <CoinData>
          <MarketCap>{marketCap}</MarketCap>
        </CoinData>
        <CoinData>
          <Holdings>1324124</Holdings>
        </CoinData>
        <CoinData>
          <PNL> - </PNL>
          <Transactions>
            <Tooltip>
            <Plus id="addTransaction" 
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

