import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Landing from '../routes/Landing';
import Router from './Router';
import AppRouter from './Router';
import { authService }from '../firebase';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; QTrade {new Date().getFullYear}</footer>
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
