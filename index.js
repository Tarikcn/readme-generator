const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide instructions for installation:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license for your project:",
    choices: ["MIT", "GNU GPLv3", "Apache 2.0", "Mozilla Public License 2.0"],
  },
  {
    type: "input",
    name: "contributing",

    message: "Please provide list of contributors:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please list your tests",
  },

  {
    type: "input",
    name: "username",
    message: "Enter your Github username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// function to write README file - generating a Markdown file using the data passed to the generateMarkdown function, and then writing it to a file named fileName in the current working directory.
function writeToFile(fileName, data) {
  const markdownData = generateMarkdown(data);
  fs.writeFile(path.join(process.cwd(), fileName), markdownData, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md!")
  );
}

// function to initialize program and prompt user for input to generate README file content using inquirer
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("GeneratedREADME.md", data);
  });
}

// function call to initialize program
init();
