// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
//const questions = []
const generateLicense = ((license)=> {
    let newLicense = license.split(" ").join("%20");
    return `![GitHub license](https://img.shields.io/badge/license-${newLicense}-blue.svg)`
})
const generateREADME = ({ projectTitle, description, install, usageInfo, contribution, tests, license, username, email }) => {
    
  return `## ${projectTitle}

## Description
${description}

## Installation
${install}

## Usage Info
${usageInfo}

## Contribution
${contribution}

## Tests
${tests}

## License
${generateLicense(license)}

## Questions
Email: ${email}
[Github repository](github.com/${username})

`

}

function init() {

    inquirer
    .prompt([
        {
            name: 'projectTitle',
            message: "What is your projects title name?",
            default: "N/A",
        },
        {
            name: 'description',
            message: "What is your projects description?",
            default: "N/A",
        },
        {
            name: 'install',
            message: "What are the installation instructions for your project?",
            default: "N/A",
        },
        {
            name: 'usageInfo',
            message: "What is the usage information for your project?",
            default: "N/A",
        },
        {
            name: 'contribution',
            message: "What is the contribution guidlines for youe project?",
            default: "N/A",
        },
        {
            name: 'tests',
            message: "What tests are on your project?",
            default: "N/A",
        },
        {
            type: 'list',
            name: 'license',
            message: "What liscenses are used in your project?",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        },
        {
            name: 'username',
            message: "What is your github username?",
        },
        {
            name: 'email',
            message: "What is your email?",
        }
    ])
    .then((answers) => {
     // TODO: Create a function to write README file
    //function writeToFile(log.txt, data) {}
        const readMePage = generateREADME(answers);
    
        fs.writeFile("README.md", readMePage, (err) =>
        err ? console.error(err) : console.log("Commit logged!")
        );
    });
}



// Function call to initialize app
init();
