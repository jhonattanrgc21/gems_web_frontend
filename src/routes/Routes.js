import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { LoginForm } from '../containers/LoginForm';
import Register from '../components/Register';
import Home_tboard from '../containers/Home_tboard';
import UserSettings from '../components/UserSettings';
import Calculate from '../containers/Calculate';




export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/t_board" component={Home_tboard}/>
        <Route exact path="/user_settings" component={UserSettings}/>
        <Route exact path="/calculate" component={Calculate}/>
     </Switch>
    </BrowserRouter>
  );  
}