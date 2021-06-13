import React from 'react'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import Card from '../card'
import Header from '../header'
import Filters from '../filters'

import s from './cards-list.module.scss'

import { useCardsList } from './useCardsList'

const CardsList = () => {
  const { cards, error, loading } = useCardsList()

  const filters = cards.map(item => {
    return item.properties
  })

  const renderCards = arr => {
    return arr.map(item => <Card key={item.alias} card={item} />)
  }

  if (error) {
    return <ErrorIndicator />
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div className={s.cardsListWrapper}>
      <Header />
      <Filters filters={filters} />
      <div className={s.cardDesk}>{renderCards(cards)}</div>
    </div>
  )
}

export default CardsList
