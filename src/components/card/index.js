import React from 'react'
//import SingleCard from '../single-card'
import { Link } from 'react-router-dom'

import s from './card.module.scss'

const Card = ({ card, filters }) => {
  const { title, description, image, properties, alias } = card

  const finedFilter = () => {
    return properties.filter(item => filters.indexOf(item.value) >= 0)
  }

  const renderTags = propertiesArr => {
    return propertiesArr.map(function (item) {
      const key = Math.random() * 30
      return (
        <span key={key} className={s.cardTag}>
          #{item.value}
        </span>
      )
    })
  }

  const cardElement = (
    <Link to={`/${alias}`} onClick={() => console.log(alias)}>
      <div className={s.card}>
        <img className={s.cardImage} src={image} alt={title}></img>
        <div className={s.cardContent}>
          <p className={s.cardTitle}>{title}</p>
          <span className={s.cardDescription}>{description}</span>
          <div className={s.cardTags}>{renderTags(properties)}</div>
        </div>
      </div>
    </Link>
  )
  //if no filters selected, return cardElement on page
  if (filters.length === 0) {
    return cardElement
  } //if filter selected, return cardElement, that have that filters
  if (filters.length > 0) {
    const cardElementFilters = finedFilter()
    return cardElementFilters.length > 0 ? cardElement : null
  }
}

export default Card
