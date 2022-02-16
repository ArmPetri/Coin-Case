import React from 'react'
import {CardWrapper, CardTitle, CardValue, ValuePercentagePositive, ValuePercentageNegative} from './CardElements'

const Card = ({title, value, percent}) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardValue>${value}  {percent && (isNaN(percent) ? "0.00%" : (percent > 0 ? (<ValuePercentagePositive>(+{percent}%)</ValuePercentagePositive>) : (<ValuePercentageNegative>({percent}%)</ValuePercentageNegative>)))
      }
      </CardValue>
    </CardWrapper>
  )
}

export default Card