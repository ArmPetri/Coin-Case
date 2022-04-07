# Coin-Case

Crypto Portfolio Tracker
Inspired by https://www.coingecko.com and using its API.

[Deployed site here](https://coin-case.netlify.app/)

## Technologies
React - Styled Components - HTML - CSS - Javascript

## Core Packages
- React Router - Routing
- Styling - Styled Components
- React-responsive
- React spinners
- Network calls - Axios
- Global state management - React Context API
- API - Coingecko

## Features
- Login/Signup
- See top 100 cryptocurrencies (per market cap)
- Change base Currency (USD/EUR)
- See more detailed information about a specific coin
- Keep track of your crypto portfolio
  - Add/Remove Coins to/from Portfolio
  - Add Transactions to Portfolio
  - Track the performance
- Coin Converter

## Running Locally
1. Clone the repo
`git clone https://github.com/ArmPetri/Coin-Case.git`
2. Go to the app directory
`cd Coin-Case`
3. Install packages
`npm install`
4. Open Project in the code editor  
At the root of the project open .env_sample and rename it to .env. 
You will need to replace the content inside of .env with your Firebase config keys. found in your Firebase project settings.  
In order to do that you will need to set up a Firebase project.  

### Firebase Setup
1. First, you will need to create a Firebase project and get all the necessary keys in order to be able to use authentication and a database.  
[Firebase Console](https://console.firebase.google.com/u/0/). 

2. Add a web app.  
![Firebase _1_2](https://user-images.githubusercontent.com/73338612/157653668-1dca06c7-19e8-42cc-aa9b-5a865536a01b.png)

3. Copy all the keys from firebase configuration (firebaseConfig) to .env file. 

![Firebase_3](https://user-images.githubusercontent.com/73338612/157653627-4b1af924-9b9a-4061-9d11-2a1664233885.png)

4. Add user authentication with email/password. 

![Firebase_4](https://user-images.githubusercontent.com/73338612/157653698-e974c5d3-2aa5-4f72-bb84-4fb8337c3388.png)

5. Create a Firestore Database. 

![Firebase_5](https://user-images.githubusercontent.com/73338612/157653729-0b759cc7-0e63-45ff-88af-023e55db6507.png)

6. Now you should be able to use all the application features related to Firebase. 
Run `npm start` And it should open [http://localhost:3000](http://localhost:3000) in your browser. 
  
  ***In order to access the portfolio page, you will need to create a user**



## UI
### Home
![home](https://user-images.githubusercontent.com/73338612/157529812-ca6a2c78-5890-48a9-bb69-1b108895e91f.png)

### Coins
![coins](https://user-images.githubusercontent.com/73338612/157530071-34bcdbd4-8439-4836-a8fc-cedf73c3e5ba.png)

### Search Coin
![searchcoin](https://user-images.githubusercontent.com/73338612/157530297-59498f97-0371-486f-94b8-1ae9944a7316.png)

### Login/Signup
![login_signup](https://user-images.githubusercontent.com/73338612/157532968-e6e3f7a1-cc9a-49e2-a135-e283b02dcb6b.png)

### Portfolio
![portfolio](https://user-images.githubusercontent.com/73338612/157532009-524587be-1eea-494e-8adb-2390384b3e84.png)

### Add Transaction/View Transactions
![add_view](https://user-images.githubusercontent.com/73338612/157532353-4e676873-012b-49a9-9d89-069b7cfeae7f.png)

### Converter
![converter](https://user-images.githubusercontent.com/73338612/157532552-58b59da9-9dbf-446b-addf-5db2c1e360c2.png)
