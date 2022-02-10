import { expect } from "chai";
import Hydration from "../src/Hydration";
import UserRepository from "../src/UserRepository";
import User from "../src/User";


describe('Hydration', () => {
let hydration1;

  beforeEach( () => {
    hydration1 = new Hydration()
  })

  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  })

  it('should be an instance of hydration', () => {
    expect(hydration1).to.be.an.instanceOf(Hydration)
  })

  it('should ')
})
