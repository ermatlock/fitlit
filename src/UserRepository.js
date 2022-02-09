import User from "./User";

class UserRepository {
  constructor(data) {
    this.data = data;
  }

  createUser(id) {
    const oneUser = this.data.find((user) => user.id === id);
    return new User(oneUser);
  }

  returnStepGoal() {
    let result = this.data.reduce((totalStepGoal, user) => {
      totalStepGoal += user.dailyStepGoal;
      return totalStepGoal;
    }, 0);
    const average = result / this.data.length;
    return Math.round(average);
  }
}

export default UserRepository;
