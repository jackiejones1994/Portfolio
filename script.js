//strings immutable - cannot change individual letters, have to change the whole thing

//find stuff with brackets
var firstName = 'Ada';
var lastLetterOfFirstName = firstName[firstName.length-1];

//mad libs game
function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result +="The " + myAdjective + " "+ myNoun + " " + myVerb + " to the store " + myAdverb + "."
    return result;
}
console.log(wordBlanks("dog","big","ran","quickly"));

//can have any data type in arrays
var ourArray = ["john", 23];

//nested aka multidimensional array
var ourArray = [["the universe", 42], ["everything", 101010]];

//arrays not immutable - CAN change
var ourArray = [18,64,99];
ourArray [1] = 45;
console.log(ourArray);

//select inside multidimensional array
var myArray = [[1,2,3], [4,5,6]];
// array number and then number inside selected array
var myData = myArray [1][1];
console.log(myData); //gives 5

//push, adds array to end
var anArray = ["stimpson", "j", "cat"];
anArray.push(["happy", "joy"]);
//we get ["stimpson", "j", "cat", ["happy","joy"]];

//pop - takes the final item out from end, in this case the whole array
anArray.pop();
console.log(anArray);

//shift, like pop, but removes first item from beginning
//unshift, like push, but adds to beginning

//SUMMARY - unshift,shift,push,pop = add1st,remove1st,addLast,removeLast

//shopping list
var myList =  [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

//function
function ourReusableFunction() {
    console.log("Heyya, World");
}
ourReusableFunction();

//passing data into functions
function ourFunctionWithArgs(a,b) {
    console.log(a-b);
}
ourFunctionWithArgs(10,5); //outputs 5

//scope - visibility of variables
//if you don't use var/let/const inside a function, it becomes global automatically! need to use var/let/const.

//local variable takes precedence over global inside function
//if you don't specify return value, the return value is undefined

// assignment with returned value
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

// JSON.stringify  - way to print array into string
//if / else if statements have to be from lower to higher in logical order or will output the incorrect answer 

//bracket notation required when using objects if the name has a space in it, otherwise can use dot notation
