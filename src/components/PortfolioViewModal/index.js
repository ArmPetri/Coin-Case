import React from 'react'
import { Transactions } from '../PortfolioCoin/PortfolioCoinElements'
import { Overlay, Form, CloseBtn, FormTitle, SectionTable, TableHead, TableRow, TableH, TableBody} from './PortfolioViewModalElements'

const Modal = ({showModal, setShowModal, price, coin}) => {
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
  