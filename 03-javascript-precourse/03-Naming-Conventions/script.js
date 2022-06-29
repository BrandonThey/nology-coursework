//javascript file for the third javascript code along in 03-Javascript
let currentHeadline = "News in the world today";
const currentArticle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const hasPassedTest = true;
const amountOfWords = 957;

if(currentHeadline.length > 15){
    currentHeadline = currentHeadline.substring(0,15) + "...";
}

console.log("Nology Post 2021");
console.log(`Headling: ${currentHeadline}`);
console.log(currentArticle);

logWordAndCharCount(amountOfWords, currentArticle);

function logWordAndCharCount(amountOfWords, currentArticle) {
    console.log("The amount of words are: " + amountOfWords)
    console.log("The amount of characters are: " + currentArticle.length)
}