import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import axe from '@axe-core/react'

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
