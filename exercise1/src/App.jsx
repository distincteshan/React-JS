import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import ProductInfo from './components/ProductInfo'

function App() {
  return (
    <>
      < Header />
      <MainContent />
      < Greeting />
      < ProductInfo />
      < Footer />
    </>
  )
}

export default App
