import React from 'react'
import './App.scss'
import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import Page from './components/Page'
import SkipLink from './components/SkipLink'

function App() {
  return (
    <Container>
      <SkipLink />
      <Header />
      <Page />
      <Footer />
    </Container>
  )
}

export default App
