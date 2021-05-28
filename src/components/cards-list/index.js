import React from 'react'
//import { useState, useEffect } from 'react'

import { useCardsList } from './useCardsList'

const CardsList = () => {
  const dataState = useCardsList()
  const renderCards = arr => {
    return arr.map(item => <span key={item.alias}>{item.title}</span>)
  }

  return <div>cards{renderCards(dataState)}</div>
}

export default CardsList
