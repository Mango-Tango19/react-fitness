const initialState = {
  filters: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_CHANGED':
      return {
        filters: action.payload,
      }

    default:
      return state
  }
}

export default reducer
