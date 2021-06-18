const initialState = {
  filters: [],
}

const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'FILTER_CHANGED':
      return {
        filters: [...state.filters, action.payload],
      }

    case 'FILTER_RESET':
      return initialState

    default:
      return state
  }
}

export default reducer
