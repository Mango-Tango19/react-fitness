import React from 'react'
import s from './selected-filters.module.scss'

const SelectedFilters = ({ filters, onFilterReset }) => {
  if (filters.length === 0) {
    return null
  }

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index
  }

  const uniqueFilters = filters.filter(onlyUnique)

  const selectedFilters = uniqueFilters.map(item => (
    <span key={item} className={s.selectedFilter}>
      #{item}
    </span>
  ))

  return (
    <div className={s.selectedFiltersContainer}>
      <button className={s.resetBtn} onClick={onFilterReset}>
        Сбросить
      </button>
      {selectedFilters}
    </div>
  )
}

export default SelectedFilters
