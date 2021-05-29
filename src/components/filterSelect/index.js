import React from 'react'
const FilterSelect = ({ name, options }) => {
  const renderOptions = arr => {
    return arr.map(item => {
      return <option>{item}</option>
    })
  }

  return (
    <select>
      <option>{name}</option>
      {renderOptions(options)}
    </select>
  )
}

export default FilterSelect
