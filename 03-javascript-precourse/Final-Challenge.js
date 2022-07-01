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


// 3.Write a function that takes three numbers and returns the largest of the three numbers.
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


// 4.Write a function that takes an array of names and returns the last name from the array of names.
const getLastName = (names) => {
    return names[names.length-1];
}

// testing the getLastName function
console.log(getLastName(["Charlie", "Rob", "Andy"])); // returns “Andy”
console.log(getLastName(["Ash","Stu"])); // returns "Stu"


// 5.Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.
const allNumbersPositive = (numbers) => {
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 0){
            return false;
        }
    }
    return true;
}

// testing the allNumbersPositive function
console.log(allNumbersPositive([2,4,5])); // returns true
console.log(allNumbersPositive([-5,4,6])); // returns false