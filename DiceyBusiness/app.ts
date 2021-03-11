
let generateDie: HTMLElement = document.getElementById("generate-btn");
let rollDice: HTMLElement = document.getElementById("roll-btn");
let sum: HTMLElement = document.getElementById("sum-btn");
let container: HTMLElement = document.getElementById("container");

let diceArray: Die[] = [];

class Die {
  public dice: HTMLDivElement;

  constructor( public value:number) {
    this.value = value;
    this.dice = document.createElement("div");
    this.dice.className = "dice";
    this.roll();
    container.appendChild(this.dice);
    diceArray.push(this);
    this.dice.addEventListener("click", () => {
      this.roll();
    });
    this.dice.addEventListener("dblclick", () => {
      this.dice.remove();
    });
  }

  roll() {
    
    let randomNum = Math.floor(Math.random() * 6 + 1);
    this.value = randomNum;
    this.dice.innerText  = this.value.toString();
  }
}

generateDie.addEventListener("click", function () {
  new Die(1);
});

sum.addEventListener("click", function () {
  let diceSum = 0;
  diceArray.forEach((die) => {
    diceSum = diceSum + die.value;
  });
  alert(`Sum of dice is ${diceSum}`);
});

rollDice.addEventListener("click", function () {
  diceArray.forEach((die) => {
    die.roll();
  });
});
