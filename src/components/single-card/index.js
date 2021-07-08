import React, {Component} from 'react'

import Button from "../button";
import s from './single-card.module.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import { cardRequested, cardSuccess, cardError } from '../../redux/actions'
import FitnessService from "../../service";



class SingleCardContainer extends  Component {

    service = new FitnessService()

    // getCard = () => {
    //     this.service.getSingleCard(this.props.cardAlias)
    // }

    componentDidMount () {
        const {onCardRequested, onCardSuccess, onCardError} = this.props
        onCardRequested()
        this.service.getSingleCard(this.props.cardAlias)
            .then(data => onCardSuccess(data))
            .catch(() => onCardError())
    }



  render() {
        const {card, error, loading } = this.props
        const singleCardElement = card ? <SingleCard card={card}/> : null

      const errorMessage = error ? <ErrorIndicator /> : null
      const loadingView = loading ? <Spinner /> : null

    return  (
        <div className={s.singleCardContainer}>
            <Link to="/">
            <Button title={"Назад"}/>
            </Link>
            {singleCardElement}
            {errorMessage}
            {loadingView}
        </div>
    )
  }
}


const SingleCard = ({ card }) => {

    const [cardInfo] = card

    const {price, image, description, title} = cardInfo

    // const cartBtn = <Link to="/cart">
    //                     <Button title={"Посмотреть корзину"}/>
    //                  </Link>


    return (
        <div className={s.singleCardWrapper}>
                <img src={image}  alt={title} className={s.cardImage}/>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>Цена: {price} руб/месяц</p>
            <Button title={"Добавить в корзину"}/>
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
        onCardError: () => dispatch(cardError())
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(SingleCardContainer)






