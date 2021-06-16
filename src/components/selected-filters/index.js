import React from 'react'
import s from './selected-filters.module.scss'

const SelectedFilters = ({ filters }) => {
  if (filters.length === 0) {
    return null
  }

  const selectedFilters = filters.map(item => <span className={s.selectedFilter}>#{item}</span>)

  return (
    <div className={s.selectedFiltersContainer}>
      {selectedFilters}
      <button className={s.resetBtn}>Сбросить</button>
    </div>
  )
}

export default SelectedFilters
