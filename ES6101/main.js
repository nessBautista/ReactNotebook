let name = "John";
name = "ness";

const nums = [1, 2, 3, 4];
nums.push(5);
console.log(nums);
const person = {
  name: "John",
  age: 33
};

function sayHello() {
  console.log("Hello");
}

const sayHello2 = name => console.log("Hello " + name);
sayHello();
sayHello2("brad");

//FOR EACH
const fruits = ["Apples", "Oranges", "Grapes", "Kiwis"];
fruits.forEach((fruit, index) => console.log(fruit + " " + index));
//MAP
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
console.log(singleFruit);

//FILTER
const people = [
  { id: 1, name: "Karen" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Karl" }
];
const people2 = people.filter(person => person.id !== 2);
console.log(people2);

//SPREAD
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];
console.log(arr3);

const person1 = {
  name: "Brad",
  age: 36
};
const person2 = {
  ...person1,
  email: "brand@gmail.com"
};
console.log(person2);

//DESTRUCTURING
const profile = {
  firstName: "john doe",
  address: {
    street: "40 main st",
    city: "Boston"
  },
  hobbies: ["movies", "music"]
};

const { firstName } = profile;
const { address, hobbies } = profile;
console.log(firstName, address.street, hobbies[0]);

//CLASSES
class Human {
  constructor(name, age) {
    console.log("ran");
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

//SUBCLASSES
class Customer extends Human {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes ${this.balance}`;
  }
}

const human1 = new Human("John", 22);
console.log(human1.name, human1.age);
console.log(human1.greet());

const customer1 = new Customer("kevin", 32, 300);
console.log(customer1.greet());
console.log(customer1.info());
