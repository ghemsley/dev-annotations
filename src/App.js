import React from 'react'
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Page from './components/Page'
import SkipLink from './components/SkipLink'

function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <Page />
      <Footer />
    </>
  )
}

export default App
