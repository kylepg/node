'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

module.exports = (function(year) {
  var _live, _local;

  var feeds = {
    live: ((_live = {
      standings: function standings(year) {
        return 'http://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/00_standings.json';
      },
      todaysScores: function todaysScores(year) {
        return 'http://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/scores/00_todays_scores.json';
      },
      celticsRoster: function celticsRoster(year) {
        return 'http://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/teams/celtics_roster.json';
      },
      awayRoster: function awayRoster(awayTn, year) {
        return 'http://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/teams/' + awayTn + '_roster.json';
      },
      bioData: 'http://io.cnn.net/nba/nba/.element/media/2.0/teamsites/celtics/json/bio-data.json',
      playerCard: function playerCard(pid, year) {
        return 'http://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/players/playercard_' + pid + '_02.json';
      },
      gameDetail: function gameDetail(gid, year) {
        return 'http://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/scores/gamedetail/' + gid + '_gamedetail.json';
      }
    }),
    _defineProperty(_live, 'standings', function standings(year) {
      return 'http://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/00_standings.json';
    }),
    _defineProperty(_live, 'nba', {
      leagueLeaders:
        'http://stats.nba.com/stats/homepagev2?GameScope=Season&LeagueID=00&PlayerOrTeam=Player&PlayerScope=All+Players&Season=2017-18&SeasonType=Regular+Season&StatType=Traditional&callback=?'
    }),
    _live),
    local: ((_local = {
      standings: function standings() {
        return 'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/json/00_standings.json';
      },
      todaysScores: function todaysScores() {
        return 'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/json/00_todays_scores.json';
      },
      celticsRoster: function celticsRoster() {
        return 'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/json/celtics_roster.json';
      },
      awayRoster: function awayRoster(awayTn) {
        return 'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/json/' + awayTn + 'roster';
      },
      bioData: 'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/json/',
      playerCard: function playerCard() {
        return 'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/json/';
      },
      gameDetail: function gameDetail() {
        return 'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/json/';
      }
    }),
    _defineProperty(_local, 'standings', function standings() {
      return 'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/json/';
    }),
    _defineProperty(_local, 'nba', {
      leagueLeaders: 'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/json/'
    }),
    _local)
  };

  if (window.location.href.indexOf('nba.com') > -1) {
    return feeds.live;
  } else {
    return feeds.local;
  }
})();
