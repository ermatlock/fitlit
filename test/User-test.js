import { expect } from "chai";
import User from "../src/User";

describe("User", () => {
  let userData1;
  let userData2;
  let user1;
  let user2;

  beforeEach(() => {
    userData1 = {
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8],
    };

    userData2 = {
      id: 2,
      name: "Jarvis Considine",
      address: "30086 Kathryn Port, Ciceroland NE 07273",
      email: "Dimitri.Bechtelar11@gmail.com",
      strideLength: 4.5,
      dailyStepGoal: 5000,
      friends: [9, 18, 24, 19],
    };

    user1 = new User(userData1);
    user2 = new User(userData2)
  });

  it("should be a function", function () {
    expect(User).to.be.a("function");
  });

  it("should be an instance of userRepository", () => {
    expect(user1).to.be.an.instanceOf(User);
  });

  // it("should store a users data", () => {
  //   expect(user1.data).to.equal(userData1)
  // })

  it('should take in the users id', () => {
    expect(user1.id).to.equal(userData1.id)
    expect(user1.id).to.equal(1)
    expect(user2.id).to.equal(userData2.id)
    expect(user2.id).to.equal(2)
  })

});
