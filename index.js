// import modules
const inquirer = require('inquirer')

// array of user prompts

const prompts = [
  {
    type: 'input',
    name: 'text',
    message: 'Please enter up to three characters:'
  },
  {
    type: 'input',
    name: 'fontColor',
    message: 'Please enter the text color:'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select a shape:',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter a color for the shape:'
  }
]

// function to initialize app
function init() {

}

// initialize app
init()