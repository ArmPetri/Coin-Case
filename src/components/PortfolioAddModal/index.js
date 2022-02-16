import React, {useContext, useState, useEffect} from 'react'
import {PortfolioContext} from '../../context/portfolioContext';
import { Overlay, Form, CloseBtn, FormTitle, FormLabel, FormInput, SubmitBtn, Tab, TabName, CancelBtn, BtnWrap, CoinSymbol, CoinQuantity, QuantityInput} from './PortfolioAddModalElements'


const Modal = ({showModal, setShowModal, symbol}) => {
  const [tab, setTab] = useState('Buy');
  const [buy, setBuy] = useState({
    Index: Math.random()*100,
    Coin: '',
    Type: '',
    Price: '',
    Quantity: '',
    Total: 0
  })
  const [sell, setSell] = useState({
    Index: Math.random()*100,
    Coin: '',
    Type: '',
    Price: '',
    Quantity: '',
    Total: 0
  })

  const {addTransaction} = useContext(PortfolioContext)

  const buyTab = tab==='Buy'
  const sellTab = tab==='Sell'

  let buytotal = () => {
   return parseFloat((buy.Price * buy.Quantity).toFixed(6));
  }

  let selltotal = () => {
    return parseFloat((sell.Price * sell.Quantity).toFixed(6));
   }

useEffect(() => {
  setBuy({...buy, Total: buytotal()})
}, [buy.Price, buy.Quantity, buy.Total])

useEffect(() => {
  setSell({...sell, Total: selltotal()})
}, [sell.Price, sell.Quantity, sell.Total])


  const handleChange = (e) => {
    let {name, value} = e.target;

          buyTab && setBuy({...buy, Coin:symbol, Type:tab, [name]:value, Total: buytotal() })
          sellTab && setSell({...sell, Coin:symbol, Type:tab, [name]:value, Total: selltotal() })
        }
                            
  function handleSubmit(e){
    e.preventDefault();
    
    if(buyTab) {
       setBuy({...buy, Index: Math.random(Date.now() + buy.Index+1)*100})
      addTransaction(buy);
    } else {
      setSell({...sell, Index: Math.random(Date.now() + sell.Index+2)*100})
      addTransaction(sell);
    }
  }

  return (
    <>
    {showModal ? (
         <Overlay >
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <CloseBtn src={CloseBtn} onClick={() => setShowModal(prev => !prev)}></CloseBtn>
        <FormTitle>Add Transaction</FormTitle>
        <Tab>
          <TabName onClick={() => setTab(() => 'Buy')} active={tab==='Buy'}>Buy</TabName>
          <TabName onClick={() => setTab(() => 'Sell')} active={tab === 'Sell'}>Sell</TabName>
        </Tab>
        
        {buyTab && <>
        <FormLabel>Price Per Coin<FormInput type='number' name='Price' value={buy.Price} onChange={handleChange}></FormInput></FormLabel>
        <FormLabel>Quantity 
          <CoinQuantity>
        <QuantityInput type='number' name='Quantity' value={buy.Quantity} onChange={handleChange}></QuantityInput><CoinSymbol>{symbol}</CoinSymbol></CoinQuantity> </FormLabel>
        <FormLabel>Total Spent <FormInput readOnly type='number' className="grey"  name='Total' value={buytotal()}></FormInput></FormLabel> 
        </>
        }
        {sellTab && 
          <>
            <FormLabel>Price Per Coin<FormInput type='number' name='Price' placeholder='0' value={sell.Price} onChange={handleChange}></FormInput></FormLabel>
            <FormLabel>Quantity
              <CoinQuantity>
              <QuantityInput type='number' name='Quantity' placeholder="0" value={sell.Quantity} onChange={handleChange}></QuantityInput><CoinSymbol>{symbol}</CoinSymbol></CoinQuantity></FormLabel>
            <FormLabel>Total Received<FormInput disabled type='number' className="grey"  name='Total' placeholder='0' value={selltotal()} onChange={handleChange}></FormInput></FormLabel> 
          </>
        }
        <BtnWrap>
          <CancelBtn onClick={() => setShowModal(prev => !prev)}>Cancel</CancelBtn>
          <SubmitBtn type="submit"></SubmitBtn>
        </BtnWrap>
       
      </Form>``
    </Overlay>
    )
  : null }
    </>
  )
}

export default Modal
