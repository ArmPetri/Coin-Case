import React from 'react'
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import {Home} from './pages'

function App() {

  return (
   <Router>
     <Switch>
       <Route exact path={ROUTES.HOME} component={Home}>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
