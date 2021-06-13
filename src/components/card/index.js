import React from 'react'
import s from './card.module.scss'

const Card = ({ card }) => {
  const { title, description, image, properties } = card

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

  // const cutDescription = (descriptionStr) => {
  //   return descriptionStr //не более трёх строк!!
  // }
  return (
    <div className={s.card}>
      <img className={s.cardImage} src={image} alt={title}></img>
      <div className={s.cardContent}>
        <p className={s.cardTitle}>{title}</p>
        <span className={s.cardDescription}>{description}</span>
        <div className={s.cardTags}>{renderTags(properties)}</div>
      </div>
    </div>
  )
}

export default Card
