class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class lunch {
  #dessert;
  constructor(salad, soup) {
    this.salad = salad;
    this.soup = soup;
  }
}

class dinner {
  #dessert;
  constructor(salad, soup, entree) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
  }
}
