import React, { useState } from 'react'

const Context = React.createContext();

const PortfolioContextProvider = ({children}) => {
  const [transactions, setTransactions] = useState([])
 
    function addTransaction(newTransactions) {
      setTransactions(prevTransactions => [...prevTransactions, newTransactions])
    }


    console.log(transactions)
  return (
    <Context.Provider value={{transactions, addTransaction}}>
    {children}
  </Context.Provider>
  )
}

export {PortfolioContextProvider, Context} 
