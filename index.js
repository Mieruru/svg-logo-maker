// import modules
const inquirer = require('inquirer')
const fs = require('fs')

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

// function to write file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    err ? console.log(err) :
      console.log(`Generated logo.svg`)
  })
}

// function to initialize app
function init() {

}

// initialize app
init()