class Sleep {
  constructor(id, sleepData) {
    this.userId = id
    this.sleepData = sleepData.filter((person) => person.userID === this.userId)
  }

  getAverageDailySleep(){
    let totalHours = this.sleepData.reduce((sum, currDay) => {
      sum += currDay.hoursSlept
      return sum
    }, 0)

    let average = totalHours / this.sleepData.length
    return average.toFixed(2)
  }

  getAverageSleepQuality() {
    let totalQuality =  this.sleepData.reduce((sum, currDay) => {
      sum += currDay.sleepQuality
      return sum
    }, 0)

    let average = totalQuality/ this.sleepData.length
    return average.toFixed(2)
  }

}

export default Sleep
