// define Shape class
class Shape {
  // define Shape color
  constructor(shapeColor) {
    this.color = shapeColor
  }
}

// define Circle Shape class
class Circle extends Shape {
  // render circle in SVG format with constructor color
  renderShape() {
    return `<circle cx="150" cy="100" r="75" fill=${this.color} />`
  }
}

// define Triangle Shape class
class Triangle extends Shape {
  // render triangle in SVG format with constructor color
  renderShape() {
    return `<polygon points="150, 18 244, 182 56, 182" fill=${this.color} />`
  }
}

// define Square Shape class
class Square extends Shape {
  // render square in SVG format with constructor color
  renderShape() {
    return `<rect x="75" y="25" width="150" height="150" fill=${this.color} />`
  }
}

// export shapes for use in logo generator function
module.exports = { Circle, Triangle, Square }