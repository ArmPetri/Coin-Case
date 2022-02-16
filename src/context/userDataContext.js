import React, {useState} from 'react'
const UserContext = React.createContext();

const UserDataContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [whichModal, setWhichModal] = useState('')
 
  function logUserIn() {
    setIsLoggedIn(!isLoggedIn)
  }

  const openModal = (e) => {
    setShowModal(!showModal);
    setWhichModal(e.target.name)
  }

  return (
    <UserContext.Provider value={{isLoggedIn, setIsLoggedIn, logUserIn, showModal,
      setShowModal, whichModal, setWhichModal, openModal}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserDataContextProvider, UserContext}