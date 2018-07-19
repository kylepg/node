

Asynchronously fetch data from mobile stat feed, content API, and stats.nba.com.

## Installation
```bash
npm install nba-feeds
```

## Usage
```js
import nbaFeeds from 'nba-feeds';

const nba = nbaFeeds('< content API access token goes here >');
```

## Feeds

### Mobile Stats


```js
// Return playoff bracket JSON
const playoffBracket = await nba.stats.playoffBracket({ league: 'nba', seasonYear: '2017', leagueId: '00' });
```



##### Today's Scores
```js
todaysScores({league, seasonYear, leagueId})
```
This is a real time update for every game that plays on the current day for the designated league. Initially generated on game
day, it will contain all the games for the day and will be updated with scores in real time. Last meeting is included in this feed.
This will refresh at noon with the games for the upcoming day/night. For days with no games (Thanksgiving, Christmas Eve),
the contents will be just the gs element. If a game occurs before noon, the file will be created when that game’s events are
logged.

##### Full Game Play by Play
```js
fullGamePlayByPlay({league, seasonYear, gameId, quarter})
```
This feed contains play by play data by period (including overtimes) for each game, and updates in real time during live
games.
##### Abbreviated Play by Play
```js
abbreviatedPlayByPlay({league, seasonYear, gameId, quarter})
```
This feed contains abbreviated play by play list: The last 20 events before current point in the game are provided. These
events can go across quarters. This updates real time during live games.
#####Game Detail
```js
gameDetail({league, seasonYear, gameId})
```
This feed contains the full boxscore for a game. Updates occur in real time during live games.
NOTE: Removed from this feed are the team season averages. This can now be found in a separate feed. The Last Meeting
information has also been moved out of this feed and into the Team Schedule feed
##### Standings
```js
standings({league, seasonYear, leagueId})
```
This feed is produced when standings are available for the given season for the designated league. Updated every time a
game ends, or standings are changed. This feed is only generated for preseason and regular season
##### Playoff Bracket
```js
playoffBracket({league, seasonYear, leagueId})
```
This feed contains a representation of the tournament for the playoffs. It is updated after each game.
No playoff bracket exists for either summer league due to all games being considered part of the regular season (the playoff
games just continue counting up for game id after the play-in games are complete).
The D League also does not currently have a playoff bracket.
The game elements in the playoff bracket differ from other schedule feeds in that the home/visitor nodes do not contain a
record attribute. Instead this information can be gleaned from the series (‘ser’) element. Additionally, the series information
(‘seri’) on the game is also removed as there is a series info (‘seri’) attribute on the series (‘ser’) element.
##### Team Info
```js
teamInfo({league, seasonYear, leagueId})
```
This has information on all regular season teams, even during the playoffs. During the preseason, any international teams will
show up.
##### Player Info
```js
playerInfo({league, seasonYear, leagueId})
```
This feed contains information on all players and the teams that they have been on during the current season. It is updated
daily.
##### All Time Leaders
```js
allTimeLeaders({league, seasonYear, leagueId, statType, seasonTypeId})
```
The all-time leaders files are generate for various statistical categories and contain the career totals and per game leaders for
the entire league history. A separate player card file is generated for each season type:

##### All Time Players
```js
allTimePlayers({league, seasonYear, leagueId})
```
This feed contains an entry for every player that has played in the given league. It contains the start and end years, as well as
whether the player is currently active.

##### League Leaders
```js
leagueLeaders({league, seasonYear, leagueId, statType, seasonTypeId})
```
The league leaders files are generate for various statistical categories and contain the league totals and per game leaders for
the season. A separate league leader file is generated for each season type:
##### Team Schedule
```js
teamSchedule({league, seasonYear, teamName, seasonTypeId})
```
This feed contains the full schedule for each team, and is provided when the schedule is released and updated when any
scheduling changes occur. This file is updated after a game finishes with the Final score of the game. A separate schedule
file is generated for each season type with suffixes as follows. Additionally, one file without a suffix is created for each non-allstar
teams that has games from each season type. For an eventual playoff team, it will have preseason, regular season, and
playoff games. A team that missed the playoffs would have preseason and regular season.
##### League Schedule
```js
leagueSchedule({league, seasonYear, leagueId, monthNumber})
```
These feeds contain the full schedule for the entire league for all season types. The schedule is broken into twelve month files
per season year. If there are no games for a given month, the file will still exist, but be an empty root element. When multiple
season types (pre and regular season, regular season and all-star, regular season and post season) have games in the same
month, they will both appear in the one file, sorted by date. The month number will always be two digits representing the
calendar month, so January maps to 01 and December maps to 12. For leagues where the season goes over two calendar
years (NBA and D League), the January file under 2014 season will actually be games played in January, 2015 (and so forth
for the other applicable months). Games that are no longer necessary in the playoffs are removed from the feed.
##### Rolling Daily Schedule
```js
rollingDailySchedule({league, seasonYear, leagueId})
```
This feed contains all played and un-played games for the current date and a given number of days past and future. It spans
across all season types and across months. Games that are no longer necessary in the playoffs are removed from the feed.
Days out currently set to five days in either direction.
##### Team Roster
```js
teamRoster({league, seasonYear, teamName})
```
This feed updates when roster changes are produced, and overnight. Years of experience typically updates on the night of the
NBA draft when rosters are posted. All-star rosters are produced for east/west and rookie/sophomore teams.
##### Team Coach
```js
rollingDailySchedule({league, seasonYear, teamName})
```

##### Team Player Averages
```js
teamPlayerAverages({league, seasonYear, teamName, seasonTypeId})
```

##### Team Statistics
```js
teamStatistics({league, seasonYear, teamName, seasonTypeId})
```

##### Team Leaders Overall File
```js
teamLeadersOverallFile({league, seasonYear, teamName, seasonTypeId})
```

##### Team Leaders Detail Stats
```js
teamLeadersDetailStats({league, seasonYear, teamName, statType, seasonTypeId})
```

##### Team Season Averages
```js
teamSeasonAverages({league, seasonYear, teamName, seasonTypeId})
```

##### Advanced Team And Player Stats
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