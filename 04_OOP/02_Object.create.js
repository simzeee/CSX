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
