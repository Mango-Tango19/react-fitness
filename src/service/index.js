import cardsDb from './db.json'
export default class FitnessService {
  //типа запрос к api

  getCards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject(new Error('Something goes wrong!'))
        }
        resolve(cardsDb.services)
      }, 700)
    })
  }

  oneCard(alias) {
    return cardsDb.services.filter((card) => {
      return card.alias === alias
    })
  }

  getSingleCard(alias) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject(new Error('Something goes wrong!'))
        }
        resolve(this.oneCard(alias))
      }, 700)
    })
  }





}