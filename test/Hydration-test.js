import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import User from "../src/User";
import Hydration from "../src/Hydration";


describe('Hydration', () => {
let hydration1;
let user1;
let userData;
let hydrationData

  beforeEach(() => {
    hydrationData = [
      {"userID":1,"date":"2019/06/16","numOunces":69},{"userID":2,"date":"2019/06/16","numOunces":91},{"userID":3,"date":"2019/06/16","numOunces":99},{"userID":1,"date":"2019/06/17","numOunces":96},{"userID":2,"date":"2019/06/17","numOunces":96},{"userID":3,"date":"2019/06/17","numOunces":28},{"userID":1,"date":"2019/06/18","numOunces":61},{"userID":2,"date":"2019/06/18","numOunces":70},{"userID":3,"date":"2019/06/18","numOunces":40},{"userID":1,"date":"2019/06/19","numOunces":91},{"userID":2,"date":"2019/06/19","numOunces":76},{"userID":3,"date":"2019/06/19","numOunces":85},{"userID":1,"date":"2019/06/20","numOunces":50},{"userID":2,"date":"2019/06/20","numOunces":71},{"userID":3,"date":"2019/06/20","numOunces":51},{"userID":1,"date":"2019/06/21","numOunces":50},{"userID":2,"date":"2019/06/21","numOunces":27},{"userID":3,"date":"2019/06/21","numOunces":41},{"userID":1,"date":"2019/06/22","numOunces":43},{"userID":2,"date":"2019/06/22","numOunces":58},{"userID":3,"date":"2019/06/22","numOunces":78},
    ]

    userData = {
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8],
    }
    user1 = new User(userData)
    hydration1 = new Hydration(user1, hydrationData)
  })

  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  })

  it('should be an instance of hydration', () => {
    expect(hydration1).to.be.an.instanceOf(Hydration)
  })

  it('should accept a User and take the id', () => {
    expect(hydration1.userId).to.equal(1)
    expect(hydration1.userId).to.eql(user1.id)
  })

  it('should accept Hydration API data', () => {
    let userOneData = hydrationData.filter(user => user.userID === 1)
    expect(hydration1.hydrationData).to.eql(userOneData)
  })

  it('should calculate one Users average fluid oz of all time', () => {
    expect(hydration1.getAllWaterAvg()).to.equal(75)
  })

  it('should find a date and return how many Oz drank that day', () => {
    expect(hydration1.findOzByDate("2019/06/16")).to.equal(69)
  })

  it('should show each days water consumtion for a week', () => {
    expect(hydration1.getWeeksWater())
  })
})
