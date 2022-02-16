import React, { useState, useEffect , useContext} from 'react'
import { getDB } from '../firebase.js'
import { collection, doc, getDocs, setDoc, where, query, deleteDoc, updateDoc } from '@firebase/firestore'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import {Context} from './coinMarketsContext';

const PortfolioContext = React.createContext();

const PortfolioContextProvider = ({children}) => {
  const [transactions, setTransactions] = useState([])
  const [firetransactions, setFireTransactions] = useState([])
  const [user, setUser] = useState('')
  const [totBal, setTotBal] = useState(null)
  const [totHodl, setTotHodl] = useState(null)
  const [totHodlPercent, setTotHodlPercent] = useState(null)
  const [totPnl, setTotPnl] = useState(null)
  const [totPnlPercent, setTotPnlPercent] = useState(null)
  
  const {coins} = useContext(Context)

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const currentuser = auth.currentUser
      setUser(currentuser.uid)
    } else {
      console.log('no user detected')
    }
  });
  
    function addTransaction(newTransactions) {
      setTransactions(prevTransactions => [...prevTransactions, newTransactions])
      addTransactionToDb(newTransactions)
    }

    const addTransactionToDb = (newTransactions) => {
        const db = getDB();
        const newTransactionRef = doc(collection(db, "transactions"));

        setDoc(newTransactionRef, {
          transaction: newTransactions,
          user: user,
        }).then(() => fetchTransactions())
      }
   
    function editTransaction(uid, updatedTransaction) {
      const db = getDB();
      const transactionRef = doc(db, 'transactions', uid)
      updateDoc(transactionRef, {
        transaction: updatedTransaction
      })
      fetchTransactions()
    }

    function removeTransaction(index, uid) {
      setTransactions(prevTransactions => prevTransactions.filter
        (transaction => 
          transaction.Index !== index)
          )
       removeTransactionFromDb(uid)
    }

    const removeTransactionFromDb = (id) => {
      const db = getDB();
      deleteDoc(doc(db, 'transactions', id))
      fetchTransactions()
    }

    const fetchTransactions = async () => {
      if(user) {
        const db = getDB();
        const q = query(collection(db, "transactions"), where("user", "==", user))

          try {
            const results = await getDocs(q); 
            let resultTasks = [];
            results.forEach(doc => {
                resultTasks.push({
                    ...doc.data(),
                    uid: doc.id,
                })
            })
          setFireTransactions(resultTasks);
        } catch (e) {
          console.log(e)
        }
      }
    }

    function holdings (symbol, currentPrice) {
      let sumie = []

        firetransactions.filter((each) => {
          if(each.user === user) {
            if(each.transaction.Coin === symbol) {
              if(each.transaction.Type === "Sell") {
                sumie.push(parseFloat(each.transaction.Quantity) * -1)
              } else if (each.transaction.Type === "Buy") {
                sumie.push(parseFloat(each.transaction.Quantity))
              }
            }
          }
        })

        let sum = 0;

        for (let i = 0; i < sumie.length; i++){
          sum += sumie[i];
        }

        let holding = sum.toFixed(2)
        let holdingUsd = (sum * currentPrice).toFixed(2)
        let eachPortChange = 0

         coins.filter(coin => {
           if(coin.symbol === symbol){
            eachPortChange = (holding * coin.price_change_24h);
           }
         })
   
          return [holding, holdingUsd, eachPortChange]
    }

   function profitandloss(symbol, currentPrice){
   let totCostArr = 0;
   let totProceedsArr = 0;
	 let totHoldingsArr = 0;

     firetransactions.filter((each) => {
       if(each.user === user) {
        if(each.transaction.Coin === symbol) {
         if(each.transaction.Type === "Sell") {
          totProceedsArr = totProceedsArr + (Math.abs(each.transaction.Quantity * each.transaction.Price));
          totHoldingsArr = totHoldingsArr + (-Math.abs(each.transaction.Quantity))
        } else {
          totCostArr = totCostArr + Math.abs(each.transaction.Quantity * each.transaction.Price);
          totHoldingsArr = totHoldingsArr + (Math.abs(each.transaction.Quantity));
        }
      }
    }
  })

  let currentValue = currentPrice * totHoldingsArr;
  let pnl = currentValue + totProceedsArr - totCostArr;
  let pnlPercentage = pnl / (totCostArr/100)
  let remainingInitial = totCostArr - totProceedsArr

  return [pnl.toFixed(2), pnlPercentage.toFixed(2), remainingInitial];
   }

    useEffect(() => {
      fetchTransactions()
  }, [user])
  
  let arrrrr = [];
  let arrTotals = 0;
  let portChangeArr = [];
  let totCoinHodl = 0;
  let pnlArr = [];
  let pnlTotals = 0;
  let remainingInitialArr = [];
  let remainingInitialTotals = 0

  useEffect(() => {
    for(let i = 0; i < arrrrr.length; i++){
      arrTotals += Math.abs(arrrrr[i])
    }
    for(let i = 0; i < portChangeArr.length; i++){
      totCoinHodl += Math.abs(portChangeArr[i])
    }
    for(let i = 0; i < pnlArr.length; i++){
      pnlTotals += Math.abs(pnlArr[i])
    }
    for(let i = 0; i < remainingInitialArr.length; i++){
      remainingInitialTotals += Math.abs(remainingInitialArr[i])
    }

    let totalPercent = totCoinHodl / ((arrTotals + totCoinHodl) / 100);
    let totalProfitLossPercent = pnlTotals / (remainingInitialTotals / 100);

    setTotBal(arrTotals)
    setTotHodl(totCoinHodl)
    setTotHodlPercent(totalPercent)
    setTotPnl(pnlTotals)
    setTotPnlPercent(totalProfitLossPercent)
  }, [arrrrr])

  return (
    <PortfolioContext.Provider value={{transactions, firetransactions, fetchTransactions, addTransaction, editTransaction, removeTransaction, holdings, profitandloss, totBal, setTotBal, arrrrr, arrTotals, portChangeArr, totHodl, totHodlPercent, pnlArr, totPnl, totPnlPercent, remainingInitialArr}}>
    {children}
  </PortfolioContext.Provider>
  )
}

export {PortfolioContextProvider, PortfolioContext} 