import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import User from "../src/User";
import Hydration from "../src/Hydration";
import Sleep from "../src/Sleep"

describe('sleep', () => {
let sleep1;
let sleepData;

  beforeEach( () => {
    sleepData = [{"userID":1,"date":"2019/06/16","hoursSlept":4.1,"sleepQuality":3.8},{"userID":2,"date":"2019/06/16","hoursSlept":7.5,"sleepQuality":3.8},{"userID":3,"date":"2019/06/16","hoursSlept":10.7,"sleepQuality":3.4},{"userID":1,"date":"2019/06/17","hoursSlept":8,"sleepQuality":2.6},{"userID":2,"date":"2019/06/17","hoursSlept":5.7,"sleepQuality":3},{"userID":3,"date":"2019/06/17","hoursSlept":5.3,"sleepQuality":4.9},{"userID":1,"date":"2019/06/18","hoursSlept":10.4,"sleepQuality":3.1},{"userID":2,"date":"2019/06/18","hoursSlept":10.8,"sleepQuality":3.2},{"userID":3,"date":"2019/06/18","hoursSlept":9.8,"sleepQuality":2.6},{"userID":1,"date":"2019/06/19","hoursSlept":10.7,"sleepQuality":1.2},{"userID":2,"date":"2019/06/19","hoursSlept":9.6,"sleepQuality":2.5},{"userID":3,"date":"2019/06/19","hoursSlept":7.2,"sleepQuality":3.4},{"userID":1,"date":"2019/06/20","hoursSlept":9.3,"sleepQuality":1.2},{"userID":2,"date":"2019/06/20","hoursSlept":10.1,"sleepQuality":2.4},{"userID":3,"date":"2019/06/20","hoursSlept":9.4,"sleepQuality":1.2},{"userID":1,"date":"2019/06/21","hoursSlept":7.8,"sleepQuality":4.2},{"userID":2,"date":"2019/06/21","hoursSlept":4.3,"sleepQuality":4.8},{"userID":3,"date":"2019/06/21","hoursSlept":8.9,"sleepQuality":3.7},{"userID":1,"date":"2019/06/22","hoursSlept":7,"sleepQuality":3},{"userID":2,"date":"2019/06/22","hoursSlept":4.8,"sleepQuality":3.3},{"userID":3,"date":"2019/06/22","hoursSlept":9.8,"sleepQuality":2.1},{"userID":1,"date":"2019/06/23","hoursSlept":7.8,"sleepQuality":1.5},{"userID":2,"date":"2019/06/23","hoursSlept":8,"sleepQuality":4.9},{"userID":3,"date":"2019/06/23","hoursSlept":4.7,"sleepQuality":3.9},{"userID":1,"date":"2019/06/24","hoursSlept":8,"sleepQuality":1.3},{"userID":2,"date":"2019/06/24","hoursSlept":10.8,"sleepQuality":1},{"userID":3,"date":"2019/06/24","hoursSlept":9.3,"sleepQuality":1.8},]

    sleep1 = new Sleep(1, sleepData)
  })

  it("should be a function", () => {
    expect(Sleep).to.be.a("function");
  });

  it("should be an instance of hydration", () => {
    expect(sleep1).to.be.an.instanceOf(Sleep);
  });

  it("should accept a User and take the id", () => {
    expect(sleep1.userId).to.equal(1);
  });

  it("should accept Hydration API data", () => {
    let userOneData = sleepData.filter((user) => user.userID === 1);
    expect(sleep1.sleepData).to.eql(userOneData);
  });

  it("should calculate average number of hours slept per day", () => {
    expect(sleep1.getAverageDailySleep()).to.equal('8.12')
  })

})
