import {
  updateHydrationChart,
  updateSleepChart,
  updateWeeklySteps,
  updateWeeklyStairs,
  updateWeeklyMinutes,
  updateSleepQualityChart,
} from "./ourCharts";

/*~~~~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~~~~~~*/
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const errorMessage = document.getElementById("errorMessage");

/*~~~~~~~~~~~~~~~EVENT LISTENERS~~~~~~~~~~~~~~~~~*/
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*~~~~~~~~~~DOM MANIPULATION FUNCTIONS~~~~~~~~~~~*/
let domUpdates = {
  showError(message) {
    errorMessage.innerText = message;
    modal.style.display = "block";
  },

  greetUser(currentUser) {
    welcome.innerText = `Welcome, ${currentUser.getFirstName()}`;
  },

  updateUserCard(currentUser, currentUserRepository) {
    userName.innerText = currentUser.getFirstName();
    userAddress.innerText = currentUser.address;
    userEmail.innerText = currentUser.email;
    userStrideLength.innerText = `Your stride length is ${currentUser.strideLength}`;
    compareStepGoal.innerHTML = `
    <p>Your step goal: ${currentUser.dailyStepGoal}.</p>
    <p>All user's average step goal: ${currentUserRepository.returnStepGoal()}.</p>
    `;
  },

  updateHydrationCard(currentHydration) {
    dailyHydration.innerText = `${currentHydration.findOzByLast()}`;
  },

  updateHydrationExpanded(currentHydration) {
    const hydration = currentHydration.getWeeksWater();
    updateHydrationChart(hydration);
  },

  updateSleepCard(currentSleep) {
    oneNightsHours.innerText = `${currentSleep.getSleepHoursByDate()}`;
    oneNightsQuality.innerText = `${currentSleep.getSleepQualityByDate()}`;
  },

  updateSleepExpanded(currentSleep) {
    allTimeAvg.innerText = `Most people average ${currentSleep.getAverageSleepHours()} hours of sleep with a sleep quality of ${currentSleep.getAverageSleepQuality()}`;
    const weeksSleep = currentSleep.getWeeklyHoursSlept();
    const weeksQuality = currentSleep.getWeeklySleepQuality();
    updateSleepChart(weeksSleep);
    updateSleepQualityChart(weeksQuality);
  },

  updateActivityCard(currentActivity, currentUser) {
    todaySteps.innerText = `${currentActivity.getLastRecordedSteps()}`;
    milesWalked.innerText = `${currentActivity.calculateMilesWalked(
      currentUser
    )}`;
    minutesActive.innerText = `${currentActivity.getMinutesActive()}`;
  },

  updateActivityExpanded(currentActivity) {
    const weeklySteps = currentActivity.lastWeeksData("numSteps");
    const weeklyMinutes = currentActivity.lastWeeksData("minutesActive");
    const weeklyStairs = currentActivity.lastWeeksData("flightsOfStairs");
    updateWeeklySteps(weeklySteps);
    updateWeeklyMinutes(weeklyMinutes);
    updateWeeklyStairs(weeklyStairs);
    allStepAvg.innerText = `You completed ${currentActivity.getLastRecordedSteps()} steps. Most people averaged ${
      currentActivity.lastDayAllAvg().steps
    } steps`;
    allStairsAvg.innerText = `You climbed ${currentActivity.getLastRecordedFlights()} flights of stairs. Most people averaged ${
      currentActivity.lastDayAllAvg().flights
    } flights`;
    allMinutesAvg.innerText = `You were active for ${currentActivity.getMinutesActive()} minutes. Most people were active for ${
      currentActivity.lastDayAllAvg().minutes
    } minutes`;
  },
};

export default domUpdates;
