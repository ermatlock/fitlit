let domUpdates = {
  greetUser(currentUser) {
    welcome.innerText = `Welcome, ${currentUser.getFirstName()}`
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
    const hydration = currentHydration.getWeeksWater()
    weeklyHydration.innerHTML = ''
    return hydration.forEach((ounces, index) => {
      weeklyHydration.innerHTML += `
      <ul>
        <h3>DAY ${index +1}</h3>
        <h2>${ounces}</h2>
        <h3>OZ</h3>
      </ul>`
    })
  },

  updateSleepCard(currentSleep) {
    oneNightsHours.innerText = `${currentSleep.getSleepHoursByDate()}`;
    oneNightsQuality.innerText = `${currentSleep.getSleepQualityByDate()}`;
  },

  updateSleepExpanded(currentSleep) {
    const weeksSleep = currentSleep.getWeeklyHoursSlept()
    const weeksQuality = currentSleep.getWeeklySleepQuality()
    allTimeAvg.innerText = `Most people average ${currentSleep.getAverageSleepHours()} hours of sleep with a sleep quality of ${currentSleep.getAverageSleepQuality()}`;
    weeksSleep.forEach((hours, index) => {
      oneWeeksHours.innerHTML += `
      <ul>
        <h3>DAY ${index +1}</h3>
        <h2>${hours}</h2>
      </ul>`
    })
    weeksQuality.forEach((quality, index) => {
      oneWeeksQuality.innerHTML += `
        <ul>
          <h3>DAY ${index +1}</h3>
          <h2>${quality}</h2>
        </ul>`
    })
  },

  updateActivityCard(currentActivity, apiUserData) {
    todaySteps.innerText = `${currentActivity.getLastRecordedSteps()}`;
    milesWalked.innerText = `${currentActivity.calculateMilesWalked(apiUserData)}`;
  }
};


export default domUpdates;
