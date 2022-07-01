// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.
const isNumberPositive = (numberToTest) => {
    if(numberToTest > 0){
        return true;
    } else{
        return false
    }
} 

// testing the first function
console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(10)); // returns true

// 2. Write a function that takes a number of days and converts it into an age.
const convertDaysToAge = (numberOfDays) => {
    ageInYears = Math.floor(numberOfDays / 365);
    return ageInYears;
}

// testing the convert days to age function
console.log(convertDaysToAge(3650)); // returns 10
console.log(convertDaysToAge(6570)); // returns 18