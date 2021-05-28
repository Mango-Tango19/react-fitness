import React from 'react'
import CardsList from './components/cards-list'
//import Modal from './components/modal'
import s from './App.module.scss'

const App = () => {
  return (
    <div className={s.appWrapper}>
      <CardsList />
      {/* <Modal /> */}
    </div>
  )
}

export default App
