const request = require('request');

const fetchBreedDescription = (name, callback) => {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;
  console.log(url);
  request(url, (error, response, body) => {
    if (error) {
      callback(error, " ");
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback('Breed not Found', " ");
    } else {
      callback(null, data[0]);
    }
  });
};

module.exports = { fetchBreedDescription };
