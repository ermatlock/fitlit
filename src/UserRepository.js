import User from './User';

class UserRepository {
  constructor(data){
    this.data = data
  }

  returnUserData(id){
    const oneUser = this.data.find(user => user.id === id)
    return new User(oneUser)
  }
}

export default UserRepository;
