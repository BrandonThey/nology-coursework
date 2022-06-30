// Write a function named getDescription that:
// Takes 4 arguments: number of children, partner's name, geographic location, and job title
// outputs your statement to the console like so: "I'm currently a X living in Y, and married to X with N kids."
// call the function 3 times with 3 different values for the arguments

const getDescription = (numberOfChildren, partnersName, geographicLocation, jobTitle) => {
    const message = `I'm currently a ${jobTitle} living in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kid(s).`; 
    console.log(message);
}

getDescription(4, "Sandy", "Texas", "programmer");
getDescription(10, "John", "Washington State", "sales representative");
getDescription(1, "Lisa", "Los Angeles, California", "telemarketer");

// Lifetime supply of Snickers

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of your life (based on a constant max age)
// outputs the result to the screen like so: "You will need X to last until the ripe old age of Y"
// Call that function 3 times passing different values
// bonus: accept floating point values for amount per day and round the results to a round number

const calculateSupply = (currentAge, amountPerDay) => {
    const maxAge = 90;
    const numberOfDays = (maxAge - currentAge) * 365;
    let amountOfSnickersPerLifetime = numberOfDays * amountPerDay;
    amountOfSnickersPerLifetime = Math.round(amountOfSnickersPerLifetime);

    const message = `You will need ${amountOfSnickersPerLifetime} to last until the ripe old age of ${maxAge}`;
    console.log(message);
}

calculateSupply(65,20);
calculateSupply(90,1500);
calculateSupply(85,55.5);

// Temperature converter

// Write a function named temperatureConverter that: 
// Converts between celsius and farenheit given two arguments: temperature, metric
// outputs the results to the screen like so: "W degrees in X is Y degrees in Z."
// Test the function 3 times

const temperatureConverter = (temp, metric) => {
    let convertedTemp;
    let message;
    metric = metric.ToLower();

    if(metric == "celsius"){
        convertedTemp = (temp * 1.8) + 32;
        convertedTemp = Math.round(convertedTemp);
        message = `${temp} degrees in Celsius is ${convertedTemp} degrees in Fahrenheit.`
        console.log(message);

    }else if(metric == "farenheit"){
        convertedTemp = (temp - 32) / 1.8;
        convertedTemp = Math.round(convertedTemp);
        message = `${temp} degrees in Fahrenheit is ${convertedTemp} degrees in Celsius.`
        console.log(message);
        
    }else {
        console.log("Sorry that metric isnt recognized.")
    }
}