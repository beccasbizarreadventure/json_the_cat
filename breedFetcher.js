const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let search = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(search, function(error, response, body) {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
      console.error(error);
      return;
    }
    if (data[0] === undefined) {
      throw new Error("Looks like that cat's gone missing");
    }
    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };