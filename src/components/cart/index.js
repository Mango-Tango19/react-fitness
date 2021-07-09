import React from 'react'
import s from './cart.module.scss'
import { connect } from "react-redux";
import { deleteItemFromCart } from '../../redux/actions'

const Cart = ({ cartItems, totalPrice, onDelete }) => {
    const renderRow = (item, idx) => {
      const { alias, title, price } = item
      return (
        <tr key={alias}>
          <td>{idx + 1}</td>
          <td>{title}</td>
          <td>{price}</td>
          <td>
            <button onClick={() => onDelete(item)} className={s.btnDelete}>
              <i className="far fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      )
    }

    return (
      <div className={s.cartWrapper}>
        <h2>У вас в корзине</h2>
        <table className={s.table} border="1">
          <thead>
            <tr>
              <th>#</th>
              <th>Карта</th>
              <th>Цена</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>{cartItems.map(renderRow)}</tbody>
        </table>
        <div className={s.total}>Сумма покупки: <strong>{totalPrice}  </strong>рублей</div>
      </div>
    )


}

const mapStateToProps = ({cartItems, totalPrice}) => {
  return {cartItems, totalPrice}
}

const mapDispatchToProps = (dispatch) =>  {
    return {
        onDelete: (item) => dispatch(deleteItemFromCart(item))
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
