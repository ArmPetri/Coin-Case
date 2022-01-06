import React from 'react'
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import {Home, Converter, Portfolio, Coins} from './pages'

function App() {

  return (
   <Router>
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
  );
}

export default App;
