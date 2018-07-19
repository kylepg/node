

Asynchronously fetch data from mobile stat feed, content API, and stats.nba.com.

##Installation
```bash
npm install nba-feeds
```

##Usage
```js
import nbaFeeds from 'nba-feeds';

const nba = nbaFeeds('< content API access token goes here >');
```

##Feeds

###Mobile Stats


```js
// Return playoff bracket JSON
const playoffBracket = await nba.stats.playoffBracket({ league: 'nba', seasonYear: '2017', leagueId: '00' });
```



#####Today's Scores
```js
todaysScores({league, seasonYear, leagueId})
```
#####Full Game Play by Play
```js
fullGamePlayByPlay({league, seasonYear, gameId, quarter})
```

#####Abbreviated Play by Play
```js
abbreviatedPlayByPlay({league, seasonYear, gameId, quarter})
```

#####Game Detail
```js
gameDetail({league, seasonYear, gameId})
```

#####Standings
```js
standings({league, seasonYear, leagueId})
```

#####Playoff Bracket
```js
playoffBracket({league, seasonYear, leagueId})
```

#####Team Info
```js
teamInfo({league, seasonYear, leagueId})
```

#####Player Info
```js
playerInfo({league, seasonYear, leagueId})
```

#####All Time Leaders
```js
allTimeLeaders({league, seasonYear, leagueId, statType, seasonTypeId})
```

#####League Leaders
```js
leagueLeaders({league, seasonYear, leagueId, statType, seasonTypeId})
```

#####Team Schedule
```js
teamSchedule({league, seasonYear, teamName, seasonTypeId})
```

#####League Schedule
```js
leagueSchedule({league, seasonYear, leagueId, monthNumber})
```

#####Rolling Daily Schedule
```js
rollingDailySchedule({league, seasonYear, leagueId})
```

#####Team Roster
```js
teamRoster({league, seasonYear, teamName})
```

#####Team Coach
```js
rollingDailySchedule({league, seasonYear, teamName})
```

#####Team Player Averages
```js
teamPlayerAverages({league, seasonYear, teamName, seasonTypeId})
```

#####Team Statistics
```js
teamStatistics({league, seasonYear, teamName, seasonTypeId})
```

#####Team Leaders Overall File
```js
teamLeadersOverallFile({league, seasonYear, teamName, seasonTypeId})
```

#####Team Leaders Detail Stats
```js
teamLeadersDetailStats({league, seasonYear, teamName, statType, seasonTypeId})
```

#####Team Season Averages
```js
teamSeasonAverages({league, seasonYear, teamName, seasonTypeId})
```

#####Advanced Team And Player Stats
```js
advancedTeamAndPlayerStats({league, seasonYear, teamName, seasonTypeId})
```

#####Player Cards
```js
playerCards({league, seasonYear, playerId, seasonTypeId})
```

#####Player Ranks
```js
playerRanks({league, seasonYear, playerId, seasonTypeId})
```

#####Player Splits
```js
playerSplits({league, seasonYear, playerId, seasonTypeId})
```

#####Player Hights
```js
playerHighs({league, seasonYear, playerId, seasonTypeId})
```


<!-- 



####League Stats

#####Example 
```js
// Return player awards
const playerAwards = await nba.leagueStats('https://stats.nba.com/stats/playerawards?PlayerID=201143');
```

####Content API
#####Example 
```js
// Return highlights
const highlights = await nba.content('celtics', {
      types: ['wsc', 'imported_video'],
      count: 50,
      after: null,
      before: null 
});
``` -->