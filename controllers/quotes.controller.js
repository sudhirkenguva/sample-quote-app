function getAllQuotes(req, res, next) {
  
  console.log("/ route being called....")
  var quotes = require("../data/quotes.json");
  res.status(400).send({msg: "succss", data: quotes})
};

function getRandomQuote(req, res, next) {
var quotes = require("../data/quotes.json");
let min = 0;
let max = quotes.length - 1;
let ind = Math.random() * (max - min) + min;
ind = Math.ceil(ind);
let quote = quotes[ind]
res.status(400).send({msg: "succss", data: quote})
};


let ctrlMethods = {
  getAllQuotes: getAllQuotes,
  getRandomQuote: getRandomQuote
}

module.exports = ctrlMethods;