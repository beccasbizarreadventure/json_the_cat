const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it(`returns a string description for a valid breed, via callback`, (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it(`returns "Looks like that cat's gone missing" when a cat breed not in the database is given`, (done) => {
    fetchBreedDescription('Orange', (err, desc) => {
      // Orange is not a cat in the cat library
      assert.equal(desc, undefined);
      // so the description should be returned as undefined
      assert.equal(err, "Looks like that cat's gone missing");
      // and the err msg is "Looks like that cat's gone missing"
      done();
    });
  });

  it(`returns null when an error during requesting the data from the server occurs`, (done) => {
    fetchBreedDescription('TestforError', (err, desc) => {
      assert.notEqual(err, null);
      // when error is ==/== to null, meaning there is an error
      assert.equal(desc, null);
      // the decription should equal null
      done();
    });
  });
});