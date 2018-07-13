async function fetchData(url) {
  try {
    const rnd = Math.floor(Math.random() * 99999);
    const promise = fetch(`${url}${rnd}`).then(response => response.json());
    const response = await promise;
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = (function () {
  const urlRoot = 'https://data.nba.com/data/v2015/json/mobile_teams/nba/';
  const feeds = {
    mobile: {
      todaysScores(year) {
        fetchData(`${urlRoot}${year}/scores/00_todays_scores.json`);
      },
      playByPlay(gid, quarter, year) {
        fetchData(`https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/scores/pbp/${gid}_${quarter}.json`);
      },
      abbreviatedPlayByPlay(gid, quarter, year) {
        fetchData(`https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/scores/pbp/${gid}_${quarter}.json`);
      },
      gameDetail(gid, year) {
        fetchData(`https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/scores/gamedetail/${gid}_gamedetail.json`);
      },
      standings(year) {
        fetchData(`https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/00_standings.json`);
      },
      roster(year, team) {
        fetchData(`https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/teams/${team}_roster.json`);
      },
      playerCard(pid, year) {
        fetchData(`https://data.nba.com/data/v2015/json/mobile_teams/nba/${year}/players/playercard_${pid}_02.json`);
      }
    }
  };
  return feeds;
})();
