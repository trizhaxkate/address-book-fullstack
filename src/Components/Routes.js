import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import AddressBook from './AddressBook';

export default function Routes(){
  return(
    <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/addressbook" component={AddressBook}/>
    </Switch>
  )
}