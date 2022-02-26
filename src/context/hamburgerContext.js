import React, { useState} from 'react'
const HamburgerContext = React.createContext();

const HamburgerContextProvider = ({children}) => {
  const [hamburger, setHamburger] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <HamburgerContext.Provider value={{hamburger, setHamburger, modalOpen, setModalOpen}}>{children}</HamburgerContext.Provider>
  )
}

export {HamburgerContextProvider, HamburgerContext}