class Activity {
  constructor(id, activityData) {
    this.userId = id;
    this.activityData = activityData.filter(
      (person) => person.userID === this.userId
    );
  }
  getLastRecordedSteps() {
    let lastDayIndex = this.activityData.length - 1;

    return this.activityData[lastDayIndex].numSteps;
  }
}

export default Activity;
