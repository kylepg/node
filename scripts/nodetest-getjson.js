var request = require("request")
var fs = require('fs');
var url = "http://data.nba.com/data/v2015/json/mobile_teams/nba/2017/00_standings.json"

request({
    url: url,
    json: true
}, function (error, response, body) {
	var obj = JSON.stringify(body);
	console.log(obj)
    if (!error && response.statusCode === 200) {
        fs.writeFile("test.txt", obj, function(err) {
            console.log("The file was saved!");
        });
    }
})
