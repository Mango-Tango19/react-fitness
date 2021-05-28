import React from 'react'
import { Route, Switch } from 'react-router-dom'
//import Modal from './components/modal'

import HomePage from './pages/home-page'
import CartPage from './pages/cart-page'

import s from './App.module.scss'

const App = () => {
  return (
    <div className={s.appWrapper}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
      {/* <Modal /> */}
    </div>
  )
}

export default App
