const data = require('../data/zoo_data');

// funcao pra ordenar os animais
const orderAnimal = (nameResidents, sorted) => {
  if (sorted) {
    return nameResidents.sort((a, b) => (a > b ? 1 : -1));
  }
  return nameResidents;
};
// funcao pra
const listarAnimais = (residents, options) => {
  const animaisNome = [];
  const { includeNames, sex, sorted } = options;

  residents.forEach((element) => {
    if (!sex && includeNames === true) {
      animaisNome.push(element.name);
    }
    if (sex === element.sex && includeNames === true) {
      animaisNome.push(element.name);
    }
  });
  return orderAnimal(animaisNome, sorted);
};
const getAnimalMap = (options) => {
  const localFinal = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((element) => {
    const { name, location, residents } = element;
    if (!options || !options.includeNames) {
      localFinal[location].push(name);
    } else {
      const residentsName = listarAnimais(residents, options);
      localFinal[location].push({ [name]: residentsName });
    }
  });
  return localFinal;
};

module.exports = getAnimalMap;
