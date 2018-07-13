'use strict';

var fetchData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var rnd, promise, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            rnd = Math.floor(Math.random() * 99999);
            promise = fetch('' + url + rnd).then(function (response) {
              return response.json();
            });
            _context.next = 5;
            return promise;

          case 5:
            response = _context.sent;
            return _context.abrupt('return', response);

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](0);
            throw new Error(_context.t0);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));

  return function fetchData(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = function () {
  var urlRoot = 'https://data.nba.com/data/v2015/json/mobile_teams/nba/';
  var feeds = {
    mobile: {
      todaysScores: function todaysScores(year) {
        fetchData('' + urlRoot + year + '/scores/00_todays_scores.json');
      },
      playByPlay: function playByPlay(gid, quarter, year) {
        fetchData('https://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/scores/pbp/' + gid + '_' + quarter + '.json');
      },
      abbreviatedPlayByPlay: function abbreviatedPlayByPlay(gid, quarter, year) {
        fetchData('https://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/scores/pbp/' + gid + '_' + quarter + '.json');
      },
      gameDetail: function gameDetail(gid, year) {
        fetchData('https://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/scores/gamedetail/' + gid + '_gamedetail.json');
      },
      standings: function standings(year) {
        fetchData('https://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/00_standings.json');
      },
      roster: function roster(year, team) {
        fetchData('https://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/teams/' + team + '_roster.json');
      },
      playerCard: function playerCard(pid, year) {
        fetchData('https://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/players/playercard_' + pid + '_02.json');
      }
    }
  };
  return feeds;
}();
