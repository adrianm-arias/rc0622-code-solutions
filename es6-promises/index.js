const takeAChance = require('./take-a-chance');

const randomLuck = takeAChance('Adrian');

randomLuck.then(value => {
  console.log(value);
});

randomLuck.catch(error => {
  console.error(error.message);
});
