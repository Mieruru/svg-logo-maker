// import shapes
const { Circle, Triangle, Square } = require('./shapes')

// logo generator function
// bring in incoming responses from query function
function generateLogo({ text, fontColor, shape, shapeColor }) {
  let svgLogo

  // define shape based on shape class
  switch (shape) {
    case 'Circle':
      svgLogo = new Circle()
      break
    case 'Triangle':
      svgLogo = new Triangle()
      break
    case 'Square':
      svgLogo = new Square()
      break
  }

  // set shape color
  svgLogo.setColor(shapeColor)

  // generate .svg
  const generateSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  ${svgLogo.renderShape()}
  <text x="50%" y="50%" font-size="50" dominant-baseline="middle" text-anchor="middle" fill="${fontColor}">${text}</text>
  </svg>
  `

  // return .svg as object
  return ({ svgContent: generateSVG })
}

module.exports = generateLogo