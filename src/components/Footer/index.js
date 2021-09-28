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
          <p>Coincase provides a way to keep track of your profits, losses and portfolio valuation. </p>
          <p>© 2021 Coincase. All Rights Reserved.</p>
        </Description>
        <LinksContainer>
          <Title>Coincase</Title>
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
