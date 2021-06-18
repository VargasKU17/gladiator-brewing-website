import React, { useState } from 'react'
import Header from './components/Header'
import Verify from './components/Verify'
import {Link} from 'react-scroll'
import './App.css';
import Home from './components/Home'


function App() {
  //development purposes only this is set to 'home' and NOT 'verify'
  const [page, setPage] = useState('verify')
  const legalToEnter = useState('home')
  const selectPage = () => {
    if (page === 'home'){
      return <Home />
    } else if (page === 'verify'){
      return <Verify enterSite={x => setPage(x)}/>
    }
  }
  const showHeader = () => {
    if (page === 'home'){
      return <Header />
    }
  }
 
  return (
    <div className="App">
      {showHeader()}
      <div className="content-wrapper">
        {selectPage()}

     
          
          
          
      </div>
    </div>
  );
}

export default App;
