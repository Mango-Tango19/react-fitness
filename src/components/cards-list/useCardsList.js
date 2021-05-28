import { useState, useEffect } from 'react'
import FitnessService from '../../service'

const service = new FitnessService()

const getCards = service.getCards

const useCardsList = () => {
  const [dataState, setDataState] = useState([])

  useEffect(() => {
    getCards().then(data => setDataState(data))
  }, [])
  return dataState
}

export { useCardsList }
