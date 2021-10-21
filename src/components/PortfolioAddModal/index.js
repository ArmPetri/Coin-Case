import React, {useContext, useState, useEffect} from 'react'
import {Context} from '../../context/portfolioContext';
import { Overlay, Form, CloseBtn, FormTitle, FormLabel, FormInput, SubmitBtn, Tab, TabName, CancelBtn, BtnWrap, CoinSymbol, CoinQuantity, QuantityInput} from './PortfolioAddModalElements'


const Modal = ({showModal, setShowModal, symbol}) => {
  const [tab, setTab] = useState('Buy');
  const [buy, setBuy] = useState({
    Coin: '',
    Type: '',
    Price: '',
    Quantity: '',
    Total: 0
  })

  const {addTransaction} = useContext(Context)

  const buyTab = tab==='Buy'
  const sellTab = tab==='Sell'

  let buytotal = () => {
   return parseFloat((buy.Price * buy.Quantity).toFixed(6));
  }

useEffect(() => {
  setBuy({...buy, Total: buytotal()})
}, [buy.Price, buy.Quantity, buy.Total])

  const handleChange = (e) => {
    let {name, value} = e.target;

          buyTab && setBuy({...buy, Coin:symbol, Type:tab, [name]:value, Total: buytotal() })
        }
                            
  function handleSubmit(e){
    e.preventDefault();
    
    if(buyTab) {
      addTransaction(buy);
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
        <h3>Under Construction</h3>
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
