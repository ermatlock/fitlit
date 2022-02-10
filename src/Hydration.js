import User from "./User";

class Hydration {
  constructor (user, apiData) {
    this.userId = user.id
    this.hydrationData  = apiData.filter(person => person.userID === this.userId )
  }

  getAllWaterAvg() {
    let totalOz = this.hydrationData.reduce((total, currDay) => {
      total += currDay.numOunces
      return total
    }, 0)
    let average = totalOz/this.hydrationData.length
    return Math.round(average)
  }

  findOzByDate(date) {
    return this.hydrationData.find(day => day.date === date).numOunces
  }

}

export default Hydration
