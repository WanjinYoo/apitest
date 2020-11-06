const request = require('request');
const searchval = process.argv[2];




const fetchBreedDescription = function(breedName, callback) {
  const address = `https://api.thecatapi.com/v1/breeds/search?api_key=d9852f75-031f-4d41-9f84-0dcceb663e55&q=${breedName}`;
  request(address, (error, response, body) => {
    if (error) callback(`error occured`,data);
    let data = JSON.parse(body);
    if (data.length === 0) callback(`error occured`,data);
    else callback(null,data[0][`description`]);
  }
  );
};

module.exports = {fetchBreedDescription};