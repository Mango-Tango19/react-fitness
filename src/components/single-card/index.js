import React, {Component, useState} from 'react'

import s from './single-card.module.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import { cardRequested, cardSuccess, cardError, addToCart } from '../../redux/actions'
import FitnessService from "../../service";



class SingleCardContainer extends  Component {

    service = new FitnessService()

    componentDidMount () {
        const {onCardRequested, onCardSuccess, onCardError} = this.props
        onCardRequested()
        this.service.getSingleCard(this.props.cardAlias)
            .then(data => onCardSuccess(data))
            .catch(() => onCardError())
    }



  render() {
    const {card, error, loading, onAddToCart } = this.props
    const loadingView = loading ? <Spinner /> : null
    const singleCardElement = card ? <SingleCard card={card} onAddToCart={onAddToCart}/> : loadingView
      const errorMessage = error ? <ErrorIndicator /> : null


    return  (
        <div className={s.singleCardContainer}>
            <Link to="/">
           <p>Назад</p>
            </Link>
            {singleCardElement}
            {errorMessage}
        </div>
    )
  }
}


const SingleCard = ({ card, onAddToCart }) => {

    const [cartBtnVisible, setCartBtnVisible] = useState(false)

    const [addBtnVisible, setAddBtnVisible] = useState(true)

    const [cardInfo] = card

    const {price, image, description, title} = cardInfo

    const cartBtn = <Link to="/cart">
                        <p className={s.cartLink}>Посмотреть корзину</p>
                     </Link>

    const addBtn = <button className={s.btnAdd} onClick={() => handleClick(cardInfo) }>Добавить в корзину</button>

    const handleClick = (cardInfo) => {
        onAddToCart(cardInfo)
        setCartBtnVisible(true)
        setAddBtnVisible(false)
    }

    return (
        <div className={s.singleCardWrapper}>
                <img src={image}  alt={title} className={s.cardImage}/>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>Цена: {price} руб/месяц</p>
            {addBtnVisible ? addBtn : null}
            {cartBtnVisible ? cartBtn : null}
        </div>
    )

}

const mapStateToProps = ({error, loading, card}) => {
    return {
        error,
        loading,
        card
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onCardRequested: () => dispatch(cardRequested()),
        onCardSuccess: (card) => dispatch( cardSuccess(card)),
        onCardError: () => dispatch(cardError()),
        onAddToCart: (card) => dispatch(addToCart(card))
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(SingleCardContainer)






