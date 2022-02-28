import {
  updateHydrationChart,
  updateSleepChart,
  updateWeeklySteps,
  updateWeeklyStairs,
  updateWeeklyMinutes,
  updateSleepQualityChart
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
    allTimeAvg.innerText = `Most people average ${currentSleep.getAverageSleepHours()} hours of sleep with a sleep quality of ${currentSleep.getAverageSleepQuality()}`;
    const weeksSleep = currentSleep.getWeeklyHoursSlept();
    const weeksQuality = currentSleep.getWeeklySleepQuality();
    updateSleepChart(weeksSleep);
    updateSleepQualityChart(weeksQuality)

  },

  updateActivityCard(currentActivity, currentUser) {
    todaySteps.innerText = `${currentActivity.getLastRecordedSteps()}`;
    milesWalked.innerText = `${currentActivity.calculateMilesWalked(
      currentUser
    )}`;
    minutesActive.innerText = `${currentActivity.getMinutesActive()}`;
  },

  updateActivityExpanded(currentActivity) {
    const weeklySteps = currentActivity.lastWeeksData('numSteps')
    const weeklyMinutes = currentActivity.lastWeeksData('minutesActive')
    const weeklyStairs = currentActivity.lastWeeksData('flightsOfStairs')
    updateWeeklySteps(weeklySteps)
    updateWeeklyMinutes(weeklyMinutes)
    updateWeeklyStairs(weeklyStairs)
    allStepAvg.innerText = `You did ${currentActivity.getLastRecordedSteps()} steps. Most people averaged ${currentActivity.lastDayAllAvg().steps} steps`
    allStairsAvg.innerText = `You were active for ${currentActivity.getMinutesActive()} minutes. Most people were active for ${currentActivity.lastDayAllAvg().minutes} minutes`
    allMinutesAvg.innerText = `You climbed ${currentActivity.getLastRecordedFlights()} flights of stairs. Most people averaged ${currentActivity.lastDayAllAvg().flights} flights`


  },
};

export default domUpdates;
