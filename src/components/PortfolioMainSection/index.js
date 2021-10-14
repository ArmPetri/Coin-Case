import React, {useContext} from 'react'
import {Section, SectionContainer, SectionTitle, Utilities, Cards, AddCoinBtn, SectionTable, TableHead, TableRow, TableH, TableBody} from './PortfolioMainSectionElements'
import Card from '../Card/index'
import PortfolioCoin from '../PortfolioCoin/index'
import {Context} from '../../context/coinMarketsContext'

const PortfolioMainSection = () => {
  const {portfolioCoins} = useContext(Context)
  return (
  <Section>
    <SectionContainer>
      <SectionTitle>Portfolio</SectionTitle>
      <Utilities>
        <Cards>
          <Card title='Total Balance:' value='100' />
          <Card title='24h Portfolio Change:' value='100' percent='10'  />
          <Card title='Total Profit/Loss' value='100' percent='-10' />
        </Cards>
        <Cards>
          <AddCoinBtn>Add New Coin</AddCoinBtn>
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
          {portfolioCoins.map(coin => {
              return (
            <PortfolioCoin key={coin.id} coin={coin} name={coin.name} marketCapRank={coin.market_cap_rank} logo={coin.image} symbol={coin.symbol} price={coin.current_price} priceChange={coin.price_change_percentage_24h} marketCap={coin.market_cap}></PortfolioCoin>
              )
            })}
        </TableBody>
      </SectionTable>
    </SectionContainer>
  </Section>
  )
}

export default PortfolioMainSection
