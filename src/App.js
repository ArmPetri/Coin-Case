
import React, {useContext} from 'react'
import GlobalStyles from './styles/Global';
import { HamburgerContext } from './context/hamburgerContext';

import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import {Home, Converter, Portfolio, Coins} from './pages'

function App() {

  const {hamburger, modalOpen} = useContext(HamburgerContext)

  return (
    <Router>
      <GlobalStyles position={hamburger || modalOpen ? "fixed" : "static"}/>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home}>
        </Route>
        <Route path={ROUTES.CONVERTER} component={Converter}>
        </Route>
        <Route path={ROUTES.PORTFOLIO} component={Portfolio}>
        </Route>
        <Route path={ROUTES.COINS} component={Coins}>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
