import "./css/styles.css";
import "./images/turing-logo.png";
import "./images/menu-dots.svg";
import "./images/sexual-activity.svg";
import "./images/sleep.svg";
import "./images/water.svg";
// import userData from "./data/users";
import UserRepository from "./UserRepository";
import User from "./User";
import Hydration from "./Hydration";
import Sleep from "./Sleep";
import {
  fetchUserData,
  fetchSleepData,
  fetchActivityData,
  fetchHydrationData,
} from "./apiCalls.js";
import { Datepicker } from "vanillajs-datepicker";

// let apiUserData;
// let apiHydrationData;
// let apiSleepData;
let currentUserRepository;
let currentUser;
let currentHydration;
let currentSleep;

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
const allTimeUserHourAvg = document.getElementById("allTimeUserHourAvg");
const allTimeUserQualityAvg = document.getElementById("allTimeUserQualityAvg");

// const elem = document.getElementById("foo");

// const datePicker = new Datepicker(elem, {});

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

const promiseAll = () => {
  Promise.all([
    fetchUserData(),
    fetchSleepData(),
    fetchActivityData(),
    fetchHydrationData(),
  ]).then((data) => {
    const apiUserData = data[0].userData;
    const apiHydrationData = data[3].hydrationData;
    const apiSleepData = data[1].sleepData;
    const id = getRandomIndex(apiUserData);
    instantiateUserRepository(apiUserData);
    instantiateUser(id);
    instantiateHydration(id, apiHydrationData);
    updateUserCard();
    updateHydrationCard();
    greetUser();
    instantiateSleep(id, apiSleepData);
    updateSleepCard();
    // (data[1]),
    // (data[2]),
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
  dailyHydration.innerText = `${currentHydration.findOzByLast()} Oz`;
  // weeklyHydration.innerText = `${currentHydration.getWeeksWater()}`;
};

const updateSleepCard = () => {
  console.log(">>>updateSleepCard");
  oneNightsHours.innerText = `One Night: ${currentSleep.getSleepHoursByDate()}`;
  oneNightsQuality.innerText = `One Night Quality: ${currentSleep.getSleepQualityByDate()}`;
  oneWeeksHours.innerText = `One Week: ${currentSleep.getWeeklyHoursSlept()}`;
  oneWeeksQuality.innerText = `One Week Quality: ${currentSleep.getWeeklySleepQuality()}`;
  allTimeUserHourAvg.innerText = `All Time Hours Average: ${currentSleep.getAverageSleepHours()}`;
  allTimeUserSleepQualityAvg.innerText = `All Time Quality Average: ${currentSleep.getAverageSleepQuality()}`;
};

const loadPage = () => {
  promiseAll();
};

window.onload = loadPage;
