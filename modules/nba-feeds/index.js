'use strict';

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

//
// ─── REQUESTS ───────────────────────────────────────────────────────────────────
//

// Fetch stats from mobile feed API
/* ================================
=            NBA FEEDS            =
================================== */

/* global Drupal */

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

// Fetch browser compatibility
var fetchStats = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
    var urlRoot, promise, response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            urlRoot = 'https://data.nba.com/data/v2015/json/mobile_teams/';
            // const rnd = Math.floor(Math.random() * 99999);

            promise = fetch('' + urlRoot + url).then(function (res) {
              if (!res.ok) {
                throw new Error(res.status + ' - Failed to fetch stats at: ' + urlRoot + url);
              }
              return res;
            }).then(function (res) {
              return res.json();
            });
            _context.next = 4;
            return promise;

          case 4:
            response = _context.sent;
            return _context.abrupt('return', response);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchStats(_x) {
    return _ref.apply(this, arguments);
  };
}();

// Fetch content data from the NBA content API

// Use JSONP with fetch, Necessary for making cross-domain request to stats.nba.com


var fetchContent = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(token, reqIndex, reqType, reqQuery) {
    var promise;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            promise = fetch('https://api.nba.net/2/' + reqIndex + '/' + reqType + reqQuery, {
              headers: {
                accessToken: token
              }
            }).then(function (response) {
              return response.json();
            }).then(function (json) {
              return json.response.result;
            });
            return _context2.abrupt('return', promise);

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fetchContent(_x2, _x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

// Fetch stats from stats.nba.com


var fetchLeagueStats = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(url) {
    var promise, data;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            promise = (0, _fetchJsonp2.default)('' + url).then(function (res) {
              return res.json();
            });
            _context3.next = 3;
            return promise;

          case 3:
            data = _context3.sent;
            return _context3.abrupt('return', data);

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function fetchLeagueStats(_x6) {
    return _ref3.apply(this, arguments);
  };
}();

//
// ─── HELPERS ────────────────────────────────────────────────────────────────────
//


// Encode query items to valid URI format (content API)


require('whatwg-fetch');

var _fetchJsonp = require('fetch-jsonp');

var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function encodeItems(items) {
  var output = [];
  items.forEach(function (item) {
    output.push(encodeURIComponent(item));
  });
  return output.join('|');
}

function hasProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// Create the request path (content API)
function pathCreator(property, fallback, query) {
  if (hasProp(query, property)) {
    if (Array.isArray(query[property])) {
      return query[property].join(',');
    } else if (typeof query[property] === 'string') {
      return query[property];
    }
  } else if (fallback === null || fallback === undefined) {
    return '';
  }
  return fallback;
}

// Generate a list of request arguments
function defineOtherArgs(args) {
  var leagues = {
    '00': 'nba',
    10: 'wnba',
    14: 'orlando',
    15: 'vegas',
    16: 'utah',
    20: 'dleague'
  };
  var seasonYear = function seasonYear() {
    if (typeof args.seasonYear === 'undefined') {
      if (typeof Drupal.settings.today.season_year === 'undefined' || seasonYear === null) {
        var d = new Date();
        var y = d.getFullYear();
        var m = d.getMonth();
        if (m < 6) {
          y -= 1;
        }
        return y;
      }
      return Drupal.settings.today.season_year;
    }
    return args.seasonYear;
  };

  var seasonTypeId = function seasonTypeId() {
    if (typeof args.seasonTypeId === 'undefined') {
      var id = Drupal.settings.today.season_stage;
      if (typeof id === 'undefined' || id === null) {
        id = '2';
      }
      return '0' + id.toString();
    }
    return args.seasonTypeId;
  };

  var leagueId = function leagueId() {
    if (typeof args.leagueId === 'undefined') {
      var id = Drupal.settings.today.league_id;
      if (typeof id === 'undefined' || id === null || id === 0) {
        id = '00';
      }
      return id.toString();
    }
    return args.leagueId;
  };

  var league = function league() {
    if (typeof args.league === 'undefined') {
      var id = Drupal.settings.today.league_id;
      if (typeof id === 'undefined' || id === null || id === 0) {
        id = '00';
      }
      return leagues[id.toString()];
    }
    return args.league;
  };

  var monthNumber = function monthNumber() {
    if (typeof args.league === 'undefined') {
      var d = new Date();
      var m = d.getMonth();
      return m.toString();
    }
    return args.monthNumber;
  };

  var teamName = function teamName() {
    var teams = {
      hawks: 'hawks',
      celtics: 'celtics',
      nets: 'nets',
      bulls: 'bulls',
      cavaliers: 'cavaliers',
      mavericks: 'mavericks',
      nuggets: 'nuggets',
      pistons: 'pistons',
      warriors: 'warriors',
      rockets: 'rockets',
      pacers: 'pacers',
      clippers: 'clippers',
      lakers: 'lakers',
      grizzlies: 'grizzlies',
      heat: 'heat',
      bucks: 'bucks',
      timberwolves: 'timberwolves',
      pelicans: 'pelicans',
      hornets: 'hornets',
      knicks: 'knicks',
      thunder: 'thunder',
      magic: 'magic',
      sixers: '76ers',
      suns: 'suns',
      blazers: 'trail_blazers',
      kings: 'kings',
      spurs: 'spurs',
      raptors: 'raptors',
      jazz: 'jazz',
      wizards: 'wizards'
    };
    if (typeof args.teamName === 'undefined') {
      var team = '';
      (0, _keys2.default)(teams).forEach(function (key) {
        if (window.location.href.includes(key)) {
          team = teams[key];
        }
      });
      return team;
    }
    return args.teamName;
  };

  var returnList = {
    seasonYear: seasonYear(),
    seasonTypeId: seasonTypeId(),
    leagueId: leagueId(),
    league: league(),
    monthNumber: monthNumber(),
    teamName: teamName()
  };

  if (typeof args.gameId === 'string' && args.gameId.length === 10) {
    returnList.seasonYear = '20' + args.gameId.substr(3, 2);
    returnList.seasonTypeId = '0' + args.gameId.substr(2, 1);
    returnList.leagueId = args.gameId.substr(0, 2);
    returnList.league = leagues[leagueId];
  }

  return returnList;
}

//
// ─── EXPORT ─────────────────────────────────────────────────────────────────────
//

// Returns object with request methods
var api = function api(token) {
  return {
    stats: {
      /* ----------  TODAYS SCORES  ----------*/
      todaysScores: function todaysScores() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/scores/' + newArgs.leagueId + '_todays_scores.json');
      },

      /* ----------  FULL GAME PLAY BY PLAY  ----------*/
      fullGamePlayByPlay: function fullGamePlayByPlay(gameId, quarter) {
        var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/scores/pbp/' + gameId + '_' + quarter + '.json');
      },

      /* ----------  ABBREVIATED PLAY BY PLAY  ----------*/
      abbreviatedPlayByPlay: function abbreviatedPlayByPlay(gameId, quarter) {
        var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/scores/pbp/' + gameId + '_' + quarter + '.json');
      },

      /* ----------  GAME DETAIL ----------*/
      gameDetail: function gameDetail(gameId) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/scores/gamedetail/' + gameId + '_gamedetail.json');
      },

      /* ----------  STANDINGS ----------*/
      standings: function standings() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/' + newArgs.leagueId + '_standings.json');
      },

      /* ----------  PLAYOFF BRACKET  ----------*/
      playoffBracket: function playoffBracket() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/scores/' + newArgs.leagueId + '_playoff_bracket.json');
      },

      /* ----------  TEAM INFO  ----------*/
      teamInfo: function teamInfo() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/teams/' + newArgs.leagueId + '_team_info.json');
      },

      /* ----------  PLAYER INFO  ----------*/
      playerInfo: function playerInfo() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/players/' + newArgs.leagueId + '_player_info.json');
      },

      /* ----------  ALL TIME LEADERS  ----------*/
      allTimeLeaders: function allTimeLeaders(statType) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/league/stats/' + newArgs.leagueId + '_alltime_leaders_' + statType + '_' + newArgs.seasonTypeId + '.json');
      },

      /* ----------  ALL TIME PLAYERS  ----------*/
      allTimePlayers: function allTimePlayers() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/players/' + newArgs.leagueId + '_historical_players.json');
      },

      /* ----------  ALL TIME PLAYERS  ----------*/
      leagueLeaders: function leagueLeaders(statType) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/league/stats/' + newArgs.leagueId + '_league_leaders_' + statType + '_' + newArgs.seasonTypeId + '.json');
      },

      /* ----------  TEAM SCHEDULE  ----------*/
      teamSchedule: function teamSchedule() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/teams/' + newArgs.teamName + '_schedule_' + newArgs.seasonTypeId + '.json');
      },

      /* ----------  LEAGUE SCHEDULE  ----------*/
      leagueSchedule: function leagueSchedule() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/league/' + newArgs.leagueId + '_league_schedule_' + newArgs.monthNumber + '.json');
      },

      /* ----------  ROLLING DAILY SCHEDULE  ----------*/
      rollingDailySchedule: function rollingDailySchedule() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/league/' + newArgs.leagueId + '_rolling_schedule.json');
      },

      /* ----------  TEAM ROSTER  ----------*/
      teamRoster: function teamRoster() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/teams/' + newArgs.teamName + '_roster.json');
      },

      /* ----------  TEAM COACH  ----------*/
      teamCoach: function teamCoach() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/teams/' + newArgs.teamName + '_coach.json');
      },

      /* ----------  TEAM PLAYER AVERAGES  ----------*/
      teamPlayerAverages: function teamPlayerAverages() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/teams/' + newArgs.teamName + '/player_averages_' + newArgs.seasonTypeId + '.json');
      },

      /* ----------  TEAM STATISTICS  ----------*/
      teamStatistics: function teamStatistics() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/teams/statistics/' + newArgs.teamName + '/teamstats_' + newArgs.seasonTypeId + '.json');
      },

      /* ----------  TEAM LEADERS OVERALL FILE  ----------*/
      teamLeadersOverallFile: function teamLeadersOverallFile() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/teams/statistics/' + newArgs.teamName + '/teamstats_' + newArgs.seasonTypeId + '.json');
      },

      /* ----------  TEAM LEADERS DETAIL STATS  ----------*/
      teamLeadersDetailStats: function teamLeadersDetailStats(statType) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/teams/statistics/' + newArgs.teamName + '/leaders_detail_' + statType + '_' + newArgs.seasonTypeId + '.json');
      },

      /* ----------  TEAM SEASON AVERAGES  ----------*/
      teamSeasonAverages: function teamSeasonAverages() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/teams/statistics/' + newArgs.teamName + '/season_averages_' + newArgs.seasonTypeId + '.json');
      },

      /* ----------  ADVANCED TEAM AND PLAYER STATS  ----------*/
      advancedTeamAndPlayerStats: function advancedTeamAndPlayerStats() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/teams/statistics/' + newArgs.teamName + '/advanced_stats_' + newArgs.seasonTypeId + '.json');
      },

      /* ----------  PLAYER CARDS  ----------*/
      playerCards: function playerCards(playerId) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/players/playercard_' + playerId + '_' + newArgs.seasonTypeId + '.json');
      },

      /* ----------  PLAYER RANKS  ----------*/
      playerRanks: function playerRanks(playerId) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/players/player_ranks_' + playerId + '_' + newArgs.seasonTypeId + '.json');
      },

      /* ----------  PLAYER SPLITS  ----------*/
      playerSplits: function playerSplits(playerId) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/players/player_splits_' + playerId + '_' + newArgs.seasonTypeId + '.json');
      },

      /* ----------  PLAYER HIGHS  ----------*/
      playerHighs: function playerHighs(playerId) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var newArgs = defineOtherArgs(args);
        return fetchStats(newArgs.league + '/' + newArgs.seasonYear + '/players/player_highs_' + playerId + '_' + newArgs.seasonTypeId + '.json');
      }
    },
    /* ----------  CONTENT API  ----------*/
    content: function content(team, query) {
      var reqIndex = pathCreator('index', team, query);
      var reqType = pathCreator('types', 'article,video,page,gallery,wsc,imported_video', query);
      var allowed = ['freeform', 'games', 'gameRelated', 'writer', 'players', 'teams', 'topics', 'events', 'streamState', 'channels', 'section', 'body', 'headline', 'shortHeadline', 'subheadline', 'title', 'description', 'url', 'before', 'after', 'lang', 'sort', 'offset', 'count', 'verbose'];
      var reqQs = (0, _getOwnPropertyNames2.default)(query);
      var reqQuery = '';
      reqQs.forEach(function (reqQ) {
        if (allowed.indexOf(reqQ) !== -1) {
          var singleQuery = '&' + reqQ + '=';
          if (reqQuery === '') {
            singleQuery = '?' + reqQ + '=';
          }
          if (Array.isArray(query[reqQ])) {
            singleQuery += encodeItems(query[reqQ]);
          } else if (typeof query[reqQ] === 'string' || typeof query[reqQ] === 'number') {
            singleQuery += encodeURIComponent(query[reqQ]);
          }
          reqQuery += singleQuery;
        }
      });
      return fetchContent(token, reqIndex, reqType, reqQuery);
    },

    /* ----------  STATS.NBA.COM  ----------*/
    leagueStats: function leagueStats(url) {
      return fetchLeagueStats(url);
    }
  };
};

module.exports = api;
