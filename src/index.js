import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'

import App from './App'
import Loading from './app/components/Loading'
import ReactTooltip from 'react-tooltip'

import reportWebVitals from './reportWebVitals'

import './index.scss'
import './assets/css/themes/light.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <App />
        <ReactTooltip />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
