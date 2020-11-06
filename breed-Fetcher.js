const request = require('request');
const searchval = process.argv[2];
const address = `https://api.thecatapi.com/v1/breeds/search?api_key=d9852f75-031f-4d41-9f84-0dcceb663e55&q=${searchval}`;

request(address, (error, response, body) => {
  if (error) console.log(`Invalid dog`);
  let data = JSON.parse(body);
  if (data.length === 0) console.log(`cat not found`);
  else console.log(data[0][`description`]);
}
);

