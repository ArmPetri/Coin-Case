import React, {useContext} from 'react'
import { Context } from '../../context/portfolioContext'
import { Overlay, Form, CloseBtn, FormTitle, SectionTable, TableHead, TableRow, TableH, TableBody} from './PortfolioViewModalElements'
import PortfolioTransaction from '../PortfolioTransaction'

const Modal = ({showModal, setShowModal, price, coin}) => {
  const {transactions} = useContext(Context)

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
          {transactions.map((transaction) => {
            return (
              transaction.Coin === coin &&
                <PortfolioTransaction transaction={transaction} index={transaction.Index} coin={transaction.Coin} type={transaction.Type} price={transaction.Price} quantity={transaction.Quantity} total={transaction.Total} currentPrice={price}></
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
  