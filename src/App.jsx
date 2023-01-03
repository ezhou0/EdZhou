import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About'
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
        <Header />
        <main className="main">
          <Home />  
          <About />
          <Qualification />
          <Work />
           <Footer />
        </main>
           
       
        
       
    </div>
  )
}

export default App
