# FitLit 

Fitlit is a web application that displays a dashboard of user information from steps, sleeps, hydration, miles and minutes active. Weekly data in coveniently displayed on charts. The user has the ability to input this data themselves.

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
- Charts.js

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
   
## View Site
After starting both servers, project will run at http://localhost:8080/  
   
## Run Test

1. In your terminal, to run a test
   ```sh
   npm test
   ```


# Code Architecture 
If you want to know more about our code architecture, [click here](https://gist.github.com/Ekaiman/f0c6022e295921a810e7531a4d38f9b0).

# Challenges and Wins
A challenge and win in this project was learning how to use API fetch calls and drilling into the data to get the information we need. The charts.js, getting charts to display were both a challenge and a win. Posting to the API was a win for the team.

# Future Additions
- User receives randomized activity prompt to encourage good habits.
- User interation, ability to pick a date.
- After user inputs data for the day, make page refresh to show current data.
- Sad path testing.

