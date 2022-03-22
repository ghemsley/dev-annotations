import React from 'react'
import './App.css'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Page from './components/Page/Page'

function App() {
  return (
    <Container>
      <Header />
      <Page />
      <Footer />
    </Container>
  )
}

export default App
