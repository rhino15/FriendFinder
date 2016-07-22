var surveyResults = require('../data/friends.js');
var path = require('path');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(surveyResults);
	});

	app.post('/api/friends', function(req, res) {
		surveyResults.push(req.body);
		res.json(surveyResults);
	});
}
