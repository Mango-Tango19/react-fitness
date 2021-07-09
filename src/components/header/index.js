import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import s from './header.module.scss'
const Header = ({totalAmount}) => {

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
            <span className={s.cartAmount}>{totalAmount}</span>
            <i className="fal fa-shopping-cart"></i>
            <span className={s.cartText}>Корзина</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({totalAmount}) => {
  return {
    totalAmount
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
