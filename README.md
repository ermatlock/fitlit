# FitLit 

Fitlit is a web application that displays a dashboard of user information from steps to sleep and hydration. The application calculates and displays a users:


### Sleep

- most recently recorded sleep
- most recently recorded sleep quality
- every nights sleep for a week
- every nights sleep quality for a week
- average hours slept of all users
- average sleep quality of all users

### Hydration
- num ounces drank most recently 
- num ounces consumed for each day over the last week

<img width="1500" alt="Screen Shot 2022-02-14 at 7 02 29 PM" src="https://user-images.githubusercontent.com/93098905/153967660-cbd22873-5cff-40e2-9659-72bf662ac60b.png">

# Contributors
- [Emily Corcoran](https://github.com/Emily-Cathleen)
- [Eric Matlock](https://github.com/ermatlock)
- [Emili Kaiman](https://github.com/Ekaiman)

# Technologies Used 
- Javascript
- HTML
- CSS
- Mocha/Chai
- Webpack

# Getting Started
To get a local copy up and running follow these simple steps.

## Installation

1. In your terminal, clone the repo
   ```sh
   git clone git@github.com:ermatlock/fitlit.git
   ```
2. Next `cd` into that directory
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server
   ```sh
   npm start
   ```
   
## Local Server
1. In your terminal, clone the repo
   ```sh
   git@github.com:turingschool-examples/fitlit-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the server
   ```sh
   npm start
   ```

   
## Run Test

1. In your terminal, to run a test
   ```sh
   npm test
   ```
## View Site
1. In your terminal, to start the server.
   ```sh
   npm start
   ```
2. Project will run at http://localhost:8080/   

# Code Architecture 
If you want to know more about our code architecture, [click here](https://gist.github.com/Ekaiman/f0c6022e295921a810e7531a4d38f9b0).

# Challenges and Wins
A challenge and win in this project was learning how to use API fetch calls and drilling into the data to get the information we need. An ongoing challenge is chart.js a dependecy where userrs data will be displayed on a line graph for easier viewing.

# Future Additions
- User receives randomized activity prompt to encourage good habits.
- User interation, ability to pick a date
