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

      const Tab = type === "Buy" ? "#44D400" : "#D40044"

      let buytotal = () => {
        return parseFloat((buy.Price * buy.Quantity).toFixed(6));
       }
     
      let selltotal = () => {
        return parseFloat((sell.Price * sell.Quantity).toFixed(6));
       }
       

     let profitandloss = () => {
      return (quantity * currentPrice) - total;
    }

      return (
        <TransactionRow>
          <TransactionData>
            <Type type={Tab}>{type}</Type>
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
            <Cost name="Total">{type === "Buy" ? "$" + buytotal() : "-"}</Cost>
          </TransactionData>
          <TransactionData>
            <Proceeds>{type === "Sell" ? "$" + selltotal() : "-"}</Proceeds>
          </TransactionData>
          <TransactionData>
            <PNL type={type === "Buy" ? (profitandloss() > 0 ? "#44D400" : "#D40044") : ""}>{type === "Buy" ? ((profitandloss() > 0 ? "+" : "-") + "$" + Math.abs(parseFloat(profitandloss().toFixed(2)))) : "-"}</PNL>
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