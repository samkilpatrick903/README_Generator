// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your Gihbub username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },

  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },

  {
    type: "input",
    name: "installation",
    message: "What are your installation instructions?",
  },

  {
    type: "input",
    name: "usage",
    message: "What are you usage details?",
  },

  {
    type: "list",
    name: "license",
    message: "Choose a liense for your application.",
    choices: [
      "None",
      "Apache 2.0",
      "GNU General Public License v3.0",
      "MIT",
      "BSD 2-Clause",
      "BSD 3-Clause",
      "Boost Software License 1.0",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },

  {
    type: "input",
    name: "contribution",
    message: "What are your contribution guidelines?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, (err) => {
    err ? console.error(err) : console.log("ReadMe Created Successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
