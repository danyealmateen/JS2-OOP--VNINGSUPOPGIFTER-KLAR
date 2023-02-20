import { Bankaccount } from "./modules/bankaccount.js";

const bankaccount = new Bankaccount("Danys", 500);

bankaccount.showBalance();

bankaccount.deposit(500);
bankaccount.showBalance();

bankaccount.withdraw(100);
bankaccount.showBalance();
