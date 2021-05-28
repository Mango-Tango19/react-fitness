import cardsDb from './db.json'
export default class FitnessService {
  //типа запрос к api

  getCards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something goes wrong!'))
        }
        resolve(cardsDb.services)
      }, 700)
    })
  }
}
