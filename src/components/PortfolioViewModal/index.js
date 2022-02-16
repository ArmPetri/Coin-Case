import React, {useContext} from 'react'
import {PortfolioContext} from '../../context/portfolioContext';
import { Overlay, Form, CloseBtn, FormTitle, SectionTable, TableHead, TableRow, TableH, TableBody} from './PortfolioViewModalElements'
import PortfolioTransaction from '../PortfolioTransaction'

const Modal = ({showModal, setShowModal, price, coin}) => {
  const {firetransactions} = useContext(PortfolioContext)

    return (
      <>
      {showModal ? (
           <Overlay >
        <Form>
          <CloseBtn src={CloseBtn} onClick={() => setShowModal(prev => !prev)}></CloseBtn>
          <FormTitle> {coin.toUpperCase()} Transactions</FormTitle>
  
          <SectionTable>
          <TableHead>
            <TableRow>
              <TableH>Type</TableH>
              <TableH>Price</TableH>
              <TableH>Quantity</TableH>
              <TableH>Cost</TableH>
              <TableH>Proceeds</TableH>
              <TableH>PNL</TableH>
              <TableH>Action</TableH>
            </TableRow>
          </TableHead>
          <TableBody >
          {firetransactions.map((transaction) => {
            return (
              transaction.transaction.Coin === coin &&
                <PortfolioTransaction transaction={transaction.transaction} uid={transaction.uid} index={transaction.transaction.Index} coin={transaction.transaction.Coin} type={transaction.transaction.Type} price={transaction.transaction.Price} quantity={transaction.transaction.Quantity} total={transaction.transaction.Total} currentPrice={price}></
               PortfolioTransaction> 
            )
          })}
          </TableBody>
        </SectionTable>
        </Form>
      </Overlay>
      )
    : null }
      </>
    )
  }
  
  export default Modal
  