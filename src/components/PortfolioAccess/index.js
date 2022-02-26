import React, {useContext} from 'react'
import {SectionContainer,
  LeftWrapper,
  SectionTitle,
  SectionSubTitle,
  BtnWrap,
  SignupBtn,
  LoginBtn,
  RightWrapper,
  PortfolioImage} from './PortfolioAccessElements'
import { useMediaQuery } from 'react-responsive'
import portfolioImage from '../../images/CryptoPortfolio.png'
import portfolioImageTablet from '../../images/CryptoPortfolio_tablet.png'
import {UserContext} from '../../context/userDataContext';

const PortfolioAccess = () => {
  const {openModal} = useContext(UserContext)
  const isTablet = useMediaQuery({ query: '(max-width: 991px)' })

  return (
    <SectionContainer>
      <LeftWrapper>
        <SectionTitle>Free Crypto Portfolio Tracker</SectionTitle>
        <SectionSubTitle>Track your crypto earning with out easy-to-use portfolio tracker</SectionSubTitle>
        <SectionSubTitle>Start your portfolio now!</SectionSubTitle>
        <BtnWrap>
          <SignupBtn onClick={openModal} name="signup">Sign Up</SignupBtn>
          <LoginBtn onClick={openModal} name="login">Login</LoginBtn>
        </BtnWrap>
      </LeftWrapper>
      <RightWrapper>
        <PortfolioImage src={isTablet ? portfolioImageTablet : portfolioImage}/>
      </RightWrapper>
    </SectionContainer>
  )
}

export default PortfolioAccess
