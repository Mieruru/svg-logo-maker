// import modules
const inquirer = require('inquirer')
const fs = require('fs')
const generateLogo = require('./lib/generateLogo.js')

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
  inquirer.prompt(prompts)
    .then(data => {
      // destructure prompt data into individual object properties
      const { text, fontColor, shape, shapeColor } = data

      // pass properties to generateLogo function
      const { svgContent } = generateLogo({ text, fontColor, shape, shapeColor })

      console.log(`Generating logo.svg...`)
      writeToFile('./dist/logo.svg', svgContent)
    })
}

// initialize app
init()