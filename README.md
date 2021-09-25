# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## What are we building?

This demo will create a basic weather app to randomly assign a weather pattern for the day, :sunny: :sun_behind_small_cloud: :cloud: :umbrella: etc. to a particular city that exists in our mocked up database

### Dependencies installed in this project

- `npm install react-router-dom`: To manage custom endpoints(urls)
- `npm install node-sass`: Needed for CSS Modules to work
- `npm install react-css-modules`: Allows a custom/unique stylesheet for each component or page that you build...no need to worry if you duplicate `classNames`
- `npm install classnames`: Will allow for multiple classNames to be assigned to your JSX

#### Dev note

:writing_hand: We will be rolling back `node-sass` to `4.14.1`

### This Demo App covers

- Custom routing to endpoints such as `/`, `/cities` and `/cities:slug` as well as customized error handling for routes that do not exist
- Presentational components (for looks do not manage data(state))
- Stateful Components (handle, manage, pass data(state))
- CSS Modules: custom stylesheets for each page or component, mixins and variables!
- React hooks for `useState` and `useEffect`
- Functional components only...because of React hooks
- _Time Permitting:_ Use async/await and react hooks to grab data from an existing api

### Challenges moving forward

Put what you have learned to the test by adding more to the mocked database/array in this project...perhaps...

- Based on a particular weather condition, you have a list of suggested activities to complete for the day? :beach_umbrella: :bicyclist: :surfer: :skier: :golfing:
- Display the 5 day forecast with temperatures, high and low for the day :thermometer:
