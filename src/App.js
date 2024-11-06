import React from 'react'
import {Blog, Features, Footer, Header, Posibility, WhatGPT3} from './containers';
import {Cta, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Posibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App