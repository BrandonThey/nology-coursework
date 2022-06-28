//javascript file for the first javascript challenge in 03-Javascript
function calculateYearsUntilRetirement(event){
    //getting the value of the event
    const currentAge = event.target.value;
    const retirementAge = 65;
    let yearsUntilRetirement = retirementAge - currentAge;
    alert(yearsUntilRetirement);
}