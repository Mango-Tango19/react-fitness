import React from 'react'
import { Link } from 'react-router-dom'
import s from './header.module.scss'
const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerContent}>
        <Link to="/">
          <div className={s.headerLogo}>
            <span>Fitness House Market</span>
          </div>
        </Link>
        <div className={s.headerCart}>
          <Link to="/cart">
            <span className={s.cartAmount}>5</span>
            <i className="fal fa-shopping-cart"></i>
            <span className={s.cartText}>Корзина</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
