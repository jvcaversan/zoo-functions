const data = require('../data/zoo_data');

const getSpeciesByIds = (ids, ids2) => {
  const animaisFilter = data.species.filter((element) =>
    // console.log(data);
    element.id === ids || element.id === ids2);
  // console.log(ids);
  return animaisFilter;
};

module.exports = getSpeciesByIds;
