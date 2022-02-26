// //FETCH calls
//
const fetchUserData = () => {
  return fetch("http://localhost:3001/api/v1/users")
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const fetchSleepData = () => {
  return fetch("http://localhost:3001/api/v1/sleep")
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const fetchActivityData = () => {
  return fetch("http://localhost:3001/api/v1/activity	")
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const fetchHydrationData = () => {
  return fetch("http://localhost:3001/api/v1/hydration")
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

//~~~~~~ POST ~~~~~~~

const postHydration = (id, date, numOunces) => {
  return fetch("http://localhost:3001/api/v1/hydration", {
    method: "POST",
    body: JSON.stringify({
      userID: id,
      date: date,
      numOunces: numOunces,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

const postSleep = (id, date, hoursSlept, sleepQuality) => {
  return fetch("http://localhost:3001/api/v1/sleep", {
    method: "POST",
    body: JSON.stringify({
      userID: id,
      date: date,
      hoursSlept: hoursSlept,
      sleepQuality: sleepQuality,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

const postActivity = (id, date, numSteps, minutesActive, flightsOfStairs) => {
  return fetch("http://localhost:3001/api/v1/activity", {
    method: "POST",
    body: JSON.stringify({
      userID: id,
      date: date,
      numSteps: numSteps,
      minutesActive: minutesActive,
      flightsOfStairs: flightsOfStairs,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

export {
  fetchUserData,
  fetchSleepData,
  fetchActivityData,
  fetchHydrationData,
  postHydration,
  postSleep,
  postActivity,
};

// export defualt {fetchUserData, fetchSleepData, fetchActivityData, fetchHydrationData};

//POST request
