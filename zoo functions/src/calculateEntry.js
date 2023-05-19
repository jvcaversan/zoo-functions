const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || !Object.keys(entrants).length) {
    return 0;
  }
  const objEntrants = countEntrants(entrants);
  const { child, adult, senior } = objEntrants;
  return (child * data.prices.child) + (adult * data.prices.adult) + (senior * data.prices.senior);
}
module.exports = { calculateEntry, countEntrants };
