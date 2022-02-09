// //FETCH calls
//

const fetchUserData = fetch("https://fitlit-api.herokuapp.com/api/v1/users").then((response) => response.json());

const fetchSleepData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
    .then((response) => response.json())

};

const fetchActivityData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
    .then((response) => response.json())

};

const fetchHydrationData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
    .then((response) => response.json())
};


export {fetchUserData, fetchSleepData, fetchActivityData, fetchHydrationData};

// export defualt {fetchUserData, fetchSleepData, fetchActivityData, fetchHydrationData};


//POST request
