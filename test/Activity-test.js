import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import User from "../src/User";
import Activity from "../src/Activity";

describe("Activity", () => {
  let activity1;
  let activityData;
  let userDataSet;
  let userRepository1;
  let user1;
  let user1Stride;

  beforeEach(() => {
    userDataSet = [
      {
        id: 1,
        name: "Luisa Hane",
        address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        email: "Diana.Hayes1@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 10000,
        friends: [16, 4, 8],
      },
      {
        id: 2,
        name: "Jarvis Considine",
        address: "30086 Kathryn Port, Ciceroland NE 07273",
        email: "Dimitri.Bechtelar11@gmail.com",
        strideLength: 4.5,
        dailyStepGoal: 5000,
        friends: [9, 18, 24, 19],
      },
      {
        id: 3,
        name: "Herminia Witting",
        address: "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        email: "Elwin.Tromp@yahoo.com",
        strideLength: 4.4,
        dailyStepGoal: 5000,
        friends: [19, 11, 42, 33],
      },
    ];
    activityData = [
      {
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16,
      },
      {
        userID: 2,
        date: "2019/06/15",
        numSteps: 4294,
        minutesActive: 138,
        flightsOfStairs: 10,
      },
      {
        userID: 3,
        date: "2019/06/15",
        numSteps: 7402,
        minutesActive: 116,
        flightsOfStairs: 33,
      },
      {
        userID: 1,
        date: "2019/06/16",
        numSteps: 6637,
        minutesActive: 175,
        flightsOfStairs: 36,
      },
      {
        userID: 2,
        date: "2019/06/16",
        numSteps: 4112,
        minutesActive: 220,
        flightsOfStairs: 37,
      },
      {
        userID: 3,
        date: "2019/06/16",
        numSteps: 12304,
        minutesActive: 152,
        flightsOfStairs: 8,
      },
      {
        userID: 1,
        date: "2019/06/17",
        numSteps: 14329,
        minutesActive: 168,
        flightsOfStairs: 18,
      },
      {
        userID: 2,
        date: "2019/06/17",
        numSteps: 13750,
        minutesActive: 65,
        flightsOfStairs: 4,
      },
      {
        userID: 3,
        date: "2019/06/17",
        numSteps: 4547,
        minutesActive: 97,
        flightsOfStairs: 5,
      },
      {
        userID: 1,
        date: "2019/06/18",
        numSteps: 4419,
        minutesActive: 165,
        flightsOfStairs: 33,
      },
      {
        userID: 2,
        date: "2019/06/18",
        numSteps: 4662,
        minutesActive: 181,
        flightsOfStairs: 31,
      },
      {
        userID: 3,
        date: "2019/06/18",
        numSteps: 2546,
        minutesActive: 274,
        flightsOfStairs: 26,
      },
      {
        userID: 1,
        date: "2019/06/19",
        numSteps: 8429,
        minutesActive: 275,
        flightsOfStairs: 2,
      },
      {
        userID: 2,
        date: "2019/06/19",
        numSteps: 9858,
        minutesActive: 243,
        flightsOfStairs: 44,
      },
      {
        userID: 3,
        date: "2019/06/19",
        numSteps: 10961,
        minutesActive: 188,
        flightsOfStairs: 17,
      },
      {
        userID: 1,
        date: "2019/06/20",
        numSteps: 14478,
        minutesActive: 140,
        flightsOfStairs: 12,
      },
      {
        userID: 2,
        date: "2019/06/20",
        numSteps: 8153,
        minutesActive: 74,
        flightsOfStairs: 10,
      },
      {
        userID: 3,
        date: "2019/06/20",
        numSteps: 5369,
        minutesActive: 129,
        flightsOfStairs: 46,
      },
      {
        userID: 1,
        date: "2019/06/21",
        numSteps: 6760,
        minutesActive: 135,
        flightsOfStairs: 6,
      },
      {
        userID: 2,
        date: "2019/06/21",
        numSteps: 10225,
        minutesActive: 174,
        flightsOfStairs: 26,
      },
      {
        userID: 3,
        date: "2019/06/21",
        numSteps: 7498,
        minutesActive: 199,
        flightsOfStairs: 13,
      },
      {
        userID: 1,
        date: "2019/06/22",
        numSteps: 10289,
        minutesActive: 119,
        flightsOfStairs: 6,
      },
      {
        userID: 2,
        date: "2019/06/22",
        numSteps: 3605,
        minutesActive: 124,
        flightsOfStairs: 31,
      },
      {
        userID: 3,
        date: "2019/06/22",
        numSteps: 11342,
        minutesActive: 53,
        flightsOfStairs: 17,
      },
      {
        userID: 1,
        date: "2019/06/23",
        numSteps: 13928,
        minutesActive: 218,
        flightsOfStairs: 21,
      },
      {
        userID: 2,
        date: "2019/06/23",
        numSteps: 4148,
        minutesActive: 142,
        flightsOfStairs: 0,
      },
      {
        userID: 3,
        date: "2019/06/23",
        numSteps: 4665,
        minutesActive: 219,
        flightsOfStairs: 9,
      },
    ];

    activity1 = new Activity(1, activityData);
    userRepository1 = new UserRepository(userDataSet);
    user1 = userRepository1.createUser(1);
    user1Stride = user1.strideLength;
  });

  it("should be a function", () => {
    expect(Activity).to.be.a("function");
  });

  it("should be an instance of Activity", () => {
    expect(activity1).to.be.an.instanceOf(Activity);
  });

  it("should accept a User and take the id", () => {
    expect(activity1.userId).to.equal(1);
  });

  it("should accept activity API data", () => {
    let userOneData = activityData.filter((user) => user.userID === 1);
    expect(activity1.activityData).to.eql(userOneData);
  });

  it("should return most recent recorded number of steps for a user", () => {
    expect(activity1.getLastRecordedSteps()).to.equal(13928);
  });

  it("should calculate and return miles user has walked for a specific day", () => {
    expect(activity1.calculateMilesWalked(user1)).to.equal("11.34");
  });

  it("should return how many minutes they were active", () => {
    expect(activity1.getMinutesActive()).to.equal(218);
  });

  it("should show avergae of minutes active for last recorded week", () => {
    expect(activity1.calculateWeeksAvg()).to.equal("174.29");
  });

  it("should return if they achieved their step goal for the day", () => {
    expect(activity1.isStepGoalAchieved(user1)).to.equal(true);
  });

  it("should return list of dates that they exceeded their step goal", () => {
    expect(activity1.exceededStepGoal(user1)).to.eql([
      "2019/06/17",
      "2019/06/20",
      "2019/06/22",
      "2019/06/23",
    ]);
  });

  it("should find the most stairs theyve ever climbed", () => {
    expect(activity1.getMostStairsClimbed()).to.equal(36);
  });

  it("should be able to store all users activity data", () => {
    expect(activity1.allUsersActivityData).to.eql(activityData);
  });

  it("should return all users average for stairs climbed, steps taken, minutes active for latest day", () => {
    expect(activity1.lastDayAllAvg()).to.eql({ steps: 7580, minutes: 193, flights: 10})
  });

  it("should return last weeks worth of steps", () => {
    expect(activity1.lastWeeksData('numSteps')).to.eql([14329, 4419, 8429, 14478, 6760, 10289, 13928])
    expect(activity1.lastWeeksData('minutesActive')).to.eql([168, 165, 275, 140, 135, 119, 218])
    expect(activity1.lastWeeksData('flightsOfStairs')).to.eql([18, 33, 2, 12, 6, 6, 21])
  })
});
