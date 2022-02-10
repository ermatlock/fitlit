import User from "./User";

class Hydration {
  constructor (user, apiData) {
    this.userId = user.id
    this.hydrationData  = apiData.filter(person => person.userID === this.userId )
  }


}

export default Hydration
