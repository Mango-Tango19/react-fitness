import React from 'react'
import { connect } from 'react-redux'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import Card from '../card'
import Header from '../header'
import Filters from '../filters'
import { filterChanged } from '../../redux/actions'

import s from './cards-list.module.scss'

import { useCardsList } from './useCardsList'

const CardsList = ({ onfilterChanged, filters }) => {
  const { cards, error, loading } = useCardsList()

  const filtersOnPage = cards.map(item => {
    return item.properties
  })

  const renderCards = cardsArr => {
    return cardsArr.map(item => <Card key={item.alias} card={item} filters={filters} />)
  }

  const cardsOnPage = renderCards(cards)

  if (error) {
    return <ErrorIndicator />
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div className={s.cardsListWrapper}>
      <Header />
      <Filters filters={filtersOnPage} onfilterChanged={onfilterChanged} />
      <div className={s.cardDesk}>{cardsOnPage}</div>
    </div>
  )
}

const mapStateToProps = ({ filters }) => {
  return {
    filters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onfilterChanged: selectVal => dispatch(filterChanged(selectVal)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList)
