/* ================================
=            NBA FEEDS            =
================================== */

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
async function fetchStats(url) {
  const urlRoot = 'https://data.nba.com/data/v2015/json/mobile_teams/';
  const rnd = Math.floor(Math.random() * 99999);
  const promise = fetch(`${urlRoot}${url}?${rnd}`).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} - Failed to fetch stats at: ${urlRoot}${url}`);
    }
    return res;
  }).then(res => res.json());
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

// Verify that the required arguments were provided in the function call (stats API)
function checkArgs(provided, required) {
  const msg = required.reduce((acc, val) => {
    if (provided[val] === undefined || provided[val] === null) {
      return `${acc} ${val}`;
    }
    return acc;
  });
  throw new Error(`Missing arguments: ${msg}`);
}

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

//
// ─── EXPORT FUNCTION ────────────────────────────────────────────────────────────
//

const api = function (token) {
  return {
    stats: {
    /* ----------  TODAYS SCORES  ----------*/
      todaysScores(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(`${args.league}/${args.seasonYear}/scores/${args.leagueID}_todays_scores.json`);
      },
      /* ----------  FULL GAME PLAY BY PLAY  ----------*/
      fullGamePlayByPlay(args) {
        checkArgs(args, ['league', 'seasonYear', 'gameID', 'quarter']);
        return fetchStats(`${args.league}/${args.seasonYear}/scores/pbp/${args.gameID}_${args.quarter}.json`);
      },
      /* ----------  ABBREVIATED PLAY BY PLAY  ----------*/
      abbreviatedPlayByPlay(args) {
        checkArgs(args, ['league', 'seasonYear', 'gameID', 'quarter']);
        return fetchStats(`${args.league}/${args.seasonYear}/scores/pbp/${args.gameID}_${args.quarter}.json`);
      },
      /* ----------  GAME DETAIL ----------*/
      gameDetail(args) {
        checkArgs(args, ['league', 'seasonYear', 'gameID']);
        return fetchStats(`${args.league}/${args.seasonYear}/scores/gamedetail/${args.gameID}_gamedetail.json`);
      },
      /* ----------  STANDINGS ----------*/
      standings(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(`${args.league}/${args.seasonYear}/${args.leagueID}_standings.json`);
      },
      /* ----------  PLAYOFF BRACKET  ----------*/
      playoffBracket(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(`${args.league}/${args.seasonYear}/scores/${args.leagueID}_playoff_bracket.json`);
      },
      /* ----------  TEAM INFO  ----------*/
      teamInfo(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(`${args.league}/${args.seasonYear}/teams/${args.leagueID}_team_info.json`);
      },
      /* ----------  PLAYER INFO  ----------*/
      playerInfo(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(`${args.league}/${args.seasonYear}/players/${args.leagueID}_player_info.json`);
      },
      /* ----------  ALL TIME LEADERS  ----------*/
      allTimeLeaders(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID', 'statType', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/league/stats/${args.leagueID}_alltime_leaders_${args.statType}_${args.seasonTypeID}.json`);
      },
      /* ----------  ALL TIME PLAYERS  ----------*/
      allTimePlayers(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(`${args.league}/${args.seasonYear}/players/${args.leagueID}_historical_players.json`);
      },
      /* ----------  ALL TIME PLAYERS  ----------*/
      leagueLeaders(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID', 'statType', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/league/stats/${args.leagueID}_league_leaders_${args.statType}_${args.seasonTypeID}.json`);
      },
      /* ----------  TEAM SCHEDULE  ----------*/
      teamSchedule(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/teams/${args.teamName}_schedule_${args.seasonTypeID}.json`);
      },
      /* ----------  LEAGUE SCHEDULE  ----------*/
      leagueSchedule(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID', 'monthNumber']);
        return fetchStats(`${args.league}/${args.seasonYear}/league/${args.leagueID}_league_schedule_${args.monthNumber}.json`);
      },
      /* ----------  ROLLING DAILY SCHEDULE  ----------*/
      rollingDailySchedule(args) {
        checkArgs(args, ['league', 'seasonYear', 'leagueID']);
        return fetchStats(`${args.league}/${args.seasonYear}/league/${args.leagueID}_rolling_schedule.json`);
      },
      /* ----------  TEAM ROSTER  ----------*/
      teamRoster(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName']);
        return fetchStats(`${args.league}/${args.seasonYear}/teams/${args.teamName}_roster.json`);
      },
      /* ----------  TEAM COACH  ----------*/
      teamCoach(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName']);
        return fetchStats(`${args.league}/${args.seasonYear}/teams/${args.teamName}_coach.json`);
      },
      /* ----------  TEAM PLAYER AVERAGES  ----------*/
      teamPlayerAverages(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/teams/${args.teamName}/player_averages_${args.seasonTypeID}.json`);
      },
      /* ----------  TEAM STATISTICS  ----------*/
      teamStatistics(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/teams/statistics/${args.teamName}/teamstats_${args.seasonTypeID}.json`);
      },
      /* ----------  TEAM LEADERS OVERALL FILE  ----------*/
      teamLeadersOverallFile(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/teams/statistics/${args.teamName}/teamstats_${args.seasonTypeID}.json`);
      },
      /* ----------  TEAM LEADERS DETAIL STATS  ----------*/
      teamLeadersDetailStats(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'statType', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/teams/statistics/${args.teamName}/leaders_detail_${args.statType}_${args.seasonTypeID}.json`);
      },
      /* ----------  TEAM SEASON AVERAGES  ----------*/
      teamSeasonAverages(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/teams/statistics/${args.teamName}/season_averages_${args.seasonTypeID}.json`);
      },
      /* ----------  ADVANCED TEAM AND PLAYER STATS  ----------*/
      advancedTeamAndPlayerStats(args) {
        checkArgs(args, ['league', 'seasonYear', 'teamName', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/teams/statistics/${args.teamName}/advanced_stats_${args.seasonTypeID}.json`);
      },
      /* ----------  PLAYER CARDS  ----------*/
      playerCards(args) {
        checkArgs(args, ['league', 'seasonYear', 'playerID', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/players/playercard_${args.playerID}_${args.seasonTypeID}.json`);
      },
      /* ----------  PLAYER RANKS  ----------*/
      playerRanks(args) {
        checkArgs(args, ['league', 'seasonYear', 'playerID', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/players/player_ranks_${args.playerID}_${args.seasonTypeID}.json`);
      },
      /* ----------  PLAYER SPLITS  ----------*/
      playerSplits(args) {
        checkArgs(args, ['league', 'seasonYear', 'playerID', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/players/player_splits_${args.playerID}_${args.seasonTypeID}.json`);
      },
      /* ----------  PLAYER HIGHS  ----------*/
      playerHighs(args) {
        checkArgs(args, ['league', 'seasonYear', 'playerID', 'seasonTypeID']);
        return fetchStats(`${args.league}/${args.seasonYear}/players/player_highs_${args.playerID}_${args.seasonTypeID}.json`);
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

