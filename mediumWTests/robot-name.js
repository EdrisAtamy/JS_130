class Robot {
  static nameHistory = [];

  static randomCharOf(string) {
    let randIndex = Math.floor(Math.random() * string.length);

    if (randIndex > string.length || randIndex < 0) {
      Robot.randomCharOf(string);
    }

    return string[randIndex];
  }

  static generateName() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = '0123456789';
    let randName = '';

    for (let count = 0; count < 5; count++) {
      if (count < 2) {
        randName += Robot.randomCharOf(characters);
      } else {
        randName += Robot.randomCharOf(numbers);
      }
    }
    return randName;
  }

  name() {
    if (this.robotName) return this.robotName;
    
    while (Robot.nameHistory.includes(this.robotName) || !this.robotName) {
      this.robotName = Robot.generateName();
    }
    
    Robot.nameHistory.push(this.robotName);
    return this.robotName;
  }

  reset() {
    this.robotName = null;
  }
}

module.exports = Robot;