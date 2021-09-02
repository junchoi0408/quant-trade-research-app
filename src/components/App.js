import React, { useState, useEffect } from 'react';
import './App.css';
import AppRouter from './Router';
import { authService }from '../firebase';
import axios from 'axios';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [finData, setFinData] = useState('');
  const [search, setSearch] = useState('');

  const onSearchChange = async (event) => {
      const {target: {value}} = event;
      setSearch(value);
      if (value) {
        await axios.get(`https://api.tdameritrade.com/v1/instruments?apikey=${process.env.REACT_APP_TD_API_KEY}&symbol=${value}&projection=fundamental`).then(
          res => {
            setFinData(res);
            console.log(res);
          }
        ).catch(
          (error)=>{
            console.error(error);
          }
        )
      }
  }

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, [])
  
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} finData={finData} search={search}
                          onSearchChange={onSearchChange}/> : "Initializing"}
      <footer className="nav__logo bd-grid">&copy; QTrade {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
