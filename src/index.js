import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ErrorBoundry from './components/error-boundry'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './store'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <Router>
          <App />
        </Router>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
)
