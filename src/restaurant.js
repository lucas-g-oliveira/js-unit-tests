let menu = {};

function addConsumption(string) {
  menu.consumption.push(string);
}

function calcPay() {
  let drink = menu.consumption
    .reduce((acc, curr) => acc + curr.drink, 0);

  let food = menu.consumption
    .reduce((acc, curr) => acc + curr.food, 0);

  return (drink + food) * 1.1;
}

function createMenu(object) {
  return {
    fetchMenu: () => object,
    consumption: [],
    order: (x) => addConsumption(x),
    pay: () => calcPay(),
  };
}

module.exports = createMenu;
