import React from 'react'
import './App.css'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Page from './components/Page/Page'
import SkipLink from './components/SkipLink/SkipLink'

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
