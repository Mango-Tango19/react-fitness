const cardsRequested = () => {
  return {
    type: 'CARDS_REQUESTED',
  }
}

const cardsError = () => {
  return {
    type: 'CARDS_ERROR',
  }
}

const cardsLoaded = newCards => {
  return {
    type: 'CARDS_LOADED',
    payload: newCards,
  }
}

export { cardsLoaded, cardsError, cardsRequested }
