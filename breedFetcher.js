const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let search = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // creates url with breedname (later defined in index) as the search query
  request(search, function(error, response, body) {
    const data = JSON.parse(body);
    // converts the body of the page into a JSON object
    if (error) {
      callback(error, null);
      console.error(error);
      return;
      // when an error returning the request occurs, callback takes the error message thrown and returns null
    }
    if (data[0] === undefined) {
      callback("Looks like that cat's gone missing");
      return;
      // callback returns the string "Looks like that cat's gone missing" when the object is undefined
    }
    // throws an error msg if the type of cat is not in the database
    callback(null, data[0].description);
    return;
    // no error (meaning error returns null from request) it returns the requested data from the JSON object
  });
};

module.exports = { fetchBreedDescription };