import React from 'react'
import {FooterWrapper,
  FooterContainer,
  Description,
  LinksContainer,
  Title,
  Links,
  Donations,
  CoinName,
  Subscription,
  Form,
  Email,
  Button} from './FooterElements'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Description>
          <p>CryptApp provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalization, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics.</p>
          <p>© 2021 CryptApp. All Rights Reserved.</p>
        </Description>
        <LinksContainer>
          <Title>Crypto App</Title>
          <Links>About Us</Links>
          <Links>Methodology</Links>
          <Links>Careers</Links>
          <Links>Contact Us</Links>
 
        </LinksContainer>
      <Donations>
        <Title>Donations</Title>
        <CoinName>Bitcoin</CoinName>
        <CoinName>Litecoin</CoinName>
        <CoinName>Bitcoin Cash</CoinName>
        <CoinName>Ethereum</CoinName>
      </Donations>
      <Subscription>
        <Title>Interested to stay up-to-date with cryptocurrencies?</Title>
        <p>Get the latest crypto news, updates, and reports by subscribing to our free newsletter.</p>
        <Form>
          <p>Your email address</p>
          <Email type="text" ></Email>
          <Button>Subscribe</Button>
        </Form>
      </Subscription>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
