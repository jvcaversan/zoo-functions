const data = require('../data/zoo_data');

const countAnimals = (obj) => {
  if (obj === undefined) { // if para caso receber parametro vazio, retornar especies e quantidades
    const todosAnimais = {}; // criado objeto vazio para armazenar os dados
    data.species.forEach((element) => {
      todosAnimais[element.name] = element.residents.length;
    });
    return todosAnimais;
  }
  const specieRecebida = obj.specie;
  const sexRecebida = obj.sex;
  if (sexRecebida === undefined) {
    // retorna a quantidade do animal
    const searchAnimal = data.species.find((element) => specieRecebida === element.name);
    return searchAnimal.residents.length;
  }

  const searchAnimal = data.species.find((element) => specieRecebida === element.name);
  const sexAnimal = searchAnimal.residents.filter((element) => element.sex === sexRecebida);
  return sexAnimal.length;
};

module.exports = countAnimals;
