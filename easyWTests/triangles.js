class Triangle {
  constructor(...sides) {
    this.triangle = sides;
    this.isValidTriangle(sides);
  }
  
  isValidTriangle() {
    if (this.testForZero()) {
      throw new Error('Invalid triangle, side length of 0 or less...');
    } else if (this.testSides()) {
      throw new Error('Invalid triangle sides passed...');
    }
  }
  
  testForZero() { // returns true if side is 0 or less
    return Math.min(...this.triangle) <= 0;
  }
  
  testSides() { // returns true if 2 sides added are less than or equal to 3rd
    return (this.triangle[0] + this.triangle[1]) <= this.triangle[2] || 
            (this.triangle[1] + this.triangle[2]) <= this.triangle[0];
  }
  
  kind() {
    if (this.triangle[0] === this.triangle[2]) return 'equilateral';
    else if (this.triangle[0] !== this.triangle[1] && this.triangle[0] !== this.triangle[2]) return 'scalene';
    else return 'isosceles';
  }
}

module.exports = Triangle;