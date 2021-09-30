import React, {useState, useEffect} from 'react'
import {Section, SectionContainer, SectionTitle, Utilities, CurrencyButton, Dropdown, Arrdown, Arrup, Currency, CurrencySpan, PortfolioLink, PortfolioStar, SectionTable, TableHead, TableRow, TableH, TableBody} from './MainSectionElements'
import StarIconYellow from '../../images/Star_yellow.svg'
import Coin from '../Coin/index'
import axios from 'axios';

const MainSection = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false)
  const [currency, setCurrency] = useState('USD')
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error))
  });

  const filteredCoins = coins.filter(
    coin => coin.name.toLowerCase().includes(search.toLowerCase())
  );

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
          {filteredCoins.map(coin => {
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
