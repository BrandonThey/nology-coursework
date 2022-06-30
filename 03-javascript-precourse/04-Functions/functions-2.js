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

const calculateSupply = (age, amountPerDay) => {
    const numberOfDays = age * 365;
    let amountOfSnickers = numberOfDays * amountPerDay;
    amountOfSnickers = Math.round(amountOfSnickers);

    const message = `You will need ${amountOfSnickers} to last until the ripe old age of ${age}`;
    console.log(message);
}

