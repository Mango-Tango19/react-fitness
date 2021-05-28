import React from 'react'
import errorImage from '../../assets/images/meditation.png'
import s from './error-indicator.module.css'
const ErrorIndicator = () => {
  return (
    <div className={s.error}>
      <img src={errorImage} alt="Keep Calm, Stay Fit" />
      <span className={s.errorText}>Something Goes Wrong, We Will Fix It ASAP</span>
    </div>
  )
}
export default ErrorIndicator
