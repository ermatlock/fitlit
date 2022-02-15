import "./css/styles.css";
import "./images/turing-logo.png";
import "./images/menu-dots.svg";
import "./images/run.svg";
import "./images/sleep.svg";
import "./images/droplet.png";
import "./images/user.png";
import "./images/waves.png"
import "./images/sleeping.png"

import UserRepository from "./UserRepository";
import User from "./User";
import Hydration from "./Hydration";
import Sleep from "./Sleep";
import Activity from "./Activity";
import {
	fetchUserData,
	fetchSleepData,
	fetchActivityData,
	fetchHydrationData,
} from "./apiCalls.js";

// let apiUserData;
// let apiHydrationData;
// let apiSleepData;
let currentUserRepository;
let currentUser;
let currentHydration;
let currentSleep;
let currentActivity;

const welcome = document.getElementById("welcome");
const userName = document.getElementById("userName");
const userAddress = document.getElementById("userAddress");
const userEmail = document.getElementById("userEmail");
const userStrideLength = document.getElementById("userStrideLength");
const userDailyStep = document.getElementById("userDailyStep");
const compareStepGoal = document.getElementById("compareStepGoal");
const userFriends = document.getElementById("userFriends");
const dailyHydration = document.getElementById("dailyHydration");
const weeklyHydration = document.getElementById("weeklyHydration");
const oneNightsHours = document.getElementById("oneNightsHours");
const oneNightsQuality = document.getElementById("oneNightsQuality");
const oneWeeksHours = document.getElementById("oneWeeksHours");
const oneWeeksQuality = document.getElementById("oneWeeksQuality");
const allTimeAvg = document.getElementById("allTimeAvg");
// const allTimeUserQualityAvg = document.getElementById("allTimeUserQualityAvg");
const todaySteps = document.getElementById("todaySteps");

const getRandomIndex = (array) => {
	return Math.floor(Math.random() * array.length);
};

const instantiateUserRepository = (data) => {
	currentUserRepository = new UserRepository(data);
};

const instantiateUser = (id) => {
	currentUser = currentUserRepository.createUser(id);
};

const instantiateHydration = (id, apiData) => {
	currentHydration = new Hydration(id, apiData);
};

const instantiateSleep = (id, sleepData) => {
	currentSleep = new Sleep(id, sleepData);
};

const instantiateActivity = (id, activityData) => {
	currentActivity = new Activity(id, activityData);
};

const promiseAll = () => {
	Promise.all([
		fetchUserData(),
		fetchSleepData(),
		fetchActivityData(),
		fetchHydrationData(),
	]).then((data) => {
		const apiUserData = data[0].userData;
		const apiSleepData = data[1].sleepData;
		const apiActivityData = data[2].activityData;
		const apiHydrationData = data[3].hydrationData;
		const id = getRandomIndex(apiUserData);
		instantiateUserRepository(apiUserData);
		instantiateUser(id);
		greetUser();
		updateUserCard();
		instantiateHydration(id, apiHydrationData);
		updateHydrationCard();
		instantiateSleep(id, apiSleepData);
		updateSleepCard();
		instantiateActivity(id, apiActivityData);
		updateActivityCard();

		// chart1(myChart, data[0])
	});
	// .catch((error) => console.log(error));
	// //^^make a modal for error message
};

const greetUser = () => {
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
	// userFriends.innerText = currentUser.friends;
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
}



const updateSleepCard = () => {
	oneNightsHours.innerText = `${currentSleep.getSleepHoursByDate()}`;
	oneNightsQuality.innerText = `${currentSleep.getSleepQualityByDate()}`;
	updateSleepExpanded()
};

const updateSleepExpanded = () => {
	const weeksSleep = currentSleep.getWeeklyHoursSlept()
	const weeksQuality = currentSleep.getWeeklySleepQuality()
	// oneWeeksHours.innerText = `One Week: ${currentSleep.getWeeklyHoursSlept()}`;
	// oneWeeksQuality.innerText = `One Week Quality: ${currentSleep.getWeeklySleepQuality()}`;
	allTimeAvg.innerText = `Most people average ${currentSleep.getAverageSleepHours()} hours of sleep with a sleep quality of ${currentSleep.getAverageSleepQuality()}`;
	// oneWeeksHours.innerHTML = ''
	weeksSleep.forEach((hours, index) => {
		oneWeeksHours.innerHTML += `
    <ul>
      <h3>DAY ${index +1}</h3>
      <h2>${hours}</h2>
    </ul>`
	})
	// oneWeeksQuality.innerHTML = ''
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

const loadPage = () => {
	promiseAll();
};

window.onload = loadPage;

export default promiseAll