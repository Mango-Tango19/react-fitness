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
    <Link to={`/${alias}`}>
      <div className={s.card}>
        <img className={s.cardImage} src={image} alt={title} />
        <div className={s.cardContent}>
          <p className={s.cardTitle}>{title}</p>
          <span className={s.cardDescription}>{description}</span>
          <div className={s.cardTags}>{renderTags(properties)}</div>
        </div>
      </div>
    </Link>
  )


  //if no filters selected, return cardElement on page
  const cardOnPage =  filters.length === 0 ? cardElement : null

   //if filter selected, return cardElement, that have that filters
  const cardElementFilters = finedFilter()
  const cardWithFilters = cardElementFilters.length > 0 ? cardElement : null

  return (
      <>
        {cardOnPage}
        {cardWithFilters}
      </>
  )
}


export default Card
