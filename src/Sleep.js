class Sleep {
  constructor(id, sleepData) {
    this.userId = id
    this.sleepData = sleepData.filter((person) => person.userID === this.userId)
    this.sleepDataAll = sleepData
  }

  getAverageSleepHours(){
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

  getSleepHoursByDate() {
    let lastDayIndex = this.sleepData.length - 1;

    return this.sleepData[lastDayIndex].hoursSlept;
}

  getSleepQualityByDate() {
  let lastDayIndex = this.sleepData.length - 1;

  return this.sleepData[lastDayIndex].sleepQuality;
}

  getWeeklyHoursSlept() {
    let lastDayIndex = this.sleepData.length - 7;
    let weeklyData = this.sleepData.slice(lastDayIndex, lastDayIndex + 7);
    let oneWeekHoursSlept = weeklyData.map((day) => day.hoursSlept);
    return oneWeekHoursSlept;
  }

  getWeeklySleepQuality() {
    let lastDayIndex = this.sleepData.length - 7;
    let weeklyData = this.sleepData.slice(lastDayIndex, lastDayIndex + 7);
    let oneWeekSleepQuality = weeklyData.map((day) => day.sleepQuality);
    return oneWeekSleepQuality;
  }

  getAvgSleepAllUsers() {
      let totalQuality =  this.sleepDataAll.reduce((sum, currDay) => {
        sum += currDay.sleepQuality
        return sum
      }, 0)

      let average = totalQuality/ this.sleepDataAll.length
      return average.toFixed(2)
  }

}

export default Sleep
