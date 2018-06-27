var startingFive = require('starting-five');
var request = require("request")
var fs = require('fs');

request({
    url: 'http://data.nba.com/data/v2015/json/mobile_teams/nba/2017/teams/celtics/player_averages_04.json',
    json: true
}, function (error, response, body) {
	var obj = JSON.stringify(body);
	var output = '{' + startingFive.update().replace('rosterData', obj) + 'myScript(this)}';
	console.log(startingFive.update());
    if (!error && response.statusCode === 200) {
    	fs.writeFile('/Users/kyle/Dropbox/CODE/after effects/ScriptUI Panels/Starting Five Graphic.jsx', output, function(err) {
    	    console.log('File was saved!');
    	});
    }
});
