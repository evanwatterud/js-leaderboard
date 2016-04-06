var gameInfo = function(){
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ]
}

function Team(name) {
  this.name = name;
  this.rank = 0;
  this.wins = 0;
  this.losses = 0;
  this.summary = function() {
    console.log("Name: " + this.name);
    console.log("Rank: " + this.rank);
    console.log("Wins: " + this.wins + " Losses: " + this.losses);
  };
}

var teams = [];

gameInfo().forEach(function(game, index) {
  var team_names = teams.map(function(team) { return team.name });
  if (team_names.indexOf(game.home_team) == -1) {
    teams.push(new Team(game.home_team));
  } else if (team_names.indexOf(game.away_team) == -1) {
    teams.push(new Team(game.away_team));
  }
});

gameInfo().forEach(function(game, index) {
  if (game.home_score > game.away_score) {
    teams.find(function(team) { return team.name == game.home_team }).wins++;
    teams.find(function(team) { return team.name == game.away_team }).losses++;
  } else {
    teams.find(function(team) { return team.name == game.away_team }).wins++;
    teams.find(function(team) { return team.name == game.home_team }).losses++;
  }
});

var sortedTeams = teams.sort(function(a, b) {
  return b.wins - a.wins;
});

sortedTeams.forEach(function(team, index) {
  team.rank = index + 1;
});

console.log("--------------------------------------------------");
console.log("| Name      Rank      Total Wins    Total Losses |");
sortedTeams.forEach(function(team, index) {
  var spaces = Array(11 - team.name.length).join(" ");
  console.log("| " + team.name + spaces + team.rank + "         " + team.wins + "             " + team.losses + "            |");
});
console.log("--------------------------------------------------");

sortedTeams.forEach(function(team, index) {
  team.summary();
});
