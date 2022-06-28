//javascript file for the second javascript code alog in 03-Javascript
function handleCalculateGrade(event) {
    const grade = event.target.value;
    if (!grade) {
        return;
    }
    let uppercaseGrade = grade.toUpperCase();
    let percentage;
    switch (uppercaseGrade) {
        case "A":
            percentage = "90-100%";
            break;
        case "B":
            percentage = "75-90%";
            break;
        case "C":
            percentage = "50-75";
            break;
        case "D":
            percentage = "25-50%";
            break;
        case "E":
            percentage = "0-25%";
            break;
        default:

    }

    alert("The percentage was " + percentage);
}