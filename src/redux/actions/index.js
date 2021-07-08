const filterChanged = filter => {
  return {
    type: 'FILTER_CHANGED',
    payload: filter,
  }
}

const filterReset = () => {
  return {
    type: 'FILTER_RESET',
  }
}

const onAddToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item
  }
}


const cardRequested = () => {
  return {
    type: 'CARD_REQUEST'
  }
}


const cardSuccess = (card) => {
  return {
    type: 'CARD_SUCCESS',
    payload: card
  }
}

const cardError = () => {
  return {
    type: 'CARD_ERROR'
  }
}



export { filterChanged, filterReset, onAddToCart, cardRequested, cardSuccess, cardError }
