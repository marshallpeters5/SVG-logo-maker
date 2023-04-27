const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter your text (up to three characters):',
    validate: function(input) {
      if (input.length > 3) {
        return 'Please enter up to three characters.';
      } else {
        return true;
      }
    }
  }
]).then((answers) => {
  console.log(`You entered: ${answers.text}`);
});
