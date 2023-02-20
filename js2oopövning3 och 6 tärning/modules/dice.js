class Dice {
  constructor() {
    this.currentValue = 1;
    this.frozen = false;
  }
  roll() {
    let randomNumGenerator = Math.floor(Math.random() * 6);

    if (this.frozen === false) {
      this.currentValue += randomNumGenerator;
      console.log(this.currentValue);
      return randomNumGenerator;
    } else {
      console.log("Aint shit happening");
    }
  }
  freeze(truey) {
    this.frozen = truey;
    console.log(truey);
  }
  unFreeze(falsey) {
    console.log(falsey);
    this.frozen = falsey;
  }
}

export { Dice };
