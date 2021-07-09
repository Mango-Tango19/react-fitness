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

const addToCart = (item) => {
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

const deleteItemFromCart = (alias) => {
  return {
    type: 'DELETE_ITEM_FROM_CART',
    payload: alias
  }

}



export { filterChanged, filterReset, addToCart, cardRequested, cardSuccess, cardError, deleteItemFromCart }
