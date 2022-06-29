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
    switch (lowercaseDay) {
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

function vegetablePrices(event) {
    const vegetable = (event.target.value).toLowerCase();
    const potatoPrice = 10;
    const carrotPrice = 10;
    const brocolliPrice = 20;
    const cabbagePrice = 25;
    const asparagusPrice = 30;

    switch (vegetable) {
        case "potato":
            alert("The price of potatoes are " + potatoPrice + " dollars per kg.");
            break;
        case "carrot":
            alert("The price of carrots are " + carrotPrice + " dollars per kg.");
            break;
        case "brocolli":
            alert("The price of brocolli is " + brocolliPrice + " dollars per kg.");
            break;
        case "cabbage":
            alert("The price of cabbages are " + cabbagePrice + " dollars per kg.");
            break;
        case "asparagus":
            alert("The price of asparagus is " + asparagusPrice + " dollars per kg.");
            break;
        default:
            alert("Sorry we dont recognize that product.");
            break;
    }
}