import React, { useEffect, useState } from 'react'
import {Section, SectionContainer, SectionTitle} from './ConverterWidgetElements'
import {DropdownWrapper, Arrdown, Arrup, DropdownBtn, DropdownContent, DropdownItem } from './ConverterWidgetElements'

import axios from 'axios';

const ConverterWidget = () => {
  const [coins, setCoins] = useState([]);
  const [selCoin, setSelCoin] = useState('Bitcoin');
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widgets.coingecko.com/coingecko-coin-converter-widget.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error))
  }, []);

 
  return (
    <Section>
      <SectionContainer>
      <SectionTitle>Coin Converter</SectionTitle>

      <DropdownWrapper>
        <DropdownBtn onClick={(e) => {
                setOpen(!open)
              }}>
          <span>{selCoin}</span>
        {!open ? <Arrdown/> : <Arrup/>}
        </DropdownBtn>
              {open && <DropdownContent>
                { coins.map((coin) => (
                  <DropdownItem onClick={(e) => {
                  setSelCoin(coin.id);
                  setOpen(false);
                }}>  <img src={coin.image} alt='' /> {coin.name}</DropdownItem>
                  ))
                }
              </DropdownContent>
              }
    </DropdownWrapper>

      <coingecko-coin-converter-widget  coin-id={selCoin} currency="usd" background-color="#000d2a" font-color="#b2c6f2" locale="en"></coingecko-coin-converter-widget>
      </SectionContainer>
    </Section>
  )
}

export default ConverterWidget
