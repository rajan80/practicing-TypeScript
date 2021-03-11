let myName: string = "Rajan";
console.log(myName);
myName = "Ramu";
console.log(myName);

const numOfStates: number = 50;

let sumOfNumbers: number = 5 + 4 + (5 + 4);

function sayHello(): void {
  alert("Hello rajan");
}
sayHello();

function checkAge(name: string, age: number) {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  }
}
checkAge("ram", 20);
checkAge("Sam", 30);

let favVeggies: string[] = ["Broccoli", "Squash", "Carrots", "Asparagus"];
console.log(favVeggies[0]);
console.log(favVeggies[1]);
console.log(favVeggies[2]);
console.log(favVeggies[3]);

for (let i = 0; i < favVeggies.length; i++) {
  console.log(favVeggies[i]);
}

interface pet {
  name: string;
  breed: string;
}

let myPet: pet = {
  name: "bhunti",
  breed: "Dog",
};

console.log(myPet.breed, myPet.name);

let people: { name: string; age: number }[] = [
  {
    name: "sam",
    age: 20,
  },
  {
    name: "Ram",
    age: 27,
  },
  {
    name: "Ham",
    age: 25,
  },
  {
    name: "Pam",
    age: 22,
  },
  {
    name: "Bill",
    age: 24,
  },
];

people[0].name;

for (let i = 0; i < people.length; i++) {
  checkAge(people[i].name, people[i].age);
}

function getLength(string: string) {
  return string.length;
}

let stringLength = getLength("hello world");
if (stringLength % 2 === 0) {
  console.log("The world is nice and even!");
} else {
  console.log("The world is an odd place!");
}
