import React from 'react'
import s from './cart.module.scss'

const Cart = ({ items, total, onDelete, onIncrease, onDecrease }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button onClick={() => onDelete(id)} className={s.btnDelete}>
            <i className="far fa-trash-alt"></i>
          </button>
          <button onClick={() => onIncrease(id)} className={s.btnIncrease}>
            <i className="fa fa-plus-circle" />
          </button>
          <button onClick={() => onDecrease(id)} className={s.btnDecrease}>
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className={s.cartWrapper}>
      <h2>Увас в корзине</h2>
      <table className={s.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Товар</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className={s.total}>Total: ${total}</div>
    </div>
  )
}

export default Cart
