/* eslint-disable no-unused-vars */

import React from 'react'
import './App.css'
import Hero from './components/Hero'
import CountdownTimer from './components/CountdownTimer'
import Offer from './components/Offer'
import Projects from './components/Projects'
import Review from './components/Review'
import Why from './components/Why'
import Question from './components/Question'
function App() {


  return (
    <div className=''>
      <Hero />
      <Offer />
      <Projects />
      <Review />
      <Why />
      <Question />
    </div>
  )
}

export default App
