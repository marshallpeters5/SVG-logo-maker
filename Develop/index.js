const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./lib/shapes.js')
const fs = require('fs')

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
    name: 'textColor',
    message: 'Please enter a color for the text.'
  },
  {
    type: 'list',
    name: 'shape',
    choices: ['circle', 'square', 'triangle']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter a color for shape.'
  }

]).then((answers) => {
  let shape = ''
  if(answers.shape === 'circle'){
    shape = new Circle()
  } else if (answers.shape === 'square') {
    shape = new Square()
  } else {
    shape = new Triangle()
  }
  shape.setColor(answers.shapeColor)
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>`
}).then(data =>{
  console.log(data);
  fs.writeFileSync('logo.svg', data)
})