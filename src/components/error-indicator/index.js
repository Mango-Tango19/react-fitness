import React from 'react'
import errorImage from '../../assets/images/meditation.png'
import s from './error-indicator.module.scss'
const ErrorIndicator = () => {
  return (
    <div className={s.error}>
      <div className={s.error__image}>
        <img src={errorImage} alt="Keep Calm, Stay Fit" />
      </div>
      <div className={s.error__text}>
        <span>Something Goes Wrong, We Will Fix It ASAP</span>
      </div>
    </div>
  )
}
export default ErrorIndicator
