import React from 'react';
import { Footer, Blog, WhatGPT3, Features, Possibility, Header } from './containers';
import { CTA, Brand, Navbar, } from './components';
import './App.css';


const app = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>

        <Navbar/>
        <Header/>

      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>

    </div>


  )
}

export default app