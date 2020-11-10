var express = require('express');
var router = express.Router();
const quotesCtrl = require('../controllers/quotes.controller')

/* GET home page. */
router.get('/api/quote', quotesCtrl.getAllQuotes);
router.get('/api/random-quote', quotesCtrl.getRandomQuote);

module.exports = router;
