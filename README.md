# contacts-app
A web app for maintaining contacts that have functionality to send an OTP. 

## What is the use of this Repo

This Project is a simple web App (ReactJS + NodeJS) which demonstrates the following:
- Creating a basic frontend via React
- Making HTTP calls with axios
- Sending OTP to verified numbers via Twilio
- Using MUI along with React
- Making a basic NodeJS backend

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install and Run    create-react-app
Install create-react-app npm package. Use the following command to install 
npx create-react-app <name>

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

- Clone the project into local:

```bash
 git clone https://github.com/YashS96/contacts-app.git
```
- Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```
- In order to run the application Type the following command on both server and client side terminals

```bash
npm start
```

- The Application front-end runs on **localhost:3000**
- The Application back-end runs on **localhost:8000**

## Application design

#### Front-End Components
  
- **Contacts** Component : This Component displays the contact List. This Component gets the data from parent component.  ***ContactCard*** is a supporting Componenets.

- **History** Component : Displays a list of people to whom message was sent.
  
- **Home** Component : This Component is the landing page for the web app.

#### HTTP client and Server

**axios** library is used to make HTTP Calls to the backend endpoints:

 - http://localhost:8000/getContacts/

 - http://localhost:8000/sendMessage/   

## Resources

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**Material UI** : Refer to https://https://mui.com/ to understand how to use MUI Components

**NodeJS** : Refer to https://nodejs.org/en/ to understand the concepts of NodeJS

**Twilio** : Refer to https://www.twilio.org/ to understand the concepts of Twilio


## Improvements

A lot of functionalities should have been added, but due to certain constraints I was unable to add them:

- Tests: unit tests for front and back end code, including integration via mocking frameworks.

- Sacling: Scaling web server capability via cluster or child_process,modules.

- Data Storage: Using a permanent store such as mongoDb instead of reading data from a Json file.

- Improvement of overall front-end design including more validations.
  
- Logging also needs to be introduced.

