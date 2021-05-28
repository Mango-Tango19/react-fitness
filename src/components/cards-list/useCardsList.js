import { useMemo, useEffect, useReducer } from 'react'
import FitnessService from '../../service'

/* eslint-disable */
const service = new FitnessService()

const getCards = service.getCards

const initialState = {
  cards: [],
  error: false,
  loading: false,
}

const reducer = (state = initialState, action) => {
  console.log(`action: ${action.type}; payload:`, action.payload)
  switch (action.type) {
    case 'CARDS_REQUESTED': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'CARDS_ERROR': {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case 'CARDS_LOADED': {
      return {
        loading: false,
        error: false,
        cards: action.payload,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

const useCardsList = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getCardsList = useMemo(() => {
    dispatch({ type: 'CARDS_REQUESTED' })
    getCards()
      .then(data => dispatch({ type: 'CARDS_LOADED', payload: data }))
      .catch(err => {
        console.error(err)
        dispatch({ type: 'CARDS_ERROR' })
      })
  }, [])

  useEffect(() => {
    getCardsList
  }, [])

  return {
    ...state,
  }
}

export { useCardsList }
