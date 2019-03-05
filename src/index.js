import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import SignInPage from './components/SignInPage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  
    <BrowserRouter>
    <Switch>
       <Route exact path="/" component={SignInPage}/>
       <Route exact path="/App" component={App}/>
      
    </Switch>
  </BrowserRouter>,
  

  document.querySelector('#root')
)
