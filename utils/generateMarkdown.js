// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please contact me at ${data.email} or visit my GitHub profile at https://github.com/${data.username}.


  

`;
}

module.exports = generateMarkdown;
