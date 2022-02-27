import {
  updateHydrationChart,
  updateSleepChart,
  updateWeeklyActivity,
} from "./ourCharts";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

const errorMessage = document.getElementById("errorMessage");

// When the user clicks on the button, open the modal
// showError(message) {
//   errorMessage.innerText = message
//   modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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
    // weeklyHydration.innerHTML = ''
    // return hydration.forEach((ounces, index) => {
    //   weeklyHydration.innerHTML += `
    //   <ul>
    //     <h3>DAY ${index +1}</h3>
    //     <h2>${ounces}</h2>
    //     <h3>OZ</h3>
    //   </ul>`
    // })
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
    // weeksSleep.forEach((hours, index) => {
    //   oneWeeksHours.innerHTML += `
    //   <ul>
    //     <h3>DAY ${index + 1}</h3>
    //     <h2>${hours}</h2>
    //   </ul>`;
    // });
    // weeksQuality.forEach((quality, index) => {
    //   oneWeeksQuality.innerHTML += `
    //     <ul>
    //       <h3>DAY ${index + 1}</h3>
    //       <h2>${quality}</h2>
    //     </ul>`;
    // });
  },

  updateActivityCard(currentActivity, currentUser) {
    todaySteps.innerText = `${currentActivity.getLastRecordedSteps()}`;
    milesWalked.innerText = `${currentActivity.calculateMilesWalked(
      currentUser
    )}`;
  },

  // updateActivityExpanded() {},
};

export default domUpdates;
