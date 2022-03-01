import domUpdates from "./domUpdates";

// //FETCH calls

const fetchUserData = () => {
  return fetch("http://localhost:3001/api/v1/users")
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      domUpdates.showError(
        "Sorry, we were unable to retrieve your data. Please contact @nikseif to file a complaint"
      );
    });
};

const fetchSleepData = () => {
  return fetch("http://localhost:3001/api/v1/sleep")
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      domUpdates.showError(
        "Sorry, we were unable to retrieve your data. Please contact @sertmer to file a complaint"
      );
    });
};

const fetchActivityData = () => {
  return fetch("http://localhost:3001/api/v1/activity	")
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      domUpdates.showError(
        "Sorry, we were unable to retrieve your data. Please contact @sertmer to file a complaint"
      );
    });
};

const fetchHydrationData = () => {
  return fetch("http://localhost:3001/api/v1/hydration")
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      domUpdates.showError(
        "Sorry, we were unable to retrieve your data. Please contact @sertmer to file a complaint"
      );
    });
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
  }).catch((error) => {
    console.log(error);
    domUpdates.showError(
      "Sorry, we were unable to record your data. Please contact @hfaerber to file a complaint"
    );
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
  }).catch((error) => {
    console.log(error),
      domUpdates.showError(
        "Sorry, we were unable to record your data. Please contact @hfaerber to file a complaint"
      );
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
  }).catch((error) => {
    console.log(error);
    domUpdates.showError(
      "Sorry, we were unable to record your data. Please contact @hfaerber to file a complaint"
    );
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
