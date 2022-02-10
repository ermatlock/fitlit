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
import {
  fetchUserData,
  fetchSleepData,
  fetchActivityData,
  fetchHydrationData,
} from "./apiCalls.js";

let apiUserData;
let apiHydrationData;
let currentUserRepository;
let currentUser;
let currentHydration;

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

const promiseAll = () => {
  Promise.all([
    fetchUserData(),
    fetchSleepData(),
    fetchActivityData(),
    fetchHydrationData(),
  ]).then((data) => {
    apiUserData = data[0].userData;
    apiHydrationData = data[3].hydrationData;
    const id = getRandomIndex(apiUserData);
    instantiateUserRepository(apiUserData);
    instantiateUser(id);
    instantiateHydration(id, apiHydrationData);
    updateUserCard();
    updateHydrationCard();
    greetUser();
    // (data[1]),
    // (data[2]),
  });
  // .catch((error) => console.log(error));
  // //^^make a modal for error message
};

const greetUser = () => {
  welcome.innerText = `Welcome ${currentUser.getFirstName()}`;
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
  // will eventually receive argument from user
  console.log(">>>updateHydrationCard");
  dailyHydration.innerText = `${currentHydration.findOzByDate("2019/10/31")}`;
  weeklyHydration.innerText = `${currentHydration.getWeeksWater("2019/10/20")}`;
};

const loadPage = () => {
  promiseAll();
};

window.onload = loadPage;
