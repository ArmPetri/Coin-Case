import React, {useState} from 'react'
import {Section, SectionContainer, SectionTitle, Utilities, CurrencyButton, Dropdown, Arrdown, Arrup, Currency, CurrencySpan, PortfolioLink, PortfolioStar, SectionTable, TableHead, TableRow, TableH, TableBody} from './MainSectionElements'
import StarIconYellow from '../../images/Star_yellow.svg'
import Coin from '../Coin/index'

const MainSection = () => {
  const [open, setOpen] = useState(false)
  const [currency, setCurrency] = useState('USD')

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
            <Coin></Coin>
          </TableBody>
        </SectionTable>
      </SectionContainer>
    </Section>
  )
}

export default MainSection
