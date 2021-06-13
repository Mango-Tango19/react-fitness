import React from 'react'
import s from './filter-select.module.scss'

const FilterSelect = ({ name, options }) => {
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

  const handleChange = e => {
    console.log(e.target.value)
  }

  return (
    <select className={s.select} onChange={e => handleChange(e)}>
      <option value={translateName(name)}>{translateName(name)}</option>
      {renderOptions(options)}
    </select>
  )
}

export default FilterSelect
