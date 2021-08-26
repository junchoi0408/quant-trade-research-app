import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Nav';
import AppRouter from './Router';
import { authService }from '../firebase';


function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing"}
      <footer className="nav__logo bd-grid">&copy; QTrade {new Date().getFullYear()}</footer>
    </>
    
    
    // <div className="App">
    //   <header class="l-header">
    //     <Nav />
    //   </header>
      
    //   <main className="l-main">
    //     <Landing />
    //   </main>

    // </div>
  );
}

export default App;
