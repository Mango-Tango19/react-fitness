import React from 'react'
import s from './card.module.scss'

const Card = ({ card }) => {
  const { title, alias, description, image, price } = card
  return (
    <div className={s.cardWrapper}>
      <span>{title}</span>
      <span>{alias}</span>
      <span>{description}</span>
      <span>{image}</span>
      <span>{price} рублей, разумеется</span>
    </div>
  )
}

export default Card
