import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
let userRepository

  beforeEach( () => {
    userRepository = new UserRepository()
  })

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of userRepository', () => {
    expect(userRepository).to.be.an.instanceOf(UserRepository)
  })
});
