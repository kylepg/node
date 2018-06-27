var request = require("request")
var fs = require('fs');
var feeds = [
	{
		filePath: 'data/mobile-stats-feed/standings.json',
		url: 'http://data.nba.com/data/v2015/json/mobile_teams/nba/2017/00_standings.json'
	},
	{
		filePath: 'data/mobile-stats-feed/away_roster.json',
		url: 'http://data.nba.com/data/v2015/json/mobile_teams/nba/2017/teams/heat_roster.json'
	},
	{
		filePath: 'data/mobile-stats-feed/celtics_roster.json',
		url: 'http://data.nba.com/data/v2015/json/mobile_teams/nba/2017/teams/celtics_roster.json'
	},
	{
		filePath: 'data/mobile-stats-feed/player_averages.json',
		url: 'http://data.nba.com/data/v2015/json/mobile_teams/nba/2017/teams/celtics/player_averages_02.json'
	},
	{
		filePath: 'data/mobile-stats-feed/schedule.json',
		url: 'http://data.nba.com/data/v2015/json/mobile_teams/nba/2017/teams/celtics_schedule_02.json'
	},
	{
		filePath: 'data/mobile-stats-feed/todays_scores.json',
		url: 'http://data.nba.com/data/v2015/json/mobile_teams/nba/2017/scores/00_todays_scores.json'
	},
	{
		filePath: 'data/mobile-stats-feed/gamedetail.json',
		url: 'http://data.nba.com/data/v2015/json/mobile_teams/nba/2017/scores/gamedetail/0021700257_gamedetail.json'
	},
]

for (let i = 0; i < feeds.length; i++){
	request({
	    url: feeds[i].url,
	    json: true
	}, function (error, response, body) {
		var obj = JSON.stringify(body);
	    if (!error && response.statusCode === 200) {
	        fs.writeFile(feeds[i].filePath, obj, function(err) {
	            console.log(feeds[i].filePath + " was saved!");
	        });
	    }
	});
}
