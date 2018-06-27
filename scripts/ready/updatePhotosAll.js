/*=====================================================
THIS FUNCTION WILL
1. LOOP THROUGH EVERY PHOTO GALLERY THAT EXISTS
2. CHECK EVERY IMAGE TO SEE IF ANYBODY ON OUR CURRENT
   ROSTER APPEARS IN THE CAPTION
3. CREATE AN OBJECT OF CURRENT PLAYERS AND THEIR PHOTOS
======================================================*/
const request = require('sync-request'); // WAS HAVING TROUBLE WITH ASYNCHRONOUS CALLS
const Storage = require('node-storage');
const fs = require('fs');

let offset = 0;
const photoObj = {};
console.log('\nGETTING PHOTOS...');
const cutoffYear = 2015; // (OPTIONAL) CHECK GALLERIES CREATED AFTER THIS YEAR
function printProgress(text, progress) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`\x1b[0m${  text  }${progress}`);
}

function seasonYear() {
  // const date = new Date()
  // const month = date.getMonth()
  // let year = date.getFullYear()
  // if (month < 9) {
  //     year -= 1;
  // }
  // const roster = request('GET', 'http://data.nba.com/data/v2015/json/mobile_teams/nba/' + year + '/teams/celtics_roster.json')
  // if (roster.statusCode != 200) {
  //     year -= 1;
  // }
  // else {
  //     console.log(galleryRequest.statusCode + ' error on roster data.');
  // }
  // console.log('... for the ' + year + ' roster:\n')
  return 2017;
}

const rosterObj = [];
const rosterRequest = request('GET', `http://data.nba.com/data/v2015/json/mobile_teams/nba/${  seasonYear()  }/teams/celtics_roster.json`);
const rosterData = JSON.parse(rosterRequest.getBody().toString());
if (rosterRequest.statusCode !== 200) {
  console.log(rosterRequest.statusCode + ' error on gallery list. (offset=' + offset + ')');
}
const player = rosterData.t.pl;
let more = true;
for (let i = 0; i < player.length; i++) {
  rosterObj[i] = {
    fn: player[i].fn,
    ln: player[i].ln,
    pid: player[i].pid,
  };
  photoObj[player[i].pid] = [];
}
while (more) {
  let galleryRequest = request('GET', 'http://www.nba.com/celtics/api/1.1/json/?type=photo_gallery&size=50&offset=' + offset);
  let galleriesData = JSON.parse(galleryRequest.getBody().toString());
  if (galleryRequest.statusCode !== 200) {
    console.log(galleryRequest.statusCode + ' error on gallery list. (offset=' + offset + ')');
    break;
  }
  for (let i = 0; i < galleriesData.content.length; i++) {
    printProgress('GALLERIES CALLED: ', offset + 1);
    const nodeRequest = request('GET', `http://www.nba.com/celtics/api/1.1/json/?nid=${  galleriesData.content[i].nid}`);
    if (nodeRequest.statusCode !== 200) {
      console.log(nodeRequest.statusCode + ' error on node.');
      continue;
    }
    const nodeData = JSON.parse(nodeRequest.getBody().toString());
    for (let p = 0; p < nodeData.content[0].images.length; p++) {
      for (let r = 0; r < rosterObj.length; r++) {
        if (nodeData.content[0].images[p].caption.indexOf(rosterObj[r].fn + ' ' + rosterObj[r].ln) >= 0) {
          photoObj[rosterObj[r].pid].push(nodeData.content[0].images[p]);
          photoObj[rosterObj[r].pid][photoObj[rosterObj[r].pid].length - 1].date = nodeData.content[0].formatted.created;
        }
      }
    }
    if (Number(nodeData.content[0].formatted.created.substr(0, 4)) < cutoffYear) {
      console.log('\x1b[31m', '\nHit cutoffYear.');
      more = false;
      break;
    }
    offset++;
  }
  if (galleriesData.next !== undefined && more == true) {
    console.log('\x1b[32m', "\nThere's more: " + galleriesData.next);
  } else {
    console.log('\x1b[31m', '\nNo more. Writing file...\n');
    for (var property in photoObj) {
      console.log('\x1b[37m', property + ': ' + photoObj[property].length);
    }
    let output = JSON.stringify(photoObj);
    fs.writeFile('/Users/kyle/Dropbox/CELTICS/data/photo-data.json', output, (err) => {
            console.log("\x1b[32m", "\nphotoData.json was saved!");
        });
    more = false;
  }
}
