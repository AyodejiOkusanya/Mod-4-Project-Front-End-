import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignInPage from './components/SignInPage';


ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignInPage}  />
      <Route exact path="/app" component={App}  />
    </Switch>
  </BrowserRouter>,
  

  document.querySelector('#root')
)
