import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { getDB } from '../firebase.js'
import { collection, doc, getDocs, setDoc, where, query, deleteDoc, onSnapshot } from '@firebase/firestore'
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const Context = React.createContext();

const CoinMarketsContextProvider = ({children}) => {
  const [coins, setCoins] = useState([]);
  const [portfolioCoins, setPortfolioCoins] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);
  const [currency, setCurrency] = useState('usd');
  const [user, setUser] = useState('');



  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const currentuser = auth.currentUser
      setUser(currentuser.uid)
    } else {
      console.log('no user detected')
    }
  });

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error))
  }, [currency]);

  function whichCurrency(thisCurrency) {
    setCurrency(thisCurrency);
  }

  const addToPorfolio = async(newPortfolioCoin) => {
    setPortfolioList(prevPortfolioList => [...prevPortfolioList, newPortfolioCoin])
    await addCoinToDb(newPortfolioCoin)
  }
  
  const addCoinToDb = async(newPortfolioCoin) => {
    const db = getDB();
    const newCoinRef = doc(collection(db, "portfoliocoins"));
  
    await setDoc(newCoinRef, {
      id: newPortfolioCoin,
      user: user,
    }).then(() => {
      fetchPortfolioCoins();
      }
    )
  }

  const removeFromPortfolio = async(coin) => {
    await removeCoinFromDb(coin.uid)
  }


  const removeCoinFromDb = async(id) => {
    const db = getDB();
    const coinDoc = doc(db, "portfoliocoins", id)
    
    await deleteDoc(coinDoc)
    fetchPortfolioCoins()
  };

  const fetchPortfolioCoins = async () => {
    if(user) {
      const db = getDB();
      const q = query(collection(db, "portfoliocoins"), where("user", "==", user))
      const results = await getDocs(q); 
          
      setPortfolioCoins(results.docs.map(doc => ({...doc.data(), uid: doc.id})
        )
      )
    }
  }

  useEffect(() => {
    fetchPortfolioCoins()
  }, [user])

  return (
    <Context.Provider value={{coins, portfolioCoins, portfolioList, setPortfolioList, addToPorfolio, removeFromPortfolio, whichCurrency, currency}}>
      {children}
    </Context.Provider>
  )
}

export {CoinMarketsContextProvider, Context}