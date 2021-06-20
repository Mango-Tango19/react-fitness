import React from 'react'
import { Route, Switch } from 'react-router-dom'
//import Modal from './components/modal'
import SingleCard from './components/single-card'

import HomePage from './pages/home-page'
import CartPage from './pages/cart-page'

import s from './App.module.scss'

const App = () => {
  return (
    <div className={s.appWrapper}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
        <Route
          path="/:alias"
          render={({ match }) => {
            const { alias } = match.params
            return <SingleCard cardAlias={alias} />
          }}
        />
      </Switch>
      {/* <Modal /> */}
    </div>
  )
}

export default App
