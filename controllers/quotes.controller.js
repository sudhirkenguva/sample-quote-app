let QuotesSchema = require("../models/quotes.mongoSchema")
async function getAllQuotes(req, res, next) {
  let quotes = await QuotesSchema.find({}, {});
  res.status(400).send({msg: "succss", data: quotes})
};

async function getRandomQuote(req, res, next) {
  let min = 0;
  let quotes = await QuotesSchema.find();
  let max = quotes.length - 1;
  let ind = Math.random() * (max - min) + min;
  ind = Math.ceil(ind);
  let quote = quotes[ind]
  res.status(400).send({ msg: "success", data: quote })
};

async function updateQuote(req, res, next) {
  try{
    let id = req.params.id; 
    let payload = req.body; 
    if(!id || Object.keys(payload).length == 0) {
      res.status(400).send({ msg: "Bad request"});
    }
    await QuotesSchema.update({_id: id}, {$set: payload});
    res.status(200).send({ msg: "success"});
  } catch(ex) {
    console.log(ex);
    res.status(500).send({ msg: "Internal Server Error"});
  }

};

async function deleteQuote(req, res, next) {
  try{
    let id = req.params.id; 
    if(!id) {
      res.status(400).send({ msg: "Bad request"});
    }
    await QuotesSchema.deleteOne({_id: id})
    res.status(200).send({ msg: "success"});
  } catch(ex) {
    console.log(ex);
    res.status(500).send({ msg: "Internal Server Error"});
  }

};


let ctrlMethods = {
  getAllQuotes: getAllQuotes,
  getRandomQuote: getRandomQuote,
  updateQuote: updateQuote,
  deleteQuote: deleteQuote
}

module.exports = ctrlMethods;