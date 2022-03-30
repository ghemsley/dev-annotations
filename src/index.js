import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import axe from '@axe-core/react'
import './index.scss'

axe(React, ReactDOM, 1000)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
