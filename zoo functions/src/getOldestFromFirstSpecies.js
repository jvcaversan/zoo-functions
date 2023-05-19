const data = require('../data/zoo_data');
// descontruindo o species e employees
const { species } = data;
const { employees } = data;

function getOldestFromFirstSpecies(id) {
  // criando variavel de quem é o responsavel pelo animal e qual é o seu primeiro animal
  const animalId = employees.find((element) => element.id === id).responsibleFor[0];
  // variavel para armazenar qual é o animal mais velho, buscando dentro das species e reduzindo a quantidade de animais para somento o mais velho
  const oldestAnimal = species.find((element) =>
    element.id === animalId).residents.reduce((old, animal) =>
    (animal.age > old.age ? animal : old));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
