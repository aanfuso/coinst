# Coinst

Simple trading view application where users can consume realtime information regarding the cryptocurrencies they select.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
Designed using [Material UI](https://github.com/mui).\
Automatically deployed with every commit with [Cloudflare](https://www.cloudflare.com/)\.

## Getting started

### Create your .env file

```
  cp .env.example .env.local
```

There is no need to update any information there since all the variables stored are of public knowledge.

## Running the project locally:

```
  npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Motivation

This project was made as a Frontend Code Test for [Coinroutes](https://www.coinroutes.com/).

The test includes the following 3 component requirements:
- [X] Top of Book
  - [X] Display the best bid and ask / quantity of the selected currency pair in real time
  - [X] **BONUS:** display the spread and 24 hour volume
- [X] Real Time Price Chart
  - [X] Display the current price of the chart
  - [ ] **BONUS:** display a historical chart for the selected pair
- [X] Order Book (Ladder)
  - [X] Displays an order book thta handles real time updates.
  - [ ] **BONUS:** Allow aggregating prices by set price increments.

General Bonuses:
  - [ ] Make the widgets configurable by the user
  - [X] Deploy the application

Extra ❤️:
  - [X] Responsive
  - [X] Light/Dark mode
