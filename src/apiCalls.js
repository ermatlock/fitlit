// //FETCH calls
//
const fetchUserData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then((response) => response.json())
  .catch(error => console.log(error))
}


const fetchSleepData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
    .then((response) => response.json())
    .catch(error => console.log(error))
}

const fetchActivityData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
    .then((response) => response.json())
    .catch(error => console.log(error))

}

const fetchHydrationData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
    .then((response) => response.json())
    .catch(error => console.log(error))
};


export {fetchUserData, fetchSleepData, fetchActivityData, fetchHydrationData};

// export defualt {fetchUserData, fetchSleepData, fetchActivityData, fetchHydrationData};


//POST request
