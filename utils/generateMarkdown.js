// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  } else if (license === 'MIT') {

  } else if (license === 'GNU GPLv3') {

  } else if (license === 'Mozilla Public License 2.0') {

  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No License') {
    return '';
  } else if (license === 'MIT') {

  } else if (license === 'GNU GPLv3') {

  } else if (license === 'Mozilla Public License 2.0') {
    
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License') {
    return '';
  } else if (license === 'MIT') {

  } else if (license === 'GNU GPLv3') {

  } else if (license === 'Mozilla Public License 2.0') {
    
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = projectData => {
  const {
    title, description, installInstructions, usage,
    contribution, test, license, username, email
  } = projectData;

  return `
  # **${title}** ${renderLicenseBadge(license)}

  ## **Description**

  ${description}

  ## **Table of Contents**

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
  - [License](#license)

  ## **Installation**

  ${installInstructions}

  ## **Usage**

  ${usage}

  ## **License**

  ${license}

  ## **Contributing**

  ${contribution}

  ## **Testing**

  ${test}

  ## **Questions**

  You can check out my other projects on GitHub at *[${username}](https://github.com/${username})*.

  Or if you have any questions you can send them to me at *${email}*.
  `
};
