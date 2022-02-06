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
    user2 = new User(userData2);
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

  it("should take in the users id", () => {
    expect(user1.id).to.equal(userData1.id);
    expect(user1.id).to.equal(1);
    expect(user2.id).to.equal(userData2.id);
    expect(user2.id).to.equal(2);
  });

  it("should take in the users name", () => {
    expect(user1.name).to.equal(userData1.name);
    expect(user1.name).to.equal("Luisa Hane");
    expect(user2.name).to.equal(userData2.name);
    expect(user2.name).to.equal("Jarvis Considine");
  });

  it("should take in the users adress", () => {
    expect(user1.address).to.equal(userData1.address);
    expect(user1.address).to.equal(
      "15195 Nakia Tunnel, Erdmanport VA 19901-1697"
    );
    expect(user2.address).to.equal(userData2.address);
    expect(user2.address).to.equal("30086 Kathryn Port, Ciceroland NE 07273");
  });

  it("should take in the users email adress", () => {
    expect(user1.email).to.equal(userData1.email);
    expect(user1.email).to.equal("Diana.Hayes1@hotmail.com");
    expect(user2.email).to.equal(userData2.email);
    expect(user2.email).to.equal("Dimitri.Bechtelar11@gmail.com");
  });

  it("should take in the users stide length", () => {
    expect(user1.strideLength).to.equal(userData1.strideLength);
    expect(user1.strideLength).to.equal(4.3);
    expect(user2.strideLength).to.equal(userData2.strideLength);
    expect(user2.strideLength).to.equal(4.5);
  });

  it("should take in the users step goal", () => {
    expect(user1.dailyStepGoal).to.equal(userData1.dailyStepGoal);
    expect(user1.dailyStepGoal).to.equal(10000);
    expect(user2.dailyStepGoal).to.equal(userData2.dailyStepGoal);
    expect(user2.dailyStepGoal).to.equal(5000);
  });

  it("should take in the users friends", () => {
    expect(user1.friends).to.eql(userData1.friends);
    expect(user1.friends).to.eql([16, 4, 8]);
    expect(user2.friends).to.eql(userData2.friends);
    expect(user2.friends).to.eql([9, 18, 24, 19]);
  });

  it("should return the users first name", () => {
    expect(user1.getFirstName()).to.equal("Luisa")
    expect(user1.getFirstName()).to.equal("Jarvis")
  });
});
