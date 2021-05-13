import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { Routes } from './app/router/Routes'
import { history } from './_helpers'
import store from './app/store'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App
