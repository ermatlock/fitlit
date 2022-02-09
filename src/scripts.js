import "./css/styles.css";
import "./images/turing-logo.png";
import "./images/menu-dots.svg";
import "./images/sexual-activity.svg";
import "./images/sleep.svg";
import "./images/water.svg";
import userData from "./data/users";
import UserRepository from "./UserRepository";
import User from "./User";
import {
  fetchUserData,
  fetchSleepData,
  fetchActivityData,
  fetchHydrationData
} from "./apiCalls.js";

let apiUserData;
let currentUserRepository;
let currentUser;

const welcome = document.getElementById("welcome");
const userName = document.getElementById("userName");
const userAddress = document.getElementById("userAddress");
const userEmail = document.getElementById("userEmail");
const userStrideLength = document.getElementById("userStrideLength");
const userDailyStep = document.getElementById("userDailyStep");
const compareStepGoal = document.getElementById("compareStepGoal");
const userFriends = document.getElementById("userFriends");


const instantiateUserRepository = (data) => {
  // console.log(">>>instantiateUserREPOOO");
  currentUserRepository = new UserRepository(data);
};

const promiseAll = () => {
  Promise.all([fetchUserData(), fetchSleepData, fetchActivityData, fetchHydrationData]).then(data => {
    apiUserData = (data[0])
    console.log("THIS IS DATA", data[0])
    // (data[1]),
    // (data[2]),
    // (data[3])
  })
  //
  // .catch((error) => console.log(error));
  // //^^make a modal for error message
};

const greetUser = () => {
  welcome.innerText = `Welcome ${currentUser.getFirstName()}`;
};

const instantiateUser = (id) => {
  console.log(">>>instantiateUser");
  currentUser = currentUserRepository.createUser(id);
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


const loadPage = () => {
  promiseAll();
  instantiateUserRepository(apiUserData);
  // console.log("TEEESTTTTT", promiseAll())
  instantiateUser(5);
  updateUserCard();
  greetUser();
};


window.onload = loadPage;
