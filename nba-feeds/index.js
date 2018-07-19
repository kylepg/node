'use strict';

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

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

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

// Fetch browser compatibility
var fetchStats = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
    var urlRoot, rnd, promise, response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            urlRoot = 'https://data.nba.com/data/v2015/json/mobile_teams/';
            rnd = Math.floor(Math.random() * 99999);
            promise = fetch('' + urlRoot + url + '?' + rnd).then(function (res) {
              if (!res.ok) {
                throw new Error(res.status + ' - Failed to fetch stats at: ' + urlRoot + url);
              }
              return res;
            }).then(function (res) {
              return res.json();
            });
            _context.next = 5;
            return promise;

          case 5:
            response = _context.sent;
            return _context.abrupt('return', response);

          case 7:
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

// Verify that the required arguments were provided in the function call (stats API)


require('whatwg-fetch');

var _fetchJsonp = require('fetch-jsonp');

var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkArgs(provided, required) {
  var msg = required.reduce(function (acc, val) {
    if (provided[val] === undefined || provided[val] === null) {
      return acc + ' ' + val;
    }
    return acc;
  });
  throw new Error('Missing arguments: ' + msg);
}

// Encode query items to valid URI format (content API)
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

//
// ─── EXPORT FUNCTION ────────────────────────────────────────────────────────────
//

var api = function api(token) {
  return {
    stats: {
      /* ----------  TODAYS SCORES  ----------*/
      todaysScores: function todaysScores(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/scores/' + args.leagueID + '_todays_scores.json');
      },

      /* ----------  FULL GAME PLAY BY PLAY  ----------*/
      fullGamePlayByPlay: function fullGamePlayByPlay(args) {
        checkArgs(args, ['league', 'seasonYear', 'gameID', 'quarter']);
        return fetchStats(args.league + '/' + args.seasonYear + '/scores/pbp/' + args.gameID + '_' + args.quarter + '.json');
      },

      /* ----------  ABBREVIATED PLAY BY PLAY  ----------*/
      abbreviatedPlayByPlay: function abbreviatedPlayByPlay(args) {
        checkArgs(args, ['league', 'seasonYear', 'gameID', 'quarter']);
        return fetchStats(args.league + '/' + args.seasonYear + '/scores/pbp/' + args.gameID + '_' + args.quarter + '.json');
      },

      /* ----------  GAME DETAIL ----------*/
      gameDetail: function gameDetail(args) {
        checkArgs(args, ['league', 'seasonYear', 'gameID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/scores/gamedetail/' + args.gameID + '_gamedetail.json');
      },

      /* ----------  STANDINGS ----------*/
      standings: function standings(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/' + args.leagueID + '_standings.json');
      },

      /* ----------  PLAYOFF BRACKET  ----------*/
      playoffBracket: function playoffBracket(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/scores/' + args.leagueID + '_playoff_bracket.json');
      },

      /* ----------  TEAM INFO  ----------*/
      teamInfo: function teamInfo(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/teams/' + args.leagueID + '_team_info.json');
      },

      /* ----------  PLAYER INFO  ----------*/
      playerInfo: function playerInfo(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/players/' + args.leagueID + '_player_info.json');
      },

      /* ----------  ALL TIME LEADERS  ----------*/
      allTimeLeaders: function allTimeLeaders(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID', 'statType', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/league/stats/' + args.leagueID + '_alltime_leaders_' + args.statType + '_' + args.seasonTypeID + '.json');
      },

      /* ----------  ALL TIME PLAYERS  ----------*/
      allTimePlayers: function allTimePlayers(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/players/' + args.leagueID + '_historical_players.json');
      },

      /* ----------  ALL TIME PLAYERS  ----------*/
      leagueLeaders: function leagueLeaders(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID', 'statType', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/league/stats/' + args.leagueID + '_league_leaders_' + args.statType + '_' + args.seasonTypeID + '.json');
      },

      /* ----------  TEAM SCHEDULE  ----------*/
      teamSchedule: function teamSchedule(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/teams/' + args.teamName + '_schedule_' + args.seasonTypeID + '.json');
      },

      /* ----------  LEAGUE SCHEDULE  ----------*/
      leagueSchedule: function leagueSchedule(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID', 'monthNumber']);
        return fetchStats(args.league + '/' + args.seasonYear + '/league/' + args.leagueID + '_league_schedule_' + args.monthNumber + '.json');
      },

      /* ----------  ROLLING DAILY SCHEDULE  ----------*/
      rollingDailySchedule: function rollingDailySchedule(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/league/' + args.leagueID + '_rolling_schedule.json');
      },

      /* ----------  TEAM ROSTER  ----------*/
      teamRoster: function teamRoster(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName']);
        return fetchStats(args.league + '/' + args.seasonYear + '/teams/' + args.teamName + '_roster.json');
      },

      /* ----------  TEAM COACH  ----------*/
      teamCoach: function teamCoach(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName']);
        return fetchStats(args.league + '/' + args.seasonYear + '/teams/' + args.teamName + '_coach.json');
      },

      /* ----------  TEAM PLAYER AVERAGES  ----------*/
      teamPlayerAverages: function teamPlayerAverages(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/teams/' + args.teamName + '/player_averages_' + args.seasonTypeID + '.json');
      },

      /* ----------  TEAM STATISTICS  ----------*/
      teamStatistics: function teamStatistics(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/teams/statistics/' + args.teamName + '/teamstats_' + args.seasonTypeID + '.json');
      },

      /* ----------  TEAM LEADERS OVERALL FILE  ----------*/
      teamLeadersOverallFile: function teamLeadersOverallFile(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/teams/statistics/' + args.teamName + '/teamstats_' + args.seasonTypeID + '.json');
      },

      /* ----------  TEAM LEADERS DETAIL STATS  ----------*/
      teamLeadersDetailStats: function teamLeadersDetailStats(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'statType', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/teams/statistics/' + args.teamName + '/leaders_detail_' + args.statType + '_' + args.seasonTypeID + '.json');
      },

      /* ----------  TEAM SEASON AVERAGES  ----------*/
      teamSeasonAverages: function teamSeasonAverages(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/teams/statistics/' + args.teamName + '/season_averages_' + args.seasonTypeID + '.json');
      },

      /* ----------  ADVANCED TEAM AND PLAYER STATS  ----------*/
      advancedTeamAndPlayerStats: function advancedTeamAndPlayerStats(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/teams/statistics/' + args.teamName + '/advanced_stats_' + args.seasonTypeID + '.json');
      },

      /* ----------  PLAYER CARDS  ----------*/
      playerCards: function playerCards(args) {
        checkArgs(args, ['league', 'seasonYear', 'playerID', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/players/playercard_' + args.playerID + '_' + args.seasonTypeID + '.json');
      },

      /* ----------  PLAYER RANKS  ----------*/
      playerRanks: function playerRanks(args) {
        checkArgs(args, ['league', 'seasonYear', 'playerID', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/players/player_ranks_' + args.playerID + '_' + args.seasonTypeID + '.json');
      },

      /* ----------  PLAYER SPLITS  ----------*/
      playerSplits: function playerSplits(args) {
        checkArgs(args, ['league', 'seasonYear', 'playerID', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/players/player_splits_' + args.playerID + '_' + args.seasonTypeID + '.json');
      },

      /* ----------  PLAYER HIGHS  ----------*/
      playerHighs: function playerHighs(args) {
        checkArgs(args, ['league', 'seasonYear', 'playerID', 'seasonTypeID']);
        return fetchStats(args.league + '/' + args.seasonYear + '/players/player_highs_' + args.playerID + '_' + args.seasonTypeID + '.json');
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
