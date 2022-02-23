import User from "./User";
import UserRepository from "./UserRepository";

class Activity {
  constructor(id, activityData, userClass) {
    this.userId = id;
    this.activityData = activityData.filter(
      (person) => person.userID === this.userId
    );
  }
  getLastRecordedSteps() {
    let lastDayIndex = this.activityData.length - 1;
    return this.activityData[lastDayIndex].numSteps;
  }

  calculateMilesWalked(userClass) {
    let miles = userClass.strideLength * this.getLastRecordedSteps() /5280
    return miles.toFixed(2)
  }
}

export default Activity;
