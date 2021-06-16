import React from 'react'
import FilterSelect from '../filterSelect'
import s from './filters.module.scss'

const Filters = ({ filters, onfilterChanged }) => {
  let categories = {
    amount: [],
    duration: [],
    sectionType: [],
    trainer: [],
    time: [],
  }

  const getCategories = () => {
    filters.map(filter => {
      return getFilters(filter)
    })
  }

  const getFilters = arr => {
    arr.forEach(item => {
      switch (item.title) {
        case 'Количество занятий':
          return categories.amount.push(item.value)
        case 'Срок действия':
          return categories.duration.push(item.value)
        case 'Время посещения':
          return categories.time.push(item.value)
        case 'Тип секции':
          return categories.sectionType.push(item.value)
        case 'Категория тренера':
          return categories.trainer.push(item.value)
        default:
          return
      }
    })
  }

  getCategories()

  const keys = Object.keys(categories)

  let selectsArr = []

  for (let i = 0; i < keys.length; i++) {
    selectsArr.push(
      <FilterSelect name={keys[i]} options={categories[keys[i]]} key={keys[i]} onfilterChanged={onfilterChanged} />
    )
  }

  return <div className={s.filtersWrapper}>{selectsArr}</div>
}

export default Filters
