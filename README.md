# Weather miniApp - small weather widget manager 

Mini AngularJS application. It interrogates the [OpenWeatherMap](https://openweathermap.org) API to get a City's current weather and temperature and show them in mini-wigets.
The user is able to manage them (add/remove) at the settings page.

### Prerequisites

[NodeJS](https://nodejs.org), NPM and [bower](https://bower.io) are required to execute this project.

To install project dependencies, run this command :
```
npm install
```

### Run the Application

This project is preconfigured to be locally launched in a lightweight server with this command :

```
npm start
```

You'll be able to browse it at [`localhost:8000/index.html`](localhost:8000/index.html).


### Running Unit Tests

This project is configured to run few unit tests with Karma

* The configuration is found at `karma.conf.js`.
* The unit tests are found in app/test/ directory).

This command will watch file changes and run the tests on every change :

```
npm test
```

This command will run the tests once :
```
npm run test-single-run
```

