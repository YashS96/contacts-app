import './App.css';
import {Route, Routes} from 'react-router'
import React, { useState } from 'react'
import Header from './components/header/Header.js'
import Home from './components/Home.js'
import Contacts from './components/contacts/Contacts.js'
import History from './components/history/History.js'



function App() {

  const [history, setHistory] = useState([]);

  let populateHistory = (entry) => {
    setHistory([entry, ...history])
  }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Contacts' element={<Contacts method={populateHistory}/>}/>
        <Route path='History' element={<History list={history}/>}/>
      </Routes>
    </div>
  );
}

export default App;
