var express = require('express');
var router = express.Router();

/*
 * GET oroscopo.
 */
router.get('/oroscopo', function(req, res) {
    var db = req.db;

	var search_params = { segno: req.query.segno };
	var filter_params = {};

    var collection = db.get('oroscopo');
    collection.find(search_params,filter_params,function(e,docs){
        res.json(docs);
    });
});

module.exports = router;
