import React, { useState, useContext } from 'react'
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
  DoneBtn,
  RemoveBtn} from './PortfolioTransactionElements'

  import {Context} from '../../context/portfolioContext';

  const PortfolioTransaction = ({transaction, index, coin, type, 
    price,
    quantity,
    total, currentPrice}) => {
      const [enabled, setEnabled] = useState(false)
      const { removeTransaction } = useContext(Context)

      function editing() {
        setEnabled(!enabled)
      }

      return (
        <TransactionRow>
          <TransactionData>
            <Type>{type}</Type>
          </TransactionData>
          <TransactionData>
          {!enabled ? <Price name="Price" disabled value={price}></Price> : <Price name="Price" type="number" value={price}></Price>}
          </TransactionData>
          <TransactionData>
          {
            !enabled ?
            type === "Buy" ? 
            (<BuyQuantity name="Quantity" disabled value={"+" + quantity}></BuyQuantity>) :  
            (<SellQuantity name="Quantity" disabled value={"-" + quantity}></SellQuantity>)  
            :
            enabled &&
            type === "Buy" ? 
            (<BuyQuantity name="Quantity" type="number"  value={quantity}></BuyQuantity>) :  
            (<SellQuantity name="Quantity" type="number" value={quantity}></SellQuantity>)  
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
          {enabled && <DoneBtn onClick={() => editing()}></DoneBtn>}
        {!enabled && <EditBtn onClick={() => setEnabled(!enabled)}></EditBtn>}
            <RemoveBtn onClick={() => removeTransaction(index)}></RemoveBtn>
          </TransactionData>
        </TransactionRow>
      )
    }

    export default PortfolioTransaction