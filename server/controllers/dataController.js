const express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
	res.json("this is data list");
	renderProtfolioList(req, res);
});


function renderProtfolioList(req, res) {	
	
}

module.exports = router;