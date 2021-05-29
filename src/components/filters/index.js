import React from 'react'
import FilterSelect from '../filterSelect'

const Filters = ({ filters }) => {
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
  //   const onlyUnique = (value, index, self) => {
  //     return self.indexOf(value) === index
  //   }

  //   const findUnique = arr => {
  //     let arr1 = []
  //     arr.forEach(item => {
  //       debugger
  //       arr1.push(item.filter(onlyUnique))
  //     })
  //     debugger
  //     return arr1
  //   }

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
  //const unique = findUnique(Object.values(categories))

  //console.log(Object.keys(categories))
  let keys = Object.keys(categories)
  //console.log(categories[keys[1]])

  let selectsArr = []

  for (let i = 0; i < keys.length; i++) {
    selectsArr.push(<FilterSelect name={keys[i]} options={categories[keys[i]]} key={keys[i]}></FilterSelect>)
  }

  return <div>{selectsArr}</div>
}

export default Filters
