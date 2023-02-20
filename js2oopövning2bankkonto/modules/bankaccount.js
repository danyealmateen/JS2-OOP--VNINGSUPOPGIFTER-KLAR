class Bankaccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  showBalance() {
    console.log(this.balance);
  }
  deposit(amount) {
    console.log((this.balance += amount));
  }
  withdraw(amount) {
    console.log((this.balance -= amount));
  }
}
export { Bankaccount };
