import React, { Fragment } from 'react'
import s from './filter-select.module.scss'

const FilterSelect = ({ name, options, onFilterChanged }) => {
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index
  }

  const renderOptions = arr => {
    const unique = arr.filter(onlyUnique)

    return unique.map(item => {
      const key = Math.random() * 10
      return (
        <option key={key} value={item}>
          {item}
        </option>
      )
    })
  }

  const translateName = name => {
    switch (name) {
      case 'amount':
        return 'Количество занятий'
      case 'duration':
        return 'Срок действия'
      case 'time':
        return 'Время посещения'
      case 'sectionType':
        return 'Тип секции'
      case 'trainer':
        return 'Категория тренера'
      default:
        return 'Выберите категорию'
    }
  }

  return (
    <Fragment>
      <select className={s.select} onChange={e => onFilterChanged(e.target.value)}>
        <option value={translateName(name)}>{translateName(name)}</option>
        {renderOptions(options)}
      </select>
    </Fragment>
  )
}

export default FilterSelect
