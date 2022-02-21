// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
// Project Title, description, installation instructions, usage information, 
// contribution guidelines, and test instructions
// license (list), GitHub username, email address
const prompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please provide a title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project: ',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'Detail the steps required to install this project: ',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please provide some steps for installing this project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide some instructions and examples for the use of your project.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide some usage information for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide some contribution guidelines for users wishing to contriubute to your project.',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please provide some contribution guidelines.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide examples for tests to run for this project.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please provide some example tests for users to try on this project.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license is associated with your project?',
            choices: ['MIT', 'GNU GPLv3', 'Mozilla Public License 2.0', 'No License']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address: ');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
const writeToFile = markdown => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', markdown, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created.'
            });
        });
    });
};

// returns a promise
prompt()
    .then(projectData => {
        return generateMarkdown(projectData);
    })
    .then(markdown => {
        return writeToFile(markdown);
    })
    .then(writeToFileResponse => {
        console.log(writeToFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

