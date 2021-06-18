import React from 'react'
import { connect } from 'react-redux'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import Card from '../card'
import Header from '../header'
import Filters from '../filters'
import SelectedFilters from '../selected-filters'
import { filterChanged, filterReset } from '../../redux/actions'

import s from './cards-list.module.scss'

import { useCardsList } from './useCardsList'

const CardsList = ({ onFilterChanged, onFilterReset, filters }) => {
  const { cards, error, loading } = useCardsList()

  const filtersOnPage = cards.map(item => {
    return item.properties
  })

  const renderCards = cardsArr => {
    return cardsArr.map(item => <Card key={item.alias} card={item} filters={filters} />)
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
      <Filters filters={filtersOnPage} onFilterChanged={onFilterChanged} />
      <SelectedFilters filters={filters} onFilterReset={onFilterReset} />
      <div className={s.cardDesk}>{renderCards(cards)}</div>
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
    onFilterChanged: selectVal => dispatch(filterChanged(selectVal)),
    onFilterReset: () => dispatch(filterReset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList)
