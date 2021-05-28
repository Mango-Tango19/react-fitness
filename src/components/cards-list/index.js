import React from 'react'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import Card from '../card'

import s from './cards-list.module.scss'

import { useCardsList } from './useCardsList'

const CardsList = () => {
  const { cards, error, loading } = useCardsList()

  const renderCards = arr => {
    return arr.map(item => <Card key={item.alias} card={item} />)
  }

  if (error) {
    return <ErrorIndicator />
  }

  if (loading) {
    return <Spinner />
  }

  return <div className={s.cardsListWrapper}>cards{renderCards(cards)}</div>
}

export default CardsList
