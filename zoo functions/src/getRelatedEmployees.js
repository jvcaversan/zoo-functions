const data = require('../data/zoo_data');

const isManager = (id) => {
  const isManager1 = data.employees.some((elemento) =>
    elemento.managers.some((element) => element === id));
  return isManager1;
};

const getRelatedEmployees = (managerId) => {
  const eGerente = isManager(managerId);
  if (eGerente) {
    const empregados = data.employees.filter((element) =>
      element.managers.some((elemento) => elemento === managerId));
    const nomes = empregados.map((element) => `${element.firstName} ${element.lastName}`);
    return nomes;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};
getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83');
module.exports = { isManager, getRelatedEmployees };
