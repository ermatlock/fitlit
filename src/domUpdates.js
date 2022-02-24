let domUpdates = {
  greetUser = () => {
    welcome.innerText = `Welcome, ${currentUser.getFirstName()}`;
  };

  const updateUserCard = () => {
    console.log(">>>updateUserCard");
    userName.innerText = currentUser.getFirstName();
    userAddress.innerText = currentUser.address;
    userEmail.innerText = currentUser.email;
    userStrideLength.innerText = currentUser.strideLength;
    compareStepGoal.innerText = `You: ${
      currentUser.dailyStepGoal
    }. Average: ${currentUserRepository.returnStepGoal()}.`;
  };

  const updateHydrationCard = () => {
    console.log(">>>updateHydrationCard");
    dailyHydration.innerText = `${currentHydration.findOzByLast()}`;
    updateHydrationExpanded()
  };

  const updateHydrationExpanded = () => {
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
  };

  const updateSleepCard = () => {
    oneNightsHours.innerText = `${currentSleep.getSleepHoursByDate()}`;
    oneNightsQuality.innerText = `${currentSleep.getSleepQualityByDate()}`;
    updateSleepExpanded()
  };

  const updateSleepExpanded = () => {
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

  }

  const updateActivityCard = () => {
    console.log(currentActivity.getLastRecordedSteps());
    todaySteps.innerText = `${currentActivity.getLastRecordedSteps()}`;
  };

}









export default domUpdates;
