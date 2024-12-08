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
};

function personFromPersonStore(name, age) {
  const result = Object.create(personStore);
  result.name = name;
  result.age = age;
  return result;
}

const sandra = personFromPersonStore("Sandra", 26);

// Uncomment these lines to check your work!
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'
