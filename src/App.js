import React from 'react';
import './App.css';
import SignIn from './Components/SignIn/SignIn'
import {HashRouter} from 'react-router-dom';
import Routes from './Components/Routes';
import AddressBook from './Components/AddressBook';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes/>
      </HashRouter>
      {/* <AddressBook/> */}
    </div>
  );
}

export default App;
