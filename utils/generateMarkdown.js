// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  console.log(license);

  return `
  # **${title}**

  ## **Description**

  ${description}

  ## **Table of Contents**

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
  - [License](#license)

  ## **Installation** {#installation}

  ${installInstructions}

  ## **Usage** {#usage}

  ${usage}

  ## **Contributing** {#contributing}

  ${contribution}

  ## **Testing** {#testing}

  ${test}

  ## **Questions** {#questions}

  You can check out my other projects on GitHub at *[${username}](https://github.com/${username})*.

  Or if you have any questions you can send them to me at *${email}*.

  ## **License** {#license}
  `
};
