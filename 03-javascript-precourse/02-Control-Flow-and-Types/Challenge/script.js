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