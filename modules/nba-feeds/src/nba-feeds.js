/* ================================
=            NBA FEEDS            =
================================== */

/* global Drupal */

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

// Fetch browser compatibility
import 'whatwg-fetch';
// Use JSONP with fetch, Necessary for making cross-domain request to stats.nba.com
import fetchJsonp from 'fetch-jsonp';

//
// ─── REQUESTS ───────────────────────────────────────────────────────────────────
//

// Fetch stats from mobile feed API
async function fetchStats(url, fallbackUrl) {
  const urlRoot = 'https://data.nba.com/data/v2015/json/mobile_teams/';
  const promise = fetch(`${urlRoot}${url}`)
    .then(res => res.json()).catch(() => {
      if (typeof (fallbackUrl) !== 'undefined') {
        return fetch(`${fallbackUrl}`).then(res => res.json());
      }
      return '';
    });
  const response = await promise;
  return response;
}

// Fetch content data from the NBA content API
async function fetchContent(token, reqIndex, reqType, reqQuery) {
  const promise = fetch(`https://api.nba.net/2/${reqIndex}/${reqType}${reqQuery}`, {
    headers: {
      accessToken: token
    }
  })
    .then(response => response.json())
    .then(json => json.response.result);
  return promise;
}

// Fetch stats from stats.nba.com
async function fetchLeagueStats(url) {
  const promise = fetchJsonp(`${url}`)
    .then(res => res.json());
  const data = await promise;
  return data;
}

//
// ─── HELPERS ────────────────────────────────────────────────────────────────────
//


// Encode query items to valid URI format (content API)
function encodeItems(items) {
  const output = [];
  items.forEach((item) => {
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
function defineOtherArgs(args, gid = null) {
  const leagues = {
    '00': 'nba',
    10: 'wnba',
    14: 'orlando',
    15: 'vegas',
    16: 'utah',
    20: 'dleague'
  };
  const seasonYear = () => {
    if (typeof (args.seasonYear) === 'undefined') {
      if (gid !== null) {
        const yy = gid.substr(3, 2);
        return `20${yy}`;
      }
      if (typeof (Drupal.settings.today.season_year) === 'undefined' || seasonYear === null) {
        const d = new Date();
        let y = d.getFullYear();
        const m = d.getMonth();
        if (m < 6) {
          y -= 1;
        }
        return y;
      }
      return Drupal.settings.today.season_year;
    }
    return args.seasonYear;
  };

  const seasonTypeId = () => {
    if (typeof (args.seasonTypeId) === 'undefined') {
      let id = Drupal.settings.today.season_stage;
      if (typeof (id) === 'undefined' || id === null) {
        id = '2';
      }
      return `0${id.toString()}`;
    }
    return args.seasonTypeId;
  };

  const leagueId = () => {
    if (typeof (args.leagueId) === 'undefined') {
      let id = Drupal.settings.today.league_id;
      if (typeof (id) === 'undefined' || id === null || id === 0) {
        id = '00';
      }
      return id.toString();
    }
    return args.leagueId;
  };

  const league = () => {
    if (typeof (args.league) === 'undefined') {
      let id = Drupal.settings.today.league_id;
      if (typeof (id) === 'undefined' || id === null || id === 0) {
        id = '00';
      }
      return leagues[id.toString()];
    }
    return args.league;
  };

  const monthNumber = () => {
    if (typeof (args.league) === 'undefined') {
      return Drupal.settings.today.sys_month;
    }
    return args.monthNumber;
  };

  const teamName = () => {
    if (typeof (args.teamName) === 'undefined') {
      return Drupal.settings.team.CODE;
    }
    return args.teamName;
  };

  const fallbackUrl = () => {
    if (typeof (args.fallbackUrl) === 'undefined') {
      return null;
    }
    return args.fallbackUrl;
  };

  const returnList = {
    seasonYear: seasonYear(),
    seasonTypeId: seasonTypeId(),
    leagueId: leagueId(),
    league: league(),
    monthNumber: monthNumber(),
    teamName: teamName(),
    fallbackUrl: fallbackUrl()
  };

  if (typeof (args.gameId) === 'string' && args.gameId.length === 10) {
    returnList.seasonYear = `20${args.gameId.substr(3, 2)}`;
    returnList.seasonTypeId = `0${args.gameId.substr(2, 1)}`;
    returnList.leagueId = args.gameId.substr(0, 2);
    returnList.league = leagues[leagueId];
  }

  return returnList;
}


//
// ─── EXPORT ─────────────────────────────────────────────────────────────────────
//

// Returns object with request methods
const api = function (token) {
  return {
    stats: {
    /* ----------  TODAYS SCORES  ----------*/
      todaysScores(args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/scores/${newArgs.leagueId}_todays_scores.json`, args.fallbackUrl);
      },
      /* ----------  FULL GAME PLAY BY PLAY  ----------*/
      fullGamePlayByPlay(gameId, quarter, args = {}) {
        const newArgs = defineOtherArgs(args, gameId);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/scores/pbp/${gameId}_${quarter}.json`, args.fallbackUrl);
      },
      /* ----------  ABBREVIATED PLAY BY PLAY  ----------*/
      abbreviatedPlayByPlay(gameId, quarter, args = {}) {
        const newArgs = defineOtherArgs(args, gameId);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/scores/pbp/${gameId}_${quarter}.json`, args.fallbackUrl);
      },
      /* ----------  GAME DETAIL ----------*/
      gameDetail(gameId, args = {}) {
        const newArgs = defineOtherArgs(args, gameId);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/scores/gamedetail/${gameId}_gamedetail.json`, args.fallbackUrl);
      },
      /* ----------  STANDINGS ----------*/
      standings(args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/${newArgs.leagueId}_standings.json`, args.fallbackUrl);
      },
      /* ----------  PLAYOFF BRACKET  ----------*/
      playoffBracket(args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/scores/${newArgs.leagueId}_playoff_bracket.json`, args.fallbackUrl);
      },
      /* ----------  TEAM INFO  ----------*/
      teamInfo(args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/teams/${newArgs.leagueId}_team_info.json`, args.fallbackUrl);
      },
      /* ----------  PLAYER INFO  ----------*/
      playerInfo(args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/players/${newArgs.leagueId}_player_info.json`, args.fallbackUrl);
      },
      /* ----------  ALL TIME LEADERS  ----------*/
      allTimeLeaders(statType, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/league/stats/${newArgs.leagueId}_alltime_leaders_${statType}_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      },
      /* ----------  ALL TIME PLAYERS  ----------*/
      allTimePlayers(args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/players/${newArgs.leagueId}_historical_players.json`, args.fallbackUrl);
      },
      /* ----------  ALL TIME PLAYERS  ----------*/
      leagueLeaders(statType, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/league/stats/${newArgs.leagueId}_league_leaders_${statType}_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      },
      /* ----------  TEAM SCHEDULE  ----------*/
      teamSchedule(args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/teams/${newArgs.teamName}_schedule_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      },
      /* ----------  LEAGUE SCHEDULE  ----------*/
      leagueSchedule(args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/league/${newArgs.leagueId}_league_schedule_${newArgs.monthNumber}.json`, args.fallbackUrl);
      },
      /* ----------  ROLLING DAILY SCHEDULE  ----------*/
      rollingDailySchedule(args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/league/${newArgs.leagueId}_rolling_schedule.json`, args.fallbackUrl);
      },
      /* ----------  TEAM ROSTER  ----------*/
      teamRoster(teamName, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/teams/${teamName}_roster.json`, args.fallbackUrl);
      },
      /* ----------  TEAM COACH  ----------*/
      teamCoach(teamName, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/teams/${teamName}_coach.json`, args.fallbackUrl);
      },
      /* ----------  TEAM PLAYER AVERAGES  ----------*/
      teamPlayerAverages(teamName, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/teams/${teamName}/player_averages_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      },
      /* ----------  TEAM STATISTICS  ----------*/
      teamStatistics(teamName, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/teams/statistics/${teamName}/teamstats_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      },
      /* ----------  TEAM LEADERS OVERALL FILE  ----------*/
      teamLeadersOverallFile(teamName, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/teams/statistics/${teamName}/teamstats_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      },
      /* ----------  TEAM LEADERS DETAIL STATS  ----------*/
      teamLeadersDetailStats(teamName, statType, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/teams/statistics/${teamName}/leaders_detail_${statType}_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      },
      /* ----------  TEAM SEASON AVERAGES  ----------*/
      teamSeasonAverages(teamName, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/teams/statistics/${teamName}/season_averages_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      },
      /* ----------  ADVANCED TEAM AND PLAYER STATS  ----------*/
      advancedTeamAndPlayerStats(teamName, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/teams/statistics/${teamName}/advanced_stats_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      },
      /* ----------  PLAYER CARDS  ----------*/
      playerCards(playerId, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/players/playercard_${playerId}_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      },
      /* ----------  PLAYER RANKS  ----------*/
      playerRanks(playerId, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/players/player_ranks_${playerId}_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      },
      /* ----------  PLAYER SPLITS  ----------*/
      playerSplits(playerId, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/players/player_splits_${playerId}_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      },
      /* ----------  PLAYER HIGHS  ----------*/
      playerHighs(playerId, args = {}) {
        const newArgs = defineOtherArgs(args);
        return fetchStats(`${newArgs.league}/${newArgs.seasonYear}/players/player_highs_${playerId}_${newArgs.seasonTypeId}.json`, args.fallbackUrl);
      }
    },
    /* ----------  CONTENT API  ----------*/
    content(team, query) {
      const reqIndex = pathCreator('index', team, query);
      const reqType = pathCreator('types', 'article,video,page,gallery,wsc,imported_video', query);
      const allowed = [
        'freeform',
        'games',
        'gameRelated',
        'writer',
        'players',
        'teams',
        'topics',
        'events',
        'streamState',
        'channels',
        'section',
        'body',
        'headline',
        'shortHeadline',
        'subheadline',
        'title',
        'description',
        'url',
        'before',
        'after',
        'lang',
        'sort',
        'offset',
        'count',
        'verbose'
      ];
      const reqQs = Object.getOwnPropertyNames(query);
      let reqQuery = '';
      reqQs.forEach((reqQ) => {
        if (allowed.indexOf(reqQ) !== -1) {
          let singleQuery = `&${reqQ}=`;
          if (reqQuery === '') {
            singleQuery = `?${reqQ}=`;
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
    leagueStats(url) {
      return fetchLeagueStats(url);
    }
  };
};

module.exports = api;
