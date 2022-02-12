class Activity {
  constructor(id, activityData) {
    this.userId = id;
    this.activityData = activityData.filter(
      (person) => person.userID === this.userId
    );
  }
}

export default Activity;
