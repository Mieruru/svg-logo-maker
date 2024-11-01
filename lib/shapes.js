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
    return `<circle fill=${this.color} />`
  }
}

// define Triangle Shape class
class Triangle extends Shape {
  // render triangle in SVG format with constructor color
  renderShape() {
    return `<polygon fill=${this.color} />`
  }
}

// define Square Shape class
class Square extends Shape {
  // render square in SVG format with constructor color
  renderShape() {
    return `<rect fill=${this.color} />`
  }
}

// export shapes for use in logo generator function
module.exports = { Circle, Triangle, Square }