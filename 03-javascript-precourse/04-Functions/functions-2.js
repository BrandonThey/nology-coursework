// Write a function named getDescription that:
// Takes 4 arguments: number of children, partner's name, geographic location, and job title
// outputs your statement to the console like so: "I'm currently a X living in Y, and married to X with N kids."
// call the function 3 times with 3 different values for the arguments

const getDescription = (numberOfChildren, partnersName, geographicLocation, jobTitle) => {
    console.log(`I'm currently a ${jobTitle} living in ${geographicLocation}, and married to 
                    ${partnersName} with ${numberOfChildren} kids.`)
}

getDescription()