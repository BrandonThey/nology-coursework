// if a name, is a coaches name, log "It's a coach"
const name = "Michael";
if(name == "Michael"){
    console.log("It's a coach");
}

// If a greeting, is bonjour, log "comment ca va"
const greeting = "bonjourno";
if(greeting == "bonjour"){
    console.log("comment ca va");
}

// If a score, reaches ten, log "you won the game"
let score = 5;
if(score >= 10){
    console.log("You won the game");
}

// If age, is greater than 65, "time to retire"
let age = 67;
if (age > 65) {
    console.log("Time to retire");
}

// if hasCovid, log "Time to isoloate", else "Keep social distancing"
hasCovid = false;
if (hasCovid) {
    console.log("Time to isolate");
}
else {
    console.log("Keep social distancing");
}

// If age, greater than 18, and isBritish, "You can vote in the next election"
age = 19;
const isBritish = true;
if (age >= 18 && isBritish) {
    console.log("You can vote in the next election");
}