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

const getLargestNumber = (num1, num2, num3) => {
    if(num1 > num2 && num1 > num3){
        return num1;
    } else if(num2 > num1 && num2 > num3){
        return num2;
    } else{
        return num3;
    }
}

// testing the getLargestNumber function
console.log(getLargestNumber(2 ,1, 4)); // returns 4
console.log(getLargestNumber(6,2,3)); // returns 6