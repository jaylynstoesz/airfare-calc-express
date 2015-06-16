module.exports = {

  routeCost: function (dep, arr) {
    var route = dep + arr;

    if (route === "chicagonewyork")
      price = 250;
    else if (route === "chicagolosangeles")
      price = 350;
    else if (route === "losangelesnewyork")
      price = 545;
    else if (route === "losangeleschicago")
      price = 350;
    else if (route === "newyorkchicago")
      price = 250;
    else if (route === "newyorklosangeles")
      price = 545;
    else price = 0;
    return price;
  },

  classCost: function (input) {
    var classCost;
      if (input === "coach") {
        classCost = 0;
      } else if (input === "bus") {
        classCost = 200;
      } else {
        classCost = 500;
      }
    return classCost;
  },

  bagsCost: function (input) {
    if (input >= 0) {
      bagsCost = input * 25;
    } else {
      bagsCost = 0;
    }
    return bagsCost;
  },

  wifiCost: function (input) {
    if (input === "on") {
      wifiCost = 12;
    } else {
      wifiCost = 0;
    }
    return wifiCost;
  },

  discount: function (input) {
    if (input === "10OFF") {
      reduce = 0.9;
    } else if (input === "20OFF") {
      reduce = 0.8;
    } else {
      reduce = 1;
    }
    return reduce;
  }

};
