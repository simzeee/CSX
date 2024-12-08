class Chain {
  constructor(name, totalStores, locations) {
    this.name = name;
    this.totalStores = 0;
    this.locations = [];
  }
  openStore(owner, city) {
    const newFranchise = new Franchise(owner, city);

    this.locations.push(newFranchise);
    this.totalStores++;
  }

  closeStore(city) {
    console.log(this.locations);
    if (this.locations.find((obj) => obj.city === city)) {
      const index = this.locations.indexOf(city);
      this.locations.splice(index, 1);
      this.totalStores--;
      console.log(`${this.name} closed the store in ${city}!`);
    } else {
      console.log(`${this.name} doesn't have a store in ${city}.`);
    }
  }
}

class Franchise {
  //add code here
  constructor(owner, city) {
    this.owner = owner;
    this.city = city;
  }
}

const buenoBell = new Chain("Bueno Bell");

// Uncomment these lines to check your work!
buenoBell.openStore("Will", "Phoenix");
buenoBell.openStore("Kyle", "Austin");
buenoBell.openStore("Allison", "Wichita");

// console.log(buenoBell.totalStores); //should log 3
// console.log(buenoBell.locations[0].owner) //should log 'Will'

buenoBell.closeStore("Austin"); // Should log 'Bueno Bell closed the store in Austin.'
buenoBell.closeStore("Maui"); // Should log 'Bueno Bell doesn't have a store in Maui.'
