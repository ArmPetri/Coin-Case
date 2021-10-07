import React, {useState, useContext} from 'react'
import {Section, SectionContainer, SectionTitle, Utilities, CurrencyButton, Dropdown, Arrdown, Arrup, Currency, CurrencySpan, PortfolioLink, PortfolioStar, SectionTable, TableHead, TableRow, TableH, TableBody} from './MainSectionElements'
import StarIconYellow from '../../images/Star_yellow.svg'
import Coin from '../Coin/index'

import {Context} from '../../context/coinMarketsContext'


const MainSection = () => {
  const [open, setOpen] = useState(false)
  const [currency, setCurrency] = useState('USD')

  const {coins} = useContext(Context)

  return (
    <Section>
      <SectionContainer>
        <SectionTitle>Cryptocurrency Prices by Market Cap</SectionTitle>
        <Utilities>
          <CurrencyButton>
            <Currency onClick={() => {
                setOpen(!open)
              }}>
                <span>{currency}</span>
                {!open ? <Arrdown/> : <Arrup/>}
            </Currency>
            {open && <Dropdown>
              <CurrencySpan onClick = {() => setCurrency('USD')}>USD</CurrencySpan>
              <CurrencySpan onClick = {() => setCurrency('EUR')}>EUR</CurrencySpan>
            </Dropdown>}
          </CurrencyButton>
          <PortfolioLink>
            <PortfolioStar src={StarIconYellow}></PortfolioStar>
              Portfolio
          </PortfolioLink>
        </Utilities>
        <SectionTable>
          <TableHead>
            <TableRow>
              <TableH>#</TableH>
              <TableH>Coin</TableH>
              <TableH>Price</TableH>
              <TableH>24h</TableH>
              <TableH>Market Cap</TableH>
            </TableRow>
          </TableHead>
          <TableBody>
          {coins.map(coin => {
            return (
              <Coin key={coin.id} coin={coin} name={coin.name} marketCapRank={coin.market_cap_rank} logo={coin.image} symbol={coin.symbol} price={coin.current_price} priceChange={coin.price_change_percentage_24h} marketCap={coin.market_cap}></Coin>
            )
          })}
          </TableBody>
        </SectionTable>
      </SectionContainer>
    </Section>
  )
}

export default MainSection
