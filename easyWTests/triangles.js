class Triangle {
  constructor(...sides) {
    this.triangle = sides;
    this.isValidTriangle();
  }

  kind() {
    if (this.triangle[0] === this.triangle[2] &&
        this.triangle[1] === this.triangle[0]) {
          return 'equilateral';
        } else if (this.triangle[0] !== this.triangle[1] &&
                   this.triangle[0] !== this.triangle[2] &&
                   this.triangle[1] !== this.triangle[2]) {
                     return 'scalene';
                   } else return 'isosceles';
  }

  isValidTriangle() {
    if (Math.min(...this.triangle) <= 0 || this.validateSides() !== true) {
      throw new Error('Invalid Triangle');
    }
  }

  validateSides() {
    if (this.triangle[0] + this.triangle[1] <= this.triangle[2] ||
        this.triangle[0] + this.triangle[2] <= this.triangle[1] ||
        this.triangle[1] + this.triangle[2] <= this.triangle[0]) {
          return false;
        } else return true;
  }
}

module.exports = Triangle;