import React, {Component} from 'react'
import FitnessService from "../../service";

const service = new FitnessService()

class SingleCardContainer extends  Component {

  state = {
    card: ''
  }

  componentDidMount() {
    debugger
    service.getSingleCard(this.props.cardAlias)
        .then(data => this.setState({card: data}))
  }

  render() {
    return <SingleCard card={this.state.card}/>
  }
}


const SingleCard = ({ card }) => {
    debugger
    const [cardInfo] = card

    const {price, image, description, title} = cardInfo
    return (<div className="card mb-3">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}</p>
            </div>
        </div>
    )

}

export default SingleCardContainer




