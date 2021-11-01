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
      const [buy, setBuy] = useState({
        Price: price,
        Quantity: quantity,
        Total: total
      })
      const [sell, setSell] = useState({
        Price: price,
        Quantity: quantity,
        Total: total
      })
      const { removeTransaction } = useContext(Context)

      function editing() {
        setEnabled(!enabled)
      }

      const handleChange = (e) => {
        let {name, value} = e.target;
  
        setBuy({...buy, [name]:value})
        setSell({...sell, [name]:value})
      }

      return (
        <TransactionRow>
          <TransactionData>
            <Type>{type}</Type>
          </TransactionData>
          <TransactionData>
          {
            !enabled ? <Price name="Price" disabled value={buy.Price}></Price> : <Price name="Price" type="number" onChange={handleChange} value={buy.Price}></Price>
          }
          </TransactionData>
          <TransactionData>
          {
            !enabled ?
            type === "Buy" ? 
            (<BuyQuantity name="Quantity" disabled value={"+" + buy.Quantity}></BuyQuantity>) :  
            (<SellQuantity name="Quantity" disabled value={"-" + sell.Quantity}></SellQuantity>)  
            :
            enabled &&
            type === "Buy" ? 
            (<BuyQuantity name="Quantity" type="number" onChange={handleChange} value={buy.Quantity}></BuyQuantity>) :  
            (<SellQuantity name="Quantity" type="number" onChange={handleChange} value={sell.Quantity}></SellQuantity>)  
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