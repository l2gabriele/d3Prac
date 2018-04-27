const pokemon = require('pokemontcgsdk');

pokemon.card.find('base4-6')
.then(result => {
  console.log(result.card.name);
})
