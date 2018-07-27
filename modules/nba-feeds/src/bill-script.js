function getSeasonDetails(gameId) {
  const leagueNames = {
    '00': 'nba',
    10: 'wnba',
    14: 'orlando',
    15: 'vegas',
    16: 'utah',
    20: 'dleague'
  };
  let seasonYear = '';
  let seasonStage = '';
  let leagueId = '';
  let leagueName = '';
  if (typeof (gameId) === 'string' && gameId.length === 10) {
    seasonYear = `20${gameId.substr(3, 2)}`;
    seasonStage = `0${gameId.substr(2, 1)}`;
    leagueId = gameId.substr(0, 2);
    leagueName = leagueNames[leagueId];
  } else {
    seasonYear = Drupal.settings.today.season_year;
    if (typeof (seasonYear) === 'undefined' || typeof (seasonYear) === null) {
      const nowDate = new Date();
      seasonYear = nowDate.getFullYear();
		  const nowMonth = nowDate.getMonth();
		  if (nowMonth < 6) {
		    seasonYear -= 1;
		  }
    }
    seasonYear = seasonYear.toString();
    seasonStage = Drupal.settings.today.season_stage;
    if (typeof (seasonStage) === 'undefined' || typeof (seasonStage) === null) {
      seasonStage = '2';
    }
    seasonStage = `0${seasonStage.toString()}`;
    leagueId = Drupal.settings.today.league_id;
    if (typeof (leagueId) === 'undefined' || typeof (leagueId) === null || leagueId === 0) {
      leagueId = '00';
    }
    leagueId = leagueId.toString();
    leagueName = leagueNames[leagueId];
  }
  const returnList = {
    seasonYear,
    seasonStage,
    leagueId,
    leagueName
  };
  return returnList;
}
