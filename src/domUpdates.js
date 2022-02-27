import {
  updateHydrationChart,
  updateSleepChart,
  updateWeeklySteps,
  updateWeeklyStairs,
  updateWeeklyMinutes
} from "./ourCharts";

let domUpdates = {
  greetUser(currentUser) {
    welcome.innerText = `Welcome, ${currentUser.getFirstName()}`;
  },

  updateUserCard(currentUser, currentUserRepository) {
    userName.innerText = currentUser.getFirstName();
    userAddress.innerText = currentUser.address;
    userEmail.innerText = currentUser.email;
    userStrideLength.innerText = currentUser.strideLength;
    compareStepGoal.innerText = `You: ${
      currentUser.dailyStepGoal
    }. Average: ${currentUserRepository.returnStepGoal()}.`;
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
    const weeksSleep = currentSleep.getWeeklyHoursSlept();
    const weeksQuality = currentSleep.getWeeklySleepQuality();
    updateSleepChart(weeksSleep, weeksQuality);
    allTimeAvg.innerText = `Most people average ${currentSleep.getAverageSleepHours()} hours of sleep with a sleep quality of ${currentSleep.getAverageSleepQuality()}`;

  },

  updateActivityCard(currentActivity, currentUser) {
    todaySteps.innerText = `${currentActivity.getLastRecordedSteps()}`;
    milesWalked.innerText = `${currentActivity.calculateMilesWalked(
      currentUser
    )}`;
  },

  updateActivityExpanded(currentActivity) {
    const weeklySteps = currentActivity.lastWeeksData('numSteps')
    const weeklyMinutes = currentActivity.lastWeeksData('minutesActive')
    const weeklyStairs = currentActivity.lastWeeksData('flightsOfStairs')
    updateWeeklySteps(weeklySteps)
    updateWeeklyMinutes(weeklyMinutes)
    updateWeeklyStairs(weeklyStairs)
  },
};

export default domUpdates;
