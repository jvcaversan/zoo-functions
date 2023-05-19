const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  let funcionario = data.employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  if (typeof funcionario !== 'object') {
    funcionario = {};
  }
  return funcionario;
};

module.exports = getEmployeeByName;
