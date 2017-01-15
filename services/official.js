const fetch = require('node-fetch');

const API_URL = `https://www.googleapis.com/civicinfo/v2/representatives?`
const API_KEY = process.env.GCI_API_KEY;

function getOfficialsByAddress(req, res, next) {
  console.log('req.params', req.params)
  return fetch(`${API_URL}address=${req.params.address}&roles=legislatorUpperBody&roles=legislatorLowerBody&key=${API_KEY}`)
  .then(result => result.json())
  .then( (data) => {
    console.log(data)
    res.officials = data
    next();
  })
  .catch( (error) => {
    console.log(error)
    next();
  });
};

module.exports = {
  getOfficialsByAddress,
};
