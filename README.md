# protractor

**_Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would._**

- Protractor is a nodejs program built on top of webdriverjs

- WebDriverJS is the official JavaScript implementation of selenium

- WebDriverJS helps to interact with elements on the web

- Protractor extends webdriverjs functionality to enable automation of user actions on browser applications

## why we need protractor?

- In angular application, there are angular specific locators, like,

  - ng-controller
  - ng-model
  - ng-repeater

- itis difficult to find angular web element by using selenium webdriver
- Protractor is a wrapper over selenium webdriver and provides support to find angular specific elements

## How protactor works

- 1. Test script send sommands to the selenium server
- 2. Selenium server interacts with browser driver, thru JSON wire protocol,
- 3. browser driver interact with application on the real browser

- For example,

```javascript
element(by.id("login")).click();
```

This will result in three commands being sent to the Browser Driver

- /session/:sessionId/execute_async - First, Protractor tells the browser to run a snippet of JavaScript. This is a custom command which asks Angular to respond when the application is done with all timeouts and asynchronous requests, and ready for the test to resume.

- /session/:sessionId/element - Then, the command to find the element is sent.

- /session/:sessionId/element/:id/click - Finally the command to perform a click action is sent.

- The JSON Wire Protocol is a REST API that specifies a wire protocol to communicate with web browsers and automate web browser actions. It is used by automated testing frameworks like Selenium to remotely control web browsers and run automated tests on web applications.

[ref] (https://www.protractortest.org/#/infrastructure)

## Choosing a framework,

- Protractor supports two behavior driven development (BDD) test frameworks out of the box: Jasmine and Mocha. These frameworks are based on JavaScript and Node.js and provide the syntax, scaffolding, and reporting tools you will use to write and manage your tests.

- Currently, Jasmine Version 2.x is supported and the default test framework when you install Protractor.

```javascript
export let config: Protractor.Config = {
  // set to "custom" instead of jasmine/mocha
  framework: "custom",
  // path relative to the current config file
  frameworkPath: "./frameworks/my_custom_jasmine.js",
};
```

### Custom Frameworks

- If you have created/adapted a custom framework and want it added to Protractor core please send a PR so it can evaluated for addition as an official supported framework. In the meantime you can instruct Protractor to use your own framework via the config file:

## Setup

> npm install -g protractor

- will install two command line tools, **_protractor_** and **_webdriver-manager_**

- The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

> webdriver-manager update

> webdriver-manager start

- A global install will instead put the module into your global package folder (OS dependent), and allows you to run the included executable commands from anywhere.

## test configuration:

- used default file conf.js
  - directConnect: true, this config will run the test directly on the chrome driver, the driver will be picked from location, example: /usr/lib/node_modules/protractor/node_modules/selenium-webdriver/test/chrome

## How to find element?

- protractor exposed 2 global funciton, to find the element
- element - function to find the single element
- element.all - function to find multiple elements

## How to take a screenshot and how to generate the report?

use the library protractor-jasmine2-screenshot-reporter

> npm install protractor-jasmine2-screenshot-reporter --save-dev

## How to generate the report using allure and screenshot?

> npm i jasmine-allure-reporter

[ref] (https://www.npmjs.com/package/jasmine-allure-reporter?activeTab=readme)

- need to generate the html report using the following,

> npm i allure-commandline

then execute the following,

> ./node_modules/allure-commandline/bin/allure serve allure-results/

- to capture the screenshot when failure, you can use the following.

```javascript
let addScreenShots = new function () {
    this.specDone = function (result) {        
        if (result.status === "failed") {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
            });
        }
    };
}

exports.config = {
    ...
    jasmine.getEnv().addReporter(addScreenShots);
    jasmine.getEnv().addReporter(new AllureReporter({
        allureReport: {
            resultsDir: './test-results/results/'
        }
    }));
    ...
}
```


## How to run the tests in jenkins

- Install Docker: If you don't already have Docker installed on your system, download and install it from the Docker website.

- Pull the Jenkins image: Open a terminal and type the following command to download the Jenkins image:

  > docker pull jenkins/jenkins:lts

- Create a Docker container: Once the image is downloaded, create a Docker container using the following command:

> docker run -d -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home --name jenkins jenkins/jenkins:lts


- This command will create a new container named "jenkins" and map the container's 8080 port to the host system's 8080 port, and map the container's 50000 port to the host system's 50000 port. It also creates a volume named "jenkins_home" and mounts it to the container's "/var/jenkins_home" directory, which will be used to store Jenkins configuration data.

- Access the Jenkins web interface: Open your web browser and navigate to http://localhost:8080. This will take you to the Jenkins web interface, where you can complete the setup process.

- Complete the Jenkins setup: Follow the on-screen instructions to complete the Jenkins setup. You will be asked to enter an initial admin password, which you can find in the container logs by running the following command:

> docker logs jenkins


## Questions:

- How to generate the report
- What is the scripting framework used
- How to handle the errors
- How to handle the wait
- How to create suite
- How to run in ci/cd
- How to take screenshots
- How to manage the test configuration
- How to run in multiple browsers
- How to run tests in parallel
- howto run in suacelab/browser stack

## Issues and Solution:

- **Issue**: SessionNotCreatedError: Unable to create new service: ChromeDriverService

- Solution: (https://stackoverflow.com/questions/46433957/sessionnotcreatederror-unable-to-create-new-service-chromedriverservice)

## Tools,Extensions, Cheat-Sheets

- vscode extension: protractor snippet
- chrome extension: whatruns
- chrome extension: pom builder, to identify the element
- cheat-sheet, for protractor: https://gist.github.com/javierarques/0c4c817d6c77b0877fda
- cheat-sheet, for jasmine: https://devhints.io/jasmine
