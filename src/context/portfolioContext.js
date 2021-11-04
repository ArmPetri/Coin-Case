import React, { useState } from 'react'

const Context = React.createContext();

const PortfolioContextProvider = ({children}) => {
  const [transactions, setTransactions] = useState([])
 
    function addTransaction(newTransactions) {
      setTransactions(prevTransactions => [...prevTransactions, newTransactions])
    }

    function editTransaction(index, updatedTransaction) {
      setTransactions(prevTransactions => prevTransactions.filter
        (transaction => 
          transaction.Index !== index)
          )
      addTransaction(updatedTransaction)
    }

    function removeTransaction(index) {
      setTransactions(prevTransactions => prevTransactions.filter
        (transaction => 
          transaction.Index !== index)
          )
    }

    console.log(transactions)
  return (
    <Context.Provider value={{transactions, addTransaction, editTransaction, removeTransaction}}>
    {children}
  </Context.Provider>
  )
}

export {PortfolioContextProvider, Context} 
