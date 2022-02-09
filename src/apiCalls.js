// //FETCH calls
//
export const fetchUserData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then((response) => response.json())
  .then(data => console.log(data))
  .catch((error) => console.log(error));
};

export const fetchSleepData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
  .then((response) => response.json())
  .then(data => console.log(data))
  .catch((error) => console.log(error));
};

export const fetchActivityData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
  .then((response) => response.json())
  .then(data => console.log(data))
  .catch((error) => console.log(error));
};

export const fetchHydrationData = () => {
  return fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
  .then((response) => response.json())
  .then(data => console.log(data))
  .catch((error) => console.log(error));
};

export const promiseAll = () => {
  return Promise.all([fetchUserData(), fetchSleepData(), fetchActivityData(), fetchHydrationData()])
};


//POST request
