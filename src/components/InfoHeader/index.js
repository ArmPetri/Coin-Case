import React from 'react'
import {InfoHead, InfoContainer, Stats} from './InfoHeaderElements'

const InfoHeader = () => {

  return (
    <InfoHead>
      <InfoContainer>
        <Stats>Total Coins: </Stats>
        <Stats>Exchanges:</Stats>
        <Stats>Market Cap: </Stats>
        <Stats>24h Vol:</Stats>
        <Stats>Dominance:</Stats>
      </InfoContainer>
    </InfoHead>
  )
}

export default InfoHeader
