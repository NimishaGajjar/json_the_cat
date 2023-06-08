const request = require('request');

const catInfo = () => {
  const name = process.argv.slice(2);
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;

  request(url, (error, response, body) => {
    if (error) {
      // Edge Case: Request Failed
      console.log('Request Failed');
      // console.log(error);

      return process.exit;
    }
    const data = JSON.parse(body);

    // Edge Case: Breed Not Found
    if (data[0] === undefined) {
      console.log('Breed not Found');
    } else {
      console.log(data[0].description);
    }
  });
};

catInfo();