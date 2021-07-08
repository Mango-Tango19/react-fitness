const initialState = {
  filters: [],
  loading:false,
  error: false,
  cartItems: [],
  card: null
}


const reducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'FILTER_CHANGED':
      return {
        ...state,
        filters: [...state.filters, action.payload],
      }

    case 'FILTER_RESET':
      return {
        ...state,
        filters: []
      }
    case 'ADD_TO_CART': {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      }
    }
    case 'CARD_REQUEST':
      return {
        ...state,
        loading:true,
        error: false
      }


    case 'CARD_SUCCESS':
      return {
        ...state,
        loading:false,
        error: false,
        card: action.payload
      }

    case 'CARD_ERROR':
      return {
        ...state,
        loading:false,
        error: true,
      }


    default:
      return state
  }
}

export default reducer
