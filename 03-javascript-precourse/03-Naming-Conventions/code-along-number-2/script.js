// Client Brief...
// Create an application which can be used to keep track
// of a score in a football match

// 1. It's football there's two teams, so lets keep two scores going
let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;
// 2. when a team one button is clicked, increment team1 score
function handleTeamOneClick(){
    teamScoreOne = teamScoreOne + 1;
    alert("Team one's score is now: " + teamScoreOne);
}

// 3. when team two button is clicked, increment team 2 score
function handleTeamTwoClick(){
    teamScoreTwo = teamScoreTwo + 1;
    alert("Team two's score is now: " + teamScoreTwo);
}

// 4. when do we finish/stop?
function handleStopGame(){
    isGameStopped = true;
}