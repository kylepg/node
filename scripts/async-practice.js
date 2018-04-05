const fetch = require('node-fetch');

var out = new Promise((resolve, reject) => {
  var ding = 'nope';
  setTimeout(() => {
    ding = 'yup!';
    resolve(ding);
  }, 5000);
});

async function getPhotos() {
  const chach = await out;
  console.log(chach);
  //const roster = await fetch('http://data.nba.com/data/v2015/json/mobile_teams/nba/2017/teams/celtics_roster.json')
  //.then(res => res.json())
  //.then(res => res.t.tid);
  //console.log(roster);
}
getPhotos();
