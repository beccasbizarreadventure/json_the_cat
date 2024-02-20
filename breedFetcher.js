const request = require('request');

const fullBreedName = process.argv[2];
const breed = fullBreedName.slice(0, 4);
let URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(URL, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
});