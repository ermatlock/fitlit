import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
let userRepository1

  beforeEach( () => {
    userRepository1 = new UserRepository()
  })

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of userRepository', () => {
    expect(userRepository1).to.be.an.instanceOf(UserRepository)
  })

  it('should accept user data', () => {
    expect(userRepository.data).to.equal()
  })
});
