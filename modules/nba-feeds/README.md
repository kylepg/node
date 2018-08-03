
# NBA Feeds
Asynchronously fetch data from mobile stat feed, content API, and stats.nba.com.

## Install
```bash
npm install nba-feeds
```

## Usage
```js
import nbaFeeds from `nba-feeds`;

const nba = nbaFeeds(contentApiTokenGoesHere);
```

### Mobile Stats
Default values:

`league: 'nba'`
`leagueId: Drupal.settings.today.league_id`
`teamName: 'Drupal.settings.team.CODE'`
`seasonYear: Drupal.settings.today.season_year`
`seasonTypeId: Drupal.settings.today.season_stage`
`monthNumber: Drupal.settings.today.sys_month`

The final parameter of each feed call is an object that can be used to  override the default values above. For example: `nba.stats.standings({seasonYear: 2015});`

The following parameters **must** be specified:

`statType`
`gameId`
`playerId`

##### Example usage
```js
// Return current league standings
const standings = await nba.stats.standings();

// Return league standings from 2015
const standings = await nba.stats.standings({seasonYear: 2015});

// Return player highs
const playerHighs = await nba.stats.playerHighs(201142);
```



##### Today's Scores

<details>
<summary>Description...</summary>
<br>
This is a real time update for every game that plays on the current day for the designated league. Initially generated on game
day, it will contain all the games for the day and will be updated with scores in real time. Last meeting is included in this feed.
This will refresh at noon with the games for the upcoming day/night. For days with no games (Thanksgiving, Christmas Eve),
the contents will be just the gs element. If a game occurs before noon, the file will be created when that game’s events are
logged.
</details>


```js
todaysScores({league, seasonYear, leagueId})
```

##### Full Game Play by Play

<details>
<summary>Description...</summary>
<br>
This feed contains play by play data by period (including overtimes) for each game, and updates in real time during live
games.
</details>

```js
fullGamePlayByPlay(gameId, quarter, {league, seasonYear})
```

##### Abbreviated Play by Play

<details>
<summary>Description...</summary>
<br>
This feed contains abbreviated play by play list: The last 20 events before current point in the game are provided. These
events can go across quarters. This updates real time during live games.
</details>

```js
abbreviatedPlayByPlay(gameId, {league, seasonYear})
```
##### Game Detail

<details>
<summary>Description...</summary>
<br>
This feed contains the full boxscore for a game. Updates occur in real time during live games.
NOTE: Removed from this feed are the team season averages. This can now be found in a separate feed. The Last Meeting
information has also been moved out of this feed and into the Team Schedule feed.
</details>

```js
gameDetail(gameId, {league, seasonYear})
```

##### Standings

<details>
<summary>Description...</summary>
<br>
This feed is produced when standings are available for the given season for the designated league. Updated every time a
game ends, or standings are changed. This feed is only generated for preseason and regular season.
</details>

```js
standings({league, seasonYear, leagueId})
```

##### Playoff Bracket

<details>
<summary>Description...</summary>
<br>
This feed contains a representation of the tournament for the playoffs. It is updated after each game.
No playoff bracket exists for either summer league due to all games being considered part of the regular season (the playoff
games just continue counting up for game id after the play-in games are complete).
The D League also does not currently have a playoff bracket.
The game elements in the playoff bracket differ from other schedule feeds in that the home/visitor nodes do not contain a
record attribute. Instead this information can be gleaned from the series (‘ser’) element. Additionally, the series information
(‘seri’) on the game is also removed as there is a series info (‘seri’) attribute on the series (‘ser’) element.
</details>

```js
playoffBracket({league, seasonYear, leagueId})
```
##### Team Info

<details>
<summary>Description...</summary>
<br>
This has information on all regular season teams, even during the playoffs. During the preseason, any international teams will
show up.
</details>

```js
teamInfo({league, seasonYear, leagueId})
```

##### Player Info

<details>
<summary>Description...</summary>
<br>
This feed contains information on all players and the teams that they have been on during the current season. It is updated
daily.
</details>

```js
playerInfo({league, seasonYear, leagueId})
```

##### All Time Leaders

<details>
<summary>Description...</summary>
<br>
The all-time leaders files are generate for various statistical categories and contain the career totals and per game leaders for
the entire league history. A separate player card file is generated for each season type.
</details>

```js
allTimeLeaders(statType, seasonTypeId, {league, seasonYear, leagueId})
```

##### All Time Players

<details>
<summary>Description...</summary>
<br>
This feed contains an entry for every player that has played in the given league. It contains the start and end years, as well as
whether the player is currently active.
</details>

```js
allTimePlayers({league, seasonYear, leagueId})
```

##### League Leaders

<details>
<summary>Description...</summary>
<br>
The league leaders files are generate for various statistical categories and contain the league totals and per game leaders for
the season. A separate league leader file is generated for each season type.
</details>

```js
leagueLeaders(statType, {league, seasonYear, leagueId, seasonTypeId})
```

##### Team Schedule

<details>
<summary>Description...</summary>
<br>
This feed contains the full schedule for each team, and is provided when the schedule is released and updated when any
scheduling changes occur. This file is updated after a game finishes with the Final score of the game. A separate schedule
file is generated for each season type with suffixes as follows. Additionally, one file without a suffix is created for each non-allstar
teams that has games from each season type. For an eventual playoff team, it will have preseason, regular season, and
playoff games. A team that missed the playoffs would have preseason and regular season.
</details>

```js
teamSchedule({league, seasonYear, teamName, seasonTypeId})
```

##### League Schedule

<details>
<summary>Description...</summary>
<br>
These feeds contain the full schedule for the entire league for all season types. The schedule is broken into twelve month files
per season year. If there are no games for a given month, the file will still exist, but be an empty root element. When multiple
season types (pre and regular season, regular season and all-star, regular season and post season) have games in the same
month, they will both appear in the one file, sorted by date. The month number will always be two digits representing the
calendar month, so January maps to 01 and December maps to 12. For leagues where the season goes over two calendar
years (NBA and D League), the January file under 2014 season will actually be games played in January, 2015 (and so forth
for the other applicable months). Games that are no longer necessary in the playoffs are removed from the feed.
</details>

```js
leagueSchedule({league, seasonYear, leagueId, monthNumber})
```

##### Rolling Daily Schedule

<details>
<summary>Description...</summary>
<br>
This feed contains all played and un-played games for the current date and a given number of days past and future. It spans
across all season types and across months. Games that are no longer necessary in the playoffs are removed from the feed.
Days out currently set to five days in either direction.
</details>

```js
rollingDailySchedule({league, seasonYear, leagueId})
```

##### Team Roster

<details>
<summary>Description...</summary>
<br>
This feed updates when roster changes are produced, and overnight. Years of experience typically updates on the night of the
NBA draft when rosters are posted. All-star rosters are produced for east/west and rookie/sophomore teams.
</details>

```js
teamRoster({league, seasonYear, teamName})
```

##### Team Coach

<details>
<summary>Description...</summary>
<br>
This feed updates when roster changes are produced, and overnight. It includes only active coaches. Coach feeds are
available for regular all-star and rookie-sophomore teams based on team name.
</details>

```js
rollingDailySchedule({league, seasonYear, teamName})
```

##### Team Player Averages

<details>
<summary>Description...</summary>
<br>
This feed contains the players on a team in a given season type and has each player’s per game averages and totals for
various stats. It is updated after every game night. A separate team season averages file is generated for each season type.
</details>

```js
teamPlayerAverages({league, seasonYear, teamName, seasonTypeId})
```

##### Team Statistics

<details>
<summary>Description...</summary>
<br>
This feed is updated after every game night. All stats are per game for the team overall. A separate statistics file is generated
for each season type.
</details>

```js
teamStatistics({league, seasonYear, teamName, seasonTypeId})
```

##### Team Leaders Overall File

<details>
<summary>Description...</summary>
<br>
This feed shows team leaders in points, assists, rebounds, field goals, free throws, three pointers, blocks, steals and
turnovers. It is updated after every game night. A separate team leaders overall file is generated for each season type.
</details>

```js
teamLeadersOverallFile({league, seasonYear, teamName, seasonTypeId})
```

##### Team Leaders Detail Stats

<details>
<summary>Description...</summary>
<br>
This feed is updated after every game night. A separate file is generated for each stat and each season type.
</details>

```js
teamLeadersDetailStats(statType, {league, seasonYear, teamName, seasonTypeId})
```

##### Team Season Averages

<details>
<summary>Description...</summary>
<br>
This feed contains information that was formerly in the game detail feed. It is updated after every game night. A separate
team season averages file is generated for each stat and each season type.
</details>
```js
teamSeasonAverages({league, seasonYear, teamName, seasonTypeId})
```

##### Advanced Team And Player Stats

<details>
<summary>Description...</summary>
<br>
This feed contains advanced team and player statistics in per 36 minute increments. There are no qualifiers for
players on the values. Players can appear in more than one team’s file as the stats displayed are only those gained
while on said team. There is a roster status attribute to ignore said players if desired.
</details>

```js
advancedTeamAndPlayerStats({league, seasonYear, teamName, seasonTypeId})
```

##### Player Cards

<details>
<summary>Description...</summary>
<br>
The Player cards are available for preseason, regular season, and playoffs. Season Year has been added to the URL format,
so that you can get player cards for previous seasons. Game logs are also included. A separate player card file is generated
for each season type.
</details>

```js
playerCards(playerId, {league, seasonYear, seasonTypeId})
```

##### Player Ranks

<details>
<summary>Description...</summary>
<br>
The Player ranks files are available for preseason, regular season, and playoffs. It includes a player’s ranks and values for
various statistical categories. It has ranks for totals, per game averages and per minute. The per minute stat values are per
forty minutes for WNBA and per forty eight minutes for all others. A separate player card file is generated for each season
type.
</details>

```js
playerRanks(playerId, {league, seasonYear, seasonTypeId})
```

##### Player Splits

<details>
<summary>Description...</summary>
<br>
The Player splits are available for preseason, regular season, and playoffs. It includes breakdown of totals and per game
averages for various statistical categories based on various split categories and the corresponding splits within. A separate
player split file is generated for each season type.
</details>

```js
playerSplits(playerId, {league, seasonYear, seasonTypeId})
```

##### Player Highs

<details>
<summary>Description...</summary>
<br>
The Player highs files are available for preseason, regular season, and playoffs. It includes a player’s career and season
highs in various statistical categories. If the value is non-zero, it contains a list of the games it occurred. A separate player
highs file is generated for each season type.
</details>

```js
playerHighs(playerId, {league, seasonYear, seasonTypeId})
```


### Content API

[Feed documentation](https://nbateams.atlassian.net/wiki/spaces/NBA/pages/589949/Content+API+Feeds)

Allowed parameters:

`freeform`
`games`
`gameRelated`
`writer`
`players`
`teams`
`topics`
`events`
`streamState`
`channels`
`section`
`body`
`headline`
`shortHeadline`
`subheadline`
`title`
`description`
`url`
`before`
`after`
`lang`
`sort`
`offset`
`count`
`verbose`

##### Example Usage
```js
// Get last 50 Celtics videos
nba.content(`celtics`, { count: 50 , type: 'video'})

// Get last 10 Celtics 'Keys To The Game' stories that we published after a certain date
nba.content(`celtics`, {
      freeform: ['Keys To The Game'],
      types: ['article'],
      count: 10,
      after:  1523664000
});
```





## Value Key


#### Season Type ID
* 01 – Preseason
* 02 – Regular Season
* 03 – All-star
* 04 – Playoffs

#### League ID
* 00 – NBA
* 10 – WNBA
* 14 – NBA Orlando Summer League
* 15 – NBA Las Vegas Summer League
* 16 – NBA Utah Summer League (Rocky Mountain Revue)
* 20 – NBA Developmental League 

#### League Name
* NBA (00): nba
* WNBA (10): wnba
* NBA Orlando Summer League (14): orlando
* NBA Las Vegas Summer League (15): vegas
* NBA Utah Summer League (Rocky Mountain Revue) (16): utah
* NBA Developmental League (20): dleague


#### Cache Control Values
* 5s – five seconds
* 10s – ten seconds
* 30s – thirty seconds
* 1m – one minute (sixty seconds)
* 1h – one hour (3,600 seconds) 



<!-- 




####League Stats

#####Example 
```js
// Return player awards
const playerAwards = await nba.leagueStats(`https://stats.nba.com/stats/playerawards?PlayerID=201143`);
```

####Content API
#####Example 
```js
// Return highlights
const highlights = await nba.content(`celtics`, {
      types: [`wsc`, `imported_video`],
      count: 50,
      after: null,
      before: null 
});
``` -->