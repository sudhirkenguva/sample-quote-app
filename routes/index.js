var express = require('express');
var router = express.Router();
const quotesCtrl = require('../controllers/quotes.controller')

/* GET home page. */

//get all quotes
router.get('/api/quote', quotesCtrl.getAllQuotes);

// get random quote
router.get('/api/random-quote', quotesCtrl.getRandomQuote);

// update single quote
router.put('/api/quote/:id', quotesCtrl.updateQuote);

// delete quote
router.delete('/api/quote/:id', quotesCtrl.deleteQuote);

module.exports = router;
