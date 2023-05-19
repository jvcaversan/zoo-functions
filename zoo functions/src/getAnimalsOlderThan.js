const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const arrayAnimais = data.species.filter((element) => element.name === animal);
  const ageMin = arrayAnimais[0].residents.every((element) => element.age >= age);
  // console.log(arrayAnimais[0].residents);
  return ageMin;
};

module.exports = getAnimalsOlderThan;
