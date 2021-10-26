import React from 'react'
import {TransactionRow,
  TransactionData,
  Type,
  Price,
  BuyQuantity,
  SellQuantity,
  Cost,
  Proceeds,
  PNL,
  EditBtn,
  RemoveBtn} from './PortfolioTransactionElements'

  const PortfolioTransaction = ({transaction, coin, type, 
    price,
    quantity,
    total, currentPrice}) => {
      return (
        <TransactionRow>
          <TransactionData>
            <Type>{type}</Type>
          </TransactionData>
          <TransactionData>
            <Price>{price}</Price> 
          </TransactionData>
          <TransactionData>
            {
            type === "Buy" ? 
            (<BuyQuantity>{quantity}</BuyQuantity>) :  
            (<SellQuantity>{quantity}</SellQuantity>)  
          }
          </TransactionData>
          <TransactionData>
            <Cost>{type === "Buy" ? total : "-"}</Cost>
          </TransactionData>
          <TransactionData>
            <Proceeds>{type === "Sell" ? total : "-"}</Proceeds>
          </TransactionData>
          <TransactionData>
            <PNL></PNL>
          </TransactionData>
          <TransactionData>
            <EditBtn></EditBtn>
            <RemoveBtn></RemoveBtn>
          </TransactionData>
        </TransactionRow>
      )
    }

    export default PortfolioTransaction