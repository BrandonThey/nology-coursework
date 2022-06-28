//javascript file for the second javascript challenge in 03-Javascript
function checkPosOrNeg(number) {
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is neither positive nor negative.");
    }

    return 0;
}

function findGreatestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("The greatest number is " + num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log("The greatest number is " + num2);
    } else {
        console.log("The greatest number is " + num3);
    }

    return 0;
}

function daysUntilWeekend(day) {
    let lowercaseDay = day.toLowerCase();
    switch(lowercaseDay){
        case "sunday":
            console.log("It is the weekend!");
            break;
        case "monday":
            console.log("Only 4 more days until the weekend.");
            break;
        case "tuesday":
            console.log("Only 3 more days until the weekend.");
            break;
        case "wednesday":
            console.log("Only 2 more days until the weekend.");
            break;
        case "thursday":
            console.log("Only 1 more days until the weekend.");
            break;
        case "friday":
            console.log("The last day until the weekend.");
            break;
        case "saturday":
            console.log("It is the weekend!");
            break;
        default:
            console.log("Sorry we didn't recognize that day.");
            break;
    }
}