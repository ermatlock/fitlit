import "./css/styles.css";
import "./images/turing-logo.png";
import "./images/menu-dots.svg";
import "./images/sexual-activity.svg";
import "./images/sleep.svg";
import "./images/water.svg";
import userData from "./data/users";
import UserRepository from "./UserRepository";
import User from "./User";

let currentUserRepository = new UserRepository(userData);
let currentUser;

const userName = document.getElementById("userName");
const userAddress = document.getElementById("userAddress");
const userEmail = document.getElementById("userEmail");
const userStrideLength = document.getElementById("userStrideLength");
const userDailyStep = document.getElementById("userDailyStep");
const userFriends = document.getElementById("userFriends");

const instantiateUser = (id) => {
  console.log(">>>instantiateUser");
  currentUser = currentUserRepository.createUser(id);
};

const updateUserCard = (id) => {
  console.log(">>>updateUserCard");
  instantiateUser(id);
  userName.innerText = currentUser.getFirstName();
  userAddress.innerText = currentUser.address;
  userEmail.innerText = currentUser.email;
  userStrideLength.innerText = currentUser.strideLength;
  userDailyStep.innerText = currentUser.dailyStepGoal;
  // userFriends.innerText = currentUser.friends;
};

window.onload = updateUserCard(5);
