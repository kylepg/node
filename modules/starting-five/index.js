'use strict';
exports.update = function() {
    //BOOOOM
    function myScript(thisObj) {
        function myScript_buildUI(thisObj) {
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "My Panel Name", [0, 0, 300, 300]);
            var rosterStats = rosterData;
            var teams = {
                "tms": {
                    "si": "22016",
                    "t": [{
                        "tid": 1610612737,
                        "di": "Southeast",
                        "co": "East",
                        "sta": "GA",
                        "ta": "ATL",
                        "tn": "Hawks",
                        "tc": "Atlanta"
                    }, {
                        "tid": 1610612738,
                        "di": "Atlantic",
                        "co": "East",
                        "sta": "MA",
                        "ta": "BOS",
                        "tn": "Celtics",
                        "tc": "Boston"
                    }, {
                        "tid": 1610612739,
                        "di": "Central",
                        "co": "East",
                        "sta": "OH",
                        "ta": "CLE",
                        "tn": "Cavaliers",
                        "tc": "Cleveland"
                    }, {
                        "tid": 1610612740,
                        "di": "Southwest",
                        "co": "West",
                        "sta": "LA",
                        "ta": "NOP",
                        "tn": "Pelicans",
                        "tc": "New Orleans"
                    }, {
                        "tid": 1610612741,
                        "di": "Central",
                        "co": "East",
                        "sta": "IL",
                        "ta": "CHI",
                        "tn": "Bulls",
                        "tc": "Chicago"
                    }, {
                        "tid": 1610612742,
                        "di": "Southwest",
                        "co": "West",
                        "sta": "TX",
                        "ta": "DAL",
                        "tn": "Mavericks",
                        "tc": "Dallas"
                    }, {
                        "tid": 1610612743,
                        "di": "Northwest",
                        "co": "West",
                        "sta": "CO",
                        "ta": "DEN",
                        "tn": "Nuggets",
                        "tc": "Denver"
                    }, {
                        "tid": 1610612744,
                        "di": "Pacific",
                        "co": "West",
                        "sta": "CA",
                        "ta": "GSW",
                        "tn": "Warriors",
                        "tc": "Golden State"
                    }, {
                        "tid": 1610612745,
                        "di": "Southwest",
                        "co": "West",
                        "sta": "TX",
                        "ta": "HOU",
                        "tn": "Rockets",
                        "tc": "Houston"
                    }, {
                        "tid": 1610612746,
                        "di": "Pacific",
                        "co": "West",
                        "sta": "CA",
                        "ta": "LAC",
                        "tn": "Clippers",
                        "tc": "LA"
                    }, {
                        "tid": 1610612747,
                        "di": "Pacific",
                        "co": "West",
                        "sta": "CA",
                        "ta": "LAL",
                        "tn": "Lakers",
                        "tc": "Los Angeles"
                    }, {
                        "tid": 1610612748,
                        "di": "Southeast",
                        "co": "East",
                        "sta": "FL",
                        "ta": "MIA",
                        "tn": "Heat",
                        "tc": "Miami"
                    }, {
                        "tid": 1610612749,
                        "di": "Central",
                        "co": "East",
                        "sta": "WI",
                        "ta": "MIL",
                        "tn": "Bucks",
                        "tc": "Milwaukee"
                    }, {
                        "tid": 1610612750,
                        "di": "Northwest",
                        "co": "West",
                        "sta": "MN",
                        "ta": "MIN",
                        "tn": "Timberwolves",
                        "tc": "Minnesota"
                    }, {
                        "tid": 1610612751,
                        "di": "Atlantic",
                        "co": "East",
                        "sta": "NY",
                        "ta": "BKN",
                        "tn": "Nets",
                        "tc": "Brooklyn"
                    }, {
                        "tid": 1610612752,
                        "di": "Atlantic",
                        "co": "East",
                        "sta": "NY",
                        "ta": "NYK",
                        "tn": "Knicks",
                        "tc": "New York"
                    }, {
                        "tid": 1610612753,
                        "di": "Southeast",
                        "co": "East",
                        "sta": "FL",
                        "ta": "ORL",
                        "tn": "Magic",
                        "tc": "Orlando"
                    }, {
                        "tid": 1610612754,
                        "di": "Central",
                        "co": "East",
                        "sta": "IN",
                        "ta": "IND",
                        "tn": "Pacers",
                        "tc": "Indiana"
                    }, {
                        "tid": 1610612755,
                        "di": "Atlantic",
                        "co": "East",
                        "sta": "PA",
                        "ta": "PHI",
                        "tn": "76ers",
                        "tc": "Philadelphia"
                    }, {
                        "tid": 1610612756,
                        "di": "Pacific",
                        "co": "West",
                        "sta": "AZ",
                        "ta": "PHX",
                        "tn": "Suns",
                        "tc": "Phoenix"
                    }, {
                        "tid": 1610612757,
                        "di": "Northwest",
                        "co": "West",
                        "sta": "OR",
                        "ta": "POR",
                        "tn": "Trail Blazers",
                        "tc": "Portland"
                    }, {
                        "tid": 1610612758,
                        "di": "Pacific",
                        "co": "West",
                        "sta": "CA",
                        "ta": "SAC",
                        "tn": "Kings",
                        "tc": "Sacramento"
                    }, {
                        "tid": 1610612759,
                        "di": "Southwest",
                        "co": "West",
                        "sta": "TX",
                        "ta": "SAS",
                        "tn": "Spurs",
                        "tc": "San Antonio"
                    }, {
                        "tid": 1610612760,
                        "di": "Northwest",
                        "co": "West",
                        "sta": "OK",
                        "ta": "OKC",
                        "tn": "Thunder",
                        "tc": "Oklahoma City"
                    }, {
                        "tid": 1610612761,
                        "di": "Atlantic",
                        "co": "East",
                        "sta": "ON",
                        "ta": "TOR",
                        "tn": "Raptors",
                        "tc": "Toronto"
                    }, {
                        "tid": 1610612762,
                        "di": "Northwest",
                        "co": "West",
                        "sta": "UT",
                        "ta": "UTA",
                        "tn": "Jazz",
                        "tc": "Utah"
                    }, {
                        "tid": 1610612763,
                        "di": "Southwest",
                        "co": "West",
                        "sta": "TN",
                        "ta": "MEM",
                        "tn": "Grizzlies",
                        "tc": "Memphis"
                    }, {
                        "tid": 1610612764,
                        "di": "Southeast",
                        "co": "East",
                        "sta": "DC",
                        "ta": "WAS",
                        "tn": "Wizards",
                        "tc": "Washington"
                    }, {
                        "tid": 1610612765,
                        "di": "Central",
                        "co": "East",
                        "sta": "MI",
                        "ta": "DET",
                        "tn": "Pistons",
                        "tc": "Detroit"
                    }, {
                        "tid": 1610612766,
                        "di": "Southeast",
                        "co": "East",
                        "sta": "NC",
                        "ta": "CHA",
                        "tn": "Hornets",
                        "tc": "Charlotte"
                    }]
                }
            };
            //////////////
            // GET DATA //
            //////////////
            // Get Celtics Roster and store it in an array
            var playerArr = function() {
                var rosterNames = [];
                for (i = 0; i < rosterStats.tpsts.pl.length; i++) {
                    var name = rosterStats.tpsts.pl[i].fn + " " + rosterStats.tpsts.pl[i].ln;
                    rosterNames.push(name);
                }
                return rosterNames;
            }();
            // Get all 30 teams and store in an array
            var teamArr = function() {
                var teamNames = [];
                for (i = 0; i < teams.tms.t.length; i++) {
                    var team = teams.tms.t[i].tc + " " + teams.tms.t[i].tn;
                    teamNames.push(team);
                }
                return teamNames;
            }();
            var positionArr = ["G", "F", "C"]
                //////////////////
                // CREATE PANEL //
                //////////////////
            var wrap = myPanel.add("group", undefined, {
                orientation: 'column',
                alignment: ['fill', 'fill'],
                alignChildren: ['fill', 'fill']
            });
            wrap.orientation = "column";
            wrap.alignment = ['fill', 'fill'];
            /*    wrap.alignChildren = ['fill', 'fill'];*/
            /*=================================
            =            TOP GROUP            =
            =================================*/
            var groupTop = wrap.add("panel", undefined, "Lineup");
            groupTop.orientation = "row";
            groupTop.alignment = ['fill', 'fill'];
            groupTop.alignChildren = ['fill', 'fill'];
            // Starting Lineup Dropdowns
            var groupTopRight = groupTop.add("group", undefined, "Player");
            groupTopRight.orientation = "column";
            groupTopRight.alignment = ['fill', 'left'];
            groupTopRight.alignChildren = ['fill', 'fill'];
            var pg = groupTopRight.add("dropdownlist", undefined, playerArr, );
            pg.selection = 2;
            pg.text = "PG:";
            var sg = groupTopRight.add("dropdownlist", undefined, playerArr);
            sg.selection = 8;
            sg.text = "SG:";
            var sf = groupTopRight.add("dropdownlist", undefined, playerArr);
            sf.selection = 11;
            sf.text = "SF:";
            var pf = groupTopRight.add("dropdownlist", undefined, playerArr);
            pf.selection = 0;
            pf.text = "PF:";
            var c = groupTopRight.add("dropdownlist", undefined, playerArr);
            c.selection = 4;
            c.text = "C :";
            // Positions Dropdowns
            var groupTopRight = groupTop.add("group", undefined, "Position");
            groupTopRight.orientation = "column";
            groupTopRight.alignment = ['fill', 'left'];
            groupTopRight.alignChildren = ['fill', 'fill'];
            var pgPos = groupTopRight.add("dropdownlist", undefined, positionArr, );
            pgPos.selection = 0;
            var sgPos = groupTopRight.add("dropdownlist", undefined, positionArr);
            sgPos.selection = 1;
            var sfPos = groupTopRight.add("dropdownlist", undefined, positionArr);
            sfPos.selection = 1;
            var pfPos = groupTopRight.add("dropdownlist", undefined, positionArr);
            pfPos.selection = 1;
            var cPos = groupTopRight.add("dropdownlist", undefined, positionArr);
            cPos.selection = 2;
            // Additional options (group right)
            var groupRight = wrap.add("panel", undefined, "Options");
            groupRight.orientation = "column";
            groupRight.alignment = ['fill', 'fill'];
            // Away team dropdown
            var opponent = groupRight.add("dropdownlist", undefined, teamArr);
            opponent.selection = 0;
            opponent.orientation = "row";
            opponent.text = "Opponent:";
            // Background selection
            /*      groupRight.backgroundPanel = groupRight.add("panel", undefined, "Background");
                  groupRight.backgroundPanel.orientation = "row";
                  groupRight.backgroundPanel.timelapse = groupRight.backgroundPanel.add("radiobutton",undefined, "Garden Timelapse");
                  groupRight.backgroundPanel.inside = groupRight.backgroundPanel.add("radiobutton",undefined, "Inside Garden");
                  groupRight.backgroundPanel.timelapse.value = true;*/
            // Social Media Selection
            groupRight.socialMedia = groupRight.add("panel", undefined, "");
            groupRight.socialMedia.orientation = "row";
            groupRight.socialMedia.home = groupRight.socialMedia.add("radiobutton", undefined, "Home");
            groupRight.socialMedia.away = groupRight.socialMedia.add("radiobutton", undefined, "Away");
            // Date/Time
            groupRight.datePanel = groupRight.add("panel", undefined, "Date/Time");
            groupRight.datePanel.orientation = "row";
            groupRight.datePanel.month = groupRight.datePanel.add("dropdownlist", undefined, ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]);
            groupRight.datePanel.month.selection = 0;
            groupRight.datePanel.day = groupRight.datePanel.add("dropdownlist", undefined, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]);
            groupRight.datePanel.day.selection = 0;
            groupRight.datePanel.time = groupRight.datePanel.add("dropdownlist", undefined, ["12:00", "1:00", "2:30", "3:00", "3:30", "4:00", "5:00", "6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00"]);
            groupRight.datePanel.time.selection = 10;
            // Apply Button
            var applyBtn = wrap.add("button", undefined, 'APPLY');
            applyBtn.alignment = ['fill', 'fill'];
            // HIDE LAYERS
            /*      function changeOpacity() { // Why won't you work!?
                      var pgHeadshot = app.project.item(1);
                      for (var i=0; i <= pg.items.length; i++){
                          pgHeadshot.layer(i).property("Opacity").setValue(0);
                      }
                  } */
            //////////////////////
            // SHOW/HIDE LAYERS //
            //////////////////////
            function testClick() {
                // Get composition objects
                // Headshots
                var pgHeadshot = app.project.item(2);
                var sgHeadshot = app.project.item(3);
                var sfHeadshot = app.project.item(4);
                var pfHeadshot = app.project.item(5);
                var cHeadshot = app.project.item(6);
                // Title
                var pgTitle = app.project.item(8);
                var sgTitle = app.project.item(9);
                var sfTitle = app.project.item(10);
                var pfTitle = app.project.item(11);
                var cTitle = app.project.item(12);
                // Team logo
                var teamLogo = app.project.item(14);
                var teamLogoTwit = app.project.item(58);
                // Stats - insta
                var pgStats = app.project.item(46);
                var sgStats = app.project.item(47);
                var sfStats = app.project.item(48);
                var pfStats = app.project.item(49);
                var cStats = app.project.item(50);
                // Stats - twitter
                var pgStatsTwit = app.project.item(52);
                var sgStatsTwit = app.project.item(53);
                var sfStatsTwit = app.project.item(54);
                var pfStatsTwit = app.project.item(55);
                var cStatsTwit = app.project.item(56);
                // Positions - insta
                var instaPos = app.project.item(95);
                // Positions - twitter
                var twitterPos = app.project.item(96);
                // Hide all layers (WORST CODE OF ALL TIME. THE LOOPS WERE DOING FUNKY THINGS. I HAD NO OTHER CHOICE)
                pgHeadshot.layer(1).enabled = false;
                pgHeadshot.layer(2).enabled = false;
                pgHeadshot.layer(3).enabled = false;
                pgHeadshot.layer(4).enabled = false;
                pgHeadshot.layer(5).enabled = false;
                pgHeadshot.layer(6).enabled = false;
                pgHeadshot.layer(7).enabled = false;
                pgHeadshot.layer(8).enabled = false;
                pgHeadshot.layer(9).enabled = false;
                pgHeadshot.layer(10).enabled = false;
                pgHeadshot.layer(11).enabled = false;
                pgHeadshot.layer(12).enabled = false;
                pgHeadshot.layer(13).enabled = false;
                pgHeadshot.layer(14).enabled = false;
                pgHeadshot.layer(15).enabled = false;
                pgHeadshot.layer(16).enabled = false;
                sgHeadshot.layer(1).enabled = false;
                sgHeadshot.layer(2).enabled = false;
                sgHeadshot.layer(3).enabled = false;
                sgHeadshot.layer(4).enabled = false;
                sgHeadshot.layer(5).enabled = false;
                sgHeadshot.layer(6).enabled = false;
                sgHeadshot.layer(7).enabled = false;
                sgHeadshot.layer(8).enabled = false;
                sgHeadshot.layer(9).enabled = false;
                sgHeadshot.layer(10).enabled = false;
                sgHeadshot.layer(11).enabled = false;
                sgHeadshot.layer(12).enabled = false;
                sgHeadshot.layer(13).enabled = false;
                sgHeadshot.layer(14).enabled = false;
                sgHeadshot.layer(15).enabled = false;
                sgHeadshot.layer(16).enabled = false;
                pfHeadshot.layer(1).enabled = false;
                pfHeadshot.layer(2).enabled = false;
                pfHeadshot.layer(3).enabled = false;
                pfHeadshot.layer(4).enabled = false;
                pfHeadshot.layer(5).enabled = false;
                pfHeadshot.layer(6).enabled = false;
                pfHeadshot.layer(7).enabled = false;
                pfHeadshot.layer(8).enabled = false;
                pfHeadshot.layer(9).enabled = false;
                pfHeadshot.layer(10).enabled = false;
                pfHeadshot.layer(11).enabled = false;
                pfHeadshot.layer(12).enabled = false;
                pfHeadshot.layer(13).enabled = false;
                pfHeadshot.layer(14).enabled = false;
                pfHeadshot.layer(15).enabled = false;
                pfHeadshot.layer(16).enabled = false;
                sfHeadshot.layer(1).enabled = false;
                sfHeadshot.layer(2).enabled = false;
                sfHeadshot.layer(3).enabled = false;
                sfHeadshot.layer(4).enabled = false;
                sfHeadshot.layer(5).enabled = false;
                sfHeadshot.layer(6).enabled = false;
                sfHeadshot.layer(7).enabled = false;
                sfHeadshot.layer(8).enabled = false;
                sfHeadshot.layer(9).enabled = false;
                sfHeadshot.layer(10).enabled = false;
                sfHeadshot.layer(11).enabled = false;
                sfHeadshot.layer(12).enabled = false;
                sfHeadshot.layer(13).enabled = false;
                sfHeadshot.layer(14).enabled = false;
                sfHeadshot.layer(15).enabled = false;
                sfHeadshot.layer(16).enabled = false;
                cHeadshot.layer(1).enabled = false;
                cHeadshot.layer(2).enabled = false;
                cHeadshot.layer(3).enabled = false;
                cHeadshot.layer(4).enabled = false;
                cHeadshot.layer(5).enabled = false;
                cHeadshot.layer(6).enabled = false;
                cHeadshot.layer(7).enabled = false;
                cHeadshot.layer(8).enabled = false;
                cHeadshot.layer(9).enabled = false;
                cHeadshot.layer(10).enabled = false;
                cHeadshot.layer(11).enabled = false;
                cHeadshot.layer(12).enabled = false;
                cHeadshot.layer(13).enabled = false;
                cHeadshot.layer(14).enabled = false;
                cHeadshot.layer(15).enabled = false;
                cHeadshot.layer(16).enabled = false;
                pgTitle.layer(1).enabled = false;
                pgTitle.layer(2).enabled = false;
                pgTitle.layer(3).enabled = false;
                pgTitle.layer(4).enabled = false;
                pgTitle.layer(5).enabled = false;
                pgTitle.layer(6).enabled = false;
                pgTitle.layer(7).enabled = false;
                pgTitle.layer(8).enabled = false;
                pgTitle.layer(9).enabled = false;
                pgTitle.layer(10).enabled = false;
                pgTitle.layer(11).enabled = false;
                pgTitle.layer(12).enabled = false;
                pgTitle.layer(13).enabled = false;
                pgTitle.layer(14).enabled = false;
                pgTitle.layer(15).enabled = false;
                pgTitle.layer(16).enabled = false;
                sgTitle.layer(1).enabled = false;
                sgTitle.layer(2).enabled = false;
                sgTitle.layer(3).enabled = false;
                sgTitle.layer(4).enabled = false;
                sgTitle.layer(5).enabled = false;
                sgTitle.layer(6).enabled = false;
                sgTitle.layer(7).enabled = false;
                sgTitle.layer(8).enabled = false;
                sgTitle.layer(9).enabled = false;
                sgTitle.layer(10).enabled = false;
                sgTitle.layer(11).enabled = false;
                sgTitle.layer(12).enabled = false;
                sgTitle.layer(13).enabled = false;
                sgTitle.layer(14).enabled = false;
                sgTitle.layer(15).enabled = false;
                sgTitle.layer(16).enabled = false;
                pfTitle.layer(1).enabled = false;
                pfTitle.layer(2).enabled = false;
                pfTitle.layer(3).enabled = false;
                pfTitle.layer(4).enabled = false;
                pfTitle.layer(5).enabled = false;
                pfTitle.layer(6).enabled = false;
                pfTitle.layer(7).enabled = false;
                pfTitle.layer(8).enabled = false;
                pfTitle.layer(9).enabled = false;
                pfTitle.layer(10).enabled = false;
                pfTitle.layer(11).enabled = false;
                pfTitle.layer(12).enabled = false;
                pfTitle.layer(13).enabled = false;
                pfTitle.layer(14).enabled = false;
                pfTitle.layer(15).enabled = false;
                pfTitle.layer(16).enabled = false;
                sfTitle.layer(1).enabled = false;
                sfTitle.layer(2).enabled = false;
                sfTitle.layer(3).enabled = false;
                sfTitle.layer(4).enabled = false;
                sfTitle.layer(5).enabled = false;
                sfTitle.layer(6).enabled = false;
                sfTitle.layer(7).enabled = false;
                sfTitle.layer(8).enabled = false;
                sfTitle.layer(9).enabled = false;
                sfTitle.layer(10).enabled = false;
                sfTitle.layer(11).enabled = false;
                sfTitle.layer(12).enabled = false;
                sfTitle.layer(13).enabled = false;
                sfTitle.layer(14).enabled = false;
                sfTitle.layer(15).enabled = false;
                sfTitle.layer(16).enabled = false;
                cTitle.layer(1).enabled = false;
                cTitle.layer(2).enabled = false;
                cTitle.layer(3).enabled = false;
                cTitle.layer(4).enabled = false;
                cTitle.layer(5).enabled = false;
                cTitle.layer(6).enabled = false;
                cTitle.layer(7).enabled = false;
                cTitle.layer(8).enabled = false;
                cTitle.layer(9).enabled = false;
                cTitle.layer(10).enabled = false;
                cTitle.layer(11).enabled = false;
                cTitle.layer(12).enabled = false;
                cTitle.layer(13).enabled = false;
                cTitle.layer(14).enabled = false;
                cTitle.layer(15).enabled = false;
                cTitle.layer(16).enabled = false;
                teamLogo.layer(1).enabled = false;
                teamLogo.layer(2).enabled = false;
                teamLogo.layer(3).enabled = false;
                teamLogo.layer(4).enabled = false;
                teamLogo.layer(5).enabled = false;
                teamLogo.layer(6).enabled = false;
                teamLogo.layer(7).enabled = false;
                teamLogo.layer(8).enabled = false;
                teamLogo.layer(9).enabled = false;
                teamLogo.layer(10).enabled = false;
                teamLogo.layer(11).enabled = false;
                teamLogo.layer(12).enabled = false;
                teamLogo.layer(13).enabled = false;
                teamLogo.layer(14).enabled = false;
                teamLogo.layer(15).enabled = false;
                teamLogo.layer(16).enabled = false;
                teamLogo.layer(17).enabled = false;
                teamLogo.layer(18).enabled = false;
                teamLogo.layer(19).enabled = false;
                teamLogo.layer(20).enabled = false;
                teamLogo.layer(21).enabled = false;
                teamLogo.layer(22).enabled = false;
                teamLogo.layer(23).enabled = false;
                teamLogo.layer(24).enabled = false;
                teamLogo.layer(25).enabled = false;
                teamLogo.layer(26).enabled = false;
                teamLogo.layer(27).enabled = false;
                teamLogo.layer(28).enabled = false;
                teamLogo.layer(29).enabled = false;
                teamLogo.layer(30).enabled = false;
                teamLogoTwit.layer(1).enabled = false;
                teamLogoTwit.layer(2).enabled = false;
                teamLogoTwit.layer(3).enabled = false;
                teamLogoTwit.layer(4).enabled = false;
                teamLogoTwit.layer(5).enabled = false;
                teamLogoTwit.layer(6).enabled = false;
                teamLogoTwit.layer(7).enabled = false;
                teamLogoTwit.layer(8).enabled = false;
                teamLogoTwit.layer(9).enabled = false;
                teamLogoTwit.layer(10).enabled = false;
                teamLogoTwit.layer(11).enabled = false;
                teamLogoTwit.layer(12).enabled = false;
                teamLogoTwit.layer(13).enabled = false;
                teamLogoTwit.layer(14).enabled = false;
                teamLogoTwit.layer(15).enabled = false;
                teamLogoTwit.layer(16).enabled = false;
                teamLogoTwit.layer(17).enabled = false;
                teamLogoTwit.layer(18).enabled = false;
                teamLogoTwit.layer(19).enabled = false;
                teamLogoTwit.layer(20).enabled = false;
                teamLogoTwit.layer(21).enabled = false;
                teamLogoTwit.layer(22).enabled = false;
                teamLogoTwit.layer(23).enabled = false;
                teamLogoTwit.layer(24).enabled = false;
                teamLogoTwit.layer(25).enabled = false;
                teamLogoTwit.layer(26).enabled = false;
                teamLogoTwit.layer(27).enabled = false;
                teamLogoTwit.layer(28).enabled = false;
                teamLogoTwit.layer(29).enabled = false;
                teamLogoTwit.layer(30).enabled = false;

                function formatStat(stat) {
                    if (stat === 0) {
                        return "--"
                    } else {
                        return stat.toFixed(1);
                    }
                }
                // Show the selected layers
                for (var i = 0; i <= pg.items.length; i++) {
                    if ((i - 1) === pg.selection.index) {
                        pgHeadshot.layer(i).enabled = true;
                        pgTitle.layer(i).enabled = true;
                        pgStats.layer(1).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.pts));
                        pgStats.layer(2).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.reb));
                        pgStats.layer(3).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.ast));
                        pgStatsTwit.layer(1).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.pts));
                        pgStatsTwit.layer(2).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.reb));
                        pgStatsTwit.layer(3).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.ast));
                    } else if ((i - 1) === sg.selection.index) {
                        sgHeadshot.layer(i).enabled = true;
                        sgTitle.layer(i).enabled = true;
                        sgStats.layer(1).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.pts));
                        sgStats.layer(2).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.reb));
                        sgStats.layer(3).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.ast));
                        sgStatsTwit.layer(1).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.pts));
                        sgStatsTwit.layer(2).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.reb));
                        sgStatsTwit.layer(3).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.ast));
                    } else if ((i - 1) === sf.selection.index) {
                        sfHeadshot.layer(i).enabled = true;
                        sfTitle.layer(i).enabled = true;
                        sfStats.layer(1).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.pts));
                        sfStats.layer(2).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.reb));
                        sfStats.layer(3).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.ast));
                        sfStatsTwit.layer(1).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.pts));
                        sfStatsTwit.layer(2).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.reb));
                        sfStatsTwit.layer(3).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.ast));
                    } else if ((i - 1) === pf.selection.index) {
                        pfHeadshot.layer(i).enabled = true;
                        pfTitle.layer(i).enabled = true;
                        pfStats.layer(1).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.pts));
                        pfStats.layer(2).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.reb));
                        pfStats.layer(3).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.ast));
                        pfStatsTwit.layer(1).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.pts));
                        pfStatsTwit.layer(2).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.reb));
                        pfStatsTwit.layer(3).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.ast));
                    } else if ((i - 1) === c.selection.index) {
                        cHeadshot.layer(i).enabled = true;
                        cTitle.layer(i).enabled = true;
                        cStats.layer(1).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.pts));
                        cStats.layer(2).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.reb));
                        cStats.layer(3).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.ast));
                        cStatsTwit.layer(1).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.pts));
                        cStatsTwit.layer(2).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.reb));
                        cStatsTwit.layer(3).text.sourceText.setValue(formatStat(rosterStats.tpsts.pl[i - 1].avg.ast));
                    }
                }
                for (var i = 0; i <= opponent.items.length; i++) {
                    if ((i - 1) === opponent.selection.index) {
                        teamLogo.layer(i).enabled = true;
                        teamLogoTwit.layer(i).enabled = true;
                    }
                }
                // PG POS
                if (pgPos.selection.index === 0) {
                    instaPos.layer(1).text.sourceText.setValue("G");
                    twitterPos.layer(1).text.sourceText.setValue("G");
                } else if (pgPos.selection.index === 1) {
                    instaPos.layer(1).text.sourceText.setValue("F");
                    twitterPos.layer(1).text.sourceText.setValue("F");
                } else if (pgPos.selection.index === 2) {
                    instaPos.layer(1).text.sourceText.setValue("C");
                    twitterPos.layer(1).text.sourceText.setValue("C");
                }
                // SG POS
                if (sgPos.selection.index === 0) {
                    instaPos.layer(2).text.sourceText.setValue("G");
                    twitterPos.layer(2).text.sourceText.setValue("G");
                } else if (sgPos.selection.index === 1) {
                    instaPos.layer(2).text.sourceText.setValue("F");
                    twitterPos.layer(2).text.sourceText.setValue("F");
                } else if (sgPos.selection.index === 2) {
                    instaPos.layer(2).text.sourceText.setValue("C");
                    twitterPos.layer(2).text.sourceText.setValue("C");
                }
                // SF POS
                if (sfPos.selection.index === 0) {
                    instaPos.layer(3).text.sourceText.setValue("G");
                    twitterPos.layer(3).text.sourceText.setValue("G");
                } else if (sfPos.selection.index === 1) {
                    instaPos.layer(3).text.sourceText.setValue("F");
                    twitterPos.layer(3).text.sourceText.setValue("F");
                } else if (sfPos.selection.index === 2) {
                    instaPos.layer(3).text.sourceText.setValue("C");
                    twitterPos.layer(3).text.sourceText.setValue("C");
                }
                // PF POS
                if (pfPos.selection.index === 0) {
                    instaPos.layer(4).text.sourceText.setValue("G");
                    twitterPos.layer(4).text.sourceText.setValue("G");
                } else if (pfPos.selection.index === 1) {
                    instaPos.layer(4).text.sourceText.setValue("F");
                    twitterPos.layer(4).text.sourceText.setValue("F");
                } else if (pfPos.selection.index === 2) {
                    instaPos.layer(4).text.sourceText.setValue("C");
                    twitterPos.layer(4).text.sourceText.setValue("C");
                }
                // C POS
                if (cPos.selection.index === 0) {
                    instaPos.layer(5).text.sourceText.setValue("G");
                    twitterPos.layer(5).text.sourceText.setValue("G");
                } else if (cPos.selection.index === 1) {
                    instaPos.layer(5).text.sourceText.setValue("F");
                    twitterPos.layer(5).text.sourceText.setValue("F");
                } else if (cPos.selection.index === 2) {
                    instaPos.layer(5).text.sourceText.setValue("C");
                    twitterPos.layer(5).text.sourceText.setValue("C");
                }
                /*=================================
                =            HOME/AWAY            =
                =================================*/
                if (groupRight.socialMedia.home.value == true) {
                    // INSTA
                    app.project.item(90).layer(48).enabled = true;
                    app.project.item(90).layer(49).enabled = false;
                    // TWITTER
                    app.project.item(91).layer(43).enabled = true;
                    app.project.item(91).layer(44).enabled = false;
                } else {
                    // INSTA
                    app.project.item(90).layer(49).enabled = true;
                    app.project.item(90).layer(48).enabled = false;
                    // TWITTER
                    app.project.item(91).layer(44).enabled = true;
                    app.project.item(91).layer(43).enabled = false;
                }
                ///////////////////
                // DATE AND TIME //
                ///////////////////
                app.project.item(91).layer(1).text.sourceText.setValue(groupRight.datePanel.month.selection.text + "."); //MONTH
                app.project.item(91).layer(2).text.sourceText.setValue(groupRight.datePanel.day.selection.text); //DAY
                app.project.item(91).layer(3).text.sourceText.setValue(groupRight.datePanel.time.selection.text + " EST"); //TIME
                //////////////////
                // Render Queue //
                //////////////////
                /*          while (app.project.renderQueue.numItems > 0){
                          app.project.renderQueue.item(app.project.renderQueue.numItems).remove();
                          }

                          if (groupRight.socialMedia.instagram.value){
                            app.project.renderQueue.items.add(app.project.item(90));
                          }
                          if (groupRight.socialMedia.twitter.value){
                            app.project.renderQueue.items.add(app.project.item(91));
                          }*/
            }
            applyBtn.onClick = testClick;
            //Setup panel sizing and make panel resizable
            myPanel.layout.layout(true);
            myPanel.layout.resize();
            myPanel.onResizing = myPanel.onResize = function() {
                this.layout.resize();
            }
            return myPanel;
        }
        var myScriptPal = myScript_buildUI(thisObj);
        if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
            myScriptPal.center();
            myScriptPal.show();
        }
    }
    return myScript.toString();
};
