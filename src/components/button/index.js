import React from 'react'
import s from './button.module.scss'

const Button = ({title}) => {
    return <button className={s.btn} >{title}</button>
}

export default Button