const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes.js')

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter your initials (up to three characters):',
    validate: function(text) {
      if (text.length > 3) {
        return 'Please enter up to three characters.';
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    name: 'text-color',
    message: 'Please enter a color for the text.'
  },
  {
    type: 'list',
    name: 'shape',
    choices: ['circle', 'square', 'triangle']
  },
  {
    type: 'input',
    name: 'shape-color',
    message: 'Please enter a color for shape.'
  }

]).then((answers) => {
  console.log(`You entered: ${answers.text}`);
});