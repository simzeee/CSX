function makePerson(name, age) {
  // add code here
  const result = {};
  result.name = name;
  result.age = age;
  return result;
}

const vicky = makePerson("Vicky", 24);

// Uncomment these lines to check your work!
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

const personStore = {
  greet: function () {
    console.log("hello");
  },
  introduce: function () {
    console.log(`Hi, my name is ${this.name}`);
  },
};

function personFromPersonStore(name, age) {
  const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

const sandra = personFromPersonStore("Sandra", 26);

// add code here

// Uncomment this line to check your work!
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

function PersonConstructor() {
  this.greet = function () {
    console.log("hello");
  };
  this.introduce = () => console.log(`Hi, my name is ${this.name}`);
}

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

const mike = personFromConstructor("Mike", 30);

// add code here

// Uncomment this line to check your work!
// mike.introduce(); // -> Logs 'Hi, my name is Mike'

function Dog(name, breed) {
  // add code here
  this.name = name;
  this.breed = breed;
  this.tricks = [];
}

Dog.prototype.learnTrick = function (trick) {
  this.tricks.push(trick);
};

Dog.prototype.performTrick = function (trick) {
  if (this.tricks.includes(trick)) {
    console.log(`${this.name} performed ${trick}!`);
  } else {
    console.log(`${this.name} doesn't know that trick.`);
  }
};

const fido = new Dog("Fido", "poodle");

// Uncomment these lines to check your work!
fido.learnTrick("fetch");
fido.performTrick("fetch"); // should log 'Fido performed fetch!'
fido.performTrick("sit"); // should log 'Fido doesn't know that trick.'
