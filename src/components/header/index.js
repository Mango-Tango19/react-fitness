import React from 'react'
import s from './header.module.scss'
const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerContent}>
        <div className={s.headerLogo}>
          <span>Fitness House Market</span>
        </div>
        <div className={s.headerCart}>
          <span className={s.cartAmount}>5</span>
          <i className="fal fa-shopping-cart"></i>
          <span className={s.cartText}>Корзина</span>
        </div>
      </div>
    </div>
  )
}

export default Header
