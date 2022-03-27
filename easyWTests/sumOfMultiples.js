class SumOfMultiples {
  constructor(...list) {
    this.list = (list.length > 0) ? list : [3, 5];
  }

  to(natural) {
    let multArr = this.list.reduce(function(acc, number) {
      for (let i = number; i < natural; i++) {
        if (i < natural && i % number === 0 && !acc.includes(i)) {
          acc.push(i);
        }
      }
      return acc;
    }, []);
    return (multArr.length < 1) ? 0 : multArr.reduce((acc, element) => acc + element);
  }

  static to(natural) {
    let statObj = new SumOfMultiples();
    return statObj.to(natural);
  }
}

module.exports = SumOfMultiples;