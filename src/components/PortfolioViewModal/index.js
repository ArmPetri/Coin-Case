import React, {useContext} from 'react'
import {PortfolioContext} from '../../context/portfolioContext';
import { Overlay, Form, CloseBtn, FormTitle, SectionTable, TableHead, TableRow, TableH, TableBody} from './PortfolioViewModalElements'
import PortfolioTransaction from '../PortfolioTransaction'
import { useMediaQuery } from 'react-responsive'
import { HamburgerContext } from '../../context/hamburgerContext'

const Modal = ({showModal, setShowModal, price, coin}) => {
  const {firetransactions} = useContext(PortfolioContext)
  const {setModalOpen} = useContext(HamburgerContext)
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' })

    return (
      <>
      {showModal ? (
        <Overlay >
          <Form>
            <CloseBtn onClick={() => {
              setModalOpen(false)
              setShowModal(prev => !prev)
            }
            }>X</CloseBtn>
            <FormTitle> {coin.toUpperCase()} Transactions</FormTitle>
            <SectionTable>
              <TableHead>
                <TableRow>
                  <TableH>Type</TableH>
                  <TableH>Price</TableH>
                  <TableH>{isMobile ? "Qty" : "Quantity"}</TableH>
                  <TableH>Cost</TableH>
                  <TableH>{ isMobile ? "Gain" : "Proceeds"}</TableH>
                  <TableH>PNL</TableH>
                  <TableH>Action</TableH>
                </TableRow>
              </TableHead>
              <TableBody>
                {firetransactions.map((transaction) => {
                  return (
                    transaction.transaction.Coin === coin &&
                      <PortfolioTransaction transaction={transaction.transaction} uid={transaction.uid} index={transaction.transaction.Index} coin={transaction.transaction.Coin} type={transaction.transaction.Type} price={transaction.transaction.Price} quantity={transaction.transaction.Quantity} total={transaction.transaction.Total} currentPrice={price}></PortfolioTransaction> 
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
  