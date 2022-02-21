// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  } else if (license === 'MIT') {
    return '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)'
  } else if (license === 'GNU GPLv3') {
    return '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)'
  } else if (license === 'Unlicense') {
    return '[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)'
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License') {
    return '';
  } else {
  return `
  ## **License**

  This project is licensed under the ${license} license.
  
  ${renderLicenseLink(license)}
  `
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Unlicense') {
    return 'For more information check out their website at [Unlicense](https://unlicense.org/)';
  } else if (license === 'MIT') {
    return 'For more information check out their website at [MIT](https://lbesson.mit-license.org/)';
  } else if (license === 'GNU GPLv3') {
    return 'For more information check out their website at [GNU GPLv3](http://perso.crans.org/besson/LICENSE.html)';
  }
};

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

  ${renderLicenseSection(license)}

  ## **Contributing**

  ${contribution}

  ## **Testing**

  ${test}

  ## **Questions**

  You can check out my other projects on GitHub at *[${username}](https://github.com/${username})*.

  Or if you have any questions you can send them to me at *${email}*.
  `
};
