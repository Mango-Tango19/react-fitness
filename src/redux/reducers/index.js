const initialState = {
  filters: [],
  loading:false,
  error: false,
  cartItems: [],
  totalAmount: 0,
  totalPrice: 0,
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
        totalAmount: state.totalAmount + 1,
        totalPrice: state.totalPrice + action.payload.price
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

    case 'DELETE_ITEM_FROM_CART':
      const itemIndex = state.cartItems.findIndex(({alias}) => alias === action.payload.alias);
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, itemIndex),
          ...state.cartItems.slice(itemIndex + 1)
        ],
        totalAmount: state.totalAmount - 1,
        totalPrice: state.totalPrice - action.payload.price
      }


    default:
      return state
  }
}

export default reducer
