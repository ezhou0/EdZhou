import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About'
import Qualification from './components/qualification/Qualification';

function App() {

  return (
    <div className="App">
        <Header />
        <main className="main">
          <Home />  
          <About />
          <Qualification />
        </main>
           
        
       
    </div>
  )
}

export default App
