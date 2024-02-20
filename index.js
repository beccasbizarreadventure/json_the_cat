const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];
// defining breedName used in the function as a value taken from the command line 

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
    // logs breed description 
  }
});