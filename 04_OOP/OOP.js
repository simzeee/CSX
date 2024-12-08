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
