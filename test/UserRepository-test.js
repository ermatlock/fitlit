import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {

  beforeEach( () => {
    userRepository = new UserRepository()
  })

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });
});
