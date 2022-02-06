import { expect } from "chai";
import UserRepository from "./UserRepository.js"


describe('UserRepository', () => {

  beforeEach( () => {
    userRepository = new UserRepository()
  })

  it('should be a function', () => {
    expect(UserRepository).to.be.an.instanceOf(userRepository)
  })
})
