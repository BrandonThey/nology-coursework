//javascript file for the first javascript challenge in 03-Javascript
function calculateYearsUntilRetirement(event) {
    //getting the value of the event
    const currentAge = event.target.value;
    const retirementAge = 65;
    let yearsUntilRetirement = retirementAge - currentAge;
    alert(yearsUntilRetirement);
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting == "Hello") {
        alert("Bonjour");
    } else if (greeting == "Goodbye") {
        alert("Au revoir")
    } else {
        alert("Not recognized")
    }
}

function minutesToSeconds(event) {
    const minutes = event.target.value;
    let seconds = minutes * 60;
    alert(seconds);
}