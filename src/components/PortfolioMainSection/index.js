import React, {useContext, useState, useEffect} from 'react'

import {Section, SectionContainer, SectionTitle, Utilities, Cards, SectionTable, TableHead, TableRow, TableH, TableBody} from './PortfolioMainSectionElements'
import Card from '../Card/index'
import PortfolioAccess from '../PortfolioAccess/index'
import PortfolioCoin from '../PortfolioCoin/index'
import {Context} from '../../context/coinMarketsContext'
import {PortfolioContext} from '../../context/portfolioContext'
import { getAuth, onAuthStateChanged} from "firebase/auth";

const PortfolioMainSection = () => {
  const [access, setAccess] = useState(false)
  const [starred, setStarred] = useState([])
  const {coins, portfolioCoins} = useContext(Context)
  const {totBal, totHodl, totHodlPercent, totPnl, totPnlPercent} = useContext(PortfolioContext)

  const auth = getAuth();
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAccess(true)
    } else {
      setAccess(false)
    }
  });

  useEffect(() => {
    leftovers()
  }, [portfolioCoins])

  let leftovers = () => {
    let arr = [];
    portfolioCoins.forEach(element => {
      coins.map(coin => {
        if(element.id === coin.id) {
            arr.push(coin)
        }
      })
  setStarred(arr)
    })
  }

  return (
  <Section>
    { !access && <PortfolioAccess/>}
    {
      access && 
      <SectionContainer>
        <SectionTitle>Portfolio</SectionTitle>
        <Utilities>
          <Cards>
            <Card title='Total Balance:' value={totBal.toFixed(2)} />
            <Card title='24h Portfolio Change:' value={totHodl.toFixed(2)} percent={totHodlPercent.toFixed(2)}  />
            <Card title='Total Profit/Loss' value={totPnl.toFixed(2)} percent={totPnlPercent.toFixed(2)} />
          </Cards>
        </Utilities>
        <SectionTable>
          <TableHead>
            <TableRow>
              <TableH>#</TableH>
              <TableH>Coin</TableH>
              <TableH>Price</TableH>
              <TableH>24h</TableH>
              <TableH>Market Cap</TableH>
              <TableH>Holdings</TableH>
              <TableH>PNL</TableH>
            </TableRow>
          </TableHead>
          <TableBody >
            {
              starred.map(star => {
                return (
                  <PortfolioCoin key={star.id} coin={star} name={star.name} marketCapRank={star.market_cap_rank} logo={star.image} symbol={star.symbol} price={star.current_price} priceChange={star.price_change_percentage_24h} marketCap={star.market_cap}></PortfolioCoin>
                )
              })
            }
          </TableBody>
        </SectionTable>
      </SectionContainer>
    }  
  </Section>
  )
}

export default PortfolioMainSection
