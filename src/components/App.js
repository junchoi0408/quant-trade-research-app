import React, { useState, useEffect } from 'react';
import './App.css';
import AppRouter from './Router';
import { authService }from '../firebase';
import axios from 'axios';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [finData, setFinData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const onSearchChange = async (event) => {
      const {target: {value}} = event;
      if (value) {
        await axios.get(`https://api.tdameritrade.com/v1/instruments?apikey=${process.env.REACT_APP_TD_API_KEY}&symbol=${value}&projection=fundamental`).then(
          res => {
            setIsLoading(false);
            setFinData(res.data[value.toUpperCase()]);
            console.log(res);
          }
        ).catch(
          (error)=>{
            console.error(error);
          }
        )
      }
  }

  const onInit = async() => {
    await axios.get(`https://api.tdameritrade.com/v1/instruments?apikey=${process.env.REACT_APP_TD_API_KEY}&symbol=aapl&projection=fundamental`).then(
          res => {
            setIsLoading(false);
            setFinData(res.data['AAPL']);
          }
        ).catch(
          (error)=>{
            console.error(error);
          }
        )
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
    onInit();
  }, [])
  
  return (
    <>
      {init && !isLoading ? <AppRouter isLoggedIn={isLoggedIn} finData={finData}
                          onSearchChange={onSearchChange}/> : "Initializing"}
      <footer className="nav__logo bd-grid">&copy; QTrade {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
