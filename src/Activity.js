import User from "./User";
import UserRepository from "./UserRepository";

class Activity {
  constructor(id, activityData, userClass) {
    this.userId = id;
    this.allUsersActivityData = activityData;
    this.activityData = activityData.filter(
      (person) => person.userID === this.userId
    );
  }
  getLastRecordedSteps() {
    let lastDayIndex = this.activityData.length - 1;
    return this.activityData[lastDayIndex].numSteps;
  }

  calculateMilesWalked(userClass) {
    let miles = (userClass.strideLength * this.getLastRecordedSteps()) / 5280;
    return miles.toFixed(2);
  }

  getMinutesActive() {
    let lastDayIndex = this.activityData.length - 1;
    return this.activityData[lastDayIndex].minutesActive;
  }

  calculateWeeksAvg() {
    let index = this.activityData.length - 7;
    const weeklyData = this.activityData.slice(index, index + 7);
    let totalWeekMinutes = weeklyData.reduce((sum, currDay) => {
      sum += currDay.minutesActive;
      return sum;
    }, 0);
    return (totalWeekMinutes / 7).toFixed(2);
  }

  isStepGoalAchieved(userClass) {
    if (userClass.dailyStepGoal < this.getLastRecordedSteps()) {
      return true;
    } else {
      return false;
    }
  }

  exceededStepGoal(userClass) {
    let daysExceed = this.activityData
      .filter((day) => {
        return userClass.dailyStepGoal < day.numSteps;
      })
      .map((day) => day.date);
    return daysExceed;
  }

  getMostStairsClimbed() {
    return this.activityData.sort(
      (a, b) => b.flightsOfStairs - a.flightsOfStairs
    )[0].flightsOfStairs;
  }

  lastDayAllAvg() {
    let lastDayIndex = this.activityData.length - 1;
    let lastDate = this.activityData[lastDayIndex].date;
    let lastDateAllUsers = this.allUsersActivityData.filter(
      (user) => user.date === lastDate
    );
    let steps = Math.round(
      lastDateAllUsers.reduce((sum, user) => {
        sum += user.numSteps;
        return sum;
      }, 0) / lastDateAllUsers.length
    );
    let minutes = Math.round(
      lastDateAllUsers.reduce((sum, user) => {
        sum += user.minutesActive;
        return sum;
      }, 0) / lastDateAllUsers.length
    );
    let flights = Math.round(
      lastDateAllUsers.reduce((sum, user) => {
        sum += user.flightsOfStairs;
        return sum;
      }, 0) / lastDateAllUsers.length
    );

    return { steps, minutes, flights };
  }

  lastWeeksData(activity){
    const index = this.activityData.length - 7;
    const weeklyData = this.activityData.slice(index, index + 7)
    const oneWeekSteps = weeklyData.map((day) => day[activity])
    return oneWeekSteps
  }


}

export default Activity;
