//Challenge

// 1. write a function to find the parameter of a rectangle
const calculatePerimeter = (width, height) =>{
    return width + width + height + height;
}

//testing the function console.log(calculatePerimeter(1, 1));

// 2. Write a function to find the area of a circle when given a radius, print the area to the console
const calculateArea = (radius) => {
    const area = Math.PI * (radius * radius);
    return area;
}

//testing the function console.log(calculateArea(2));

// 3. Do the same to find the circumference of a circle
const calculateCircumference = (radius) => {
    const circumference = 2 * Math.PI * radius;
    return circumference;
}

//testing the function console.log(calculateCircumference(3));