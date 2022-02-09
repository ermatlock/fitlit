import "./css/styles.css";
import "./images/turing-logo.png";
import userData from "./data/users";
import UserRepository from "./UserRepository";
import User from "./User";

const currentUserRepository = new UserRepository();
let currentUser;

const userName = document.getElementById("userName");
const userAddress = document.getElementById("userAddress");
const userEmail = document.getElementById("userEmail");
const userStrideLength = document.getElementById("userStrideLength");
const userDailyStep = document.getElementById("userDailyStep");
const userFriends = document.getElementById("userFriends");

const createUser = (id) => {
  currentUser = currentUserRepository.createUser(id);
};

const updateUserCard = (id) => {
  createUser(5);
  userName.innerText = currentUser.getFirstName();
  userAddress.innerText = currentUser.address;
  user;
};
