module.exports = (function () {
  let urlRoot = '';
  if (window.location.href.indexOf('nba.com') > -1) {
    urlRoot = 'https://data.nba.com/data/v2015/json/mobile_teams/nba/';
  } else {
    urlRoot = 'https://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/json/';
  }
  const feeds = {
    mobile: {
      live: {
        todaysScores(year) {
          return `${urlRoot}${year}/scores/00_todays_scores.json`;
        },
        playByPlay(gid, quarter, year) {
          return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/scores/pbp/${gid}_${quarter}.json`;
        },
        abbreviatedPlayByPlay(gid, quarter, year) {
          return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/scores/pbp/${gid}_${quarter}.json`;
        },
        gameDetail(gid, year) {
          return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/scores/gamedetail/${gid}_gamedetail.json`;
        }
      },
      standings(year) {
        return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/00_standings.json`;
      },
      celticsRoster(year) {
        return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/teams/celtics_roster.json`;
      },
      awayRoster(awayTn, year) {
        return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/teams/${awayTn}_roster.json`;
      },
      bioData: 'https://io.cnn.net/nba/nba/.element/media/2.0/teamsites/celtics/json/bio-data.json',
      playerCard(pid, year) {
        return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/players/playercard_${pid}_02.json`;
      },
      gameDetail(gid, year) {
        return `https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/scores/gamedetail/${gid}_gamedetail.json`;
      },
      statsNba: {
        leagueLeaders:
          'https://stats.nba.com/stats/homepagev2?GameScope=Season&LeagueID=00&PlayerOrTeam=Player&PlayerScope=All+Players&Season=2017-18&SeasonType=Regular+Season&StatType=Traditional&callback=?'
      }
    }
  };

  return feeds;
})();
