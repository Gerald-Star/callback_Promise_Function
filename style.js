
function myDisplay(some) {
  document.getElementById("demo").innerHTML = some;
}

//Function sequence
function myFirstDisplay() {
  myDisplay("First Class");
}

function mySecondDisplay() {
  myDisplay("Second Class");
}

//call the function
myFirstDisplay();
mySecondDisplay();//first class is displayed


//Sequence Control
//To control over when to execute a function.
//Example, do a calculation function, save the result and then call another function to display the result.

function sequenceControl(control) {
  document.getElementById("seqControl").innerHTML = control;
}

function examResult(result1, result2) {
  let sum = result1 + result2;
  return sum;
}

let result = examResult(3, 3);
sequenceControl(result);

//Or to call the examResult to display the results

function examResult2(result2, result3) {
  let add = result2 + result3;
  sequenceControl(add)

}

examResult2(5, 5)

//Both has a problem, first one you have to call the function twice
//The second, you cannot prevent the calculation from displaying the result.

//Now use the CallBack function

function myExamScores(scores) {
  document.getElementById("callBack").innerHTML = scores;
}

function myScores(examScore1, examScore2, myCallback) {
  let scoreSum = examScore1 + examScore2;
  myCallback(scoreSum);
}

myScores(4, 4, myExamScores);
//myExamCores is a callback function.
//it is passed to myCallback() as an argument.

//Note, whe you pass a function as an argument, remember not to use a parenthesis.
//Right myScores(4, 4 myExamScores);
//Wrong argument : myScores(4, 4 myExamScores());

//Asynchronous Timeout

function myAsync() {
  document.getElementById("async").innerHTML = "I love you !"
}
setTimeout(myAsync, 4000);

//Here myAsync is used as a callback
//myAsync is passed to setTimeout() as an argument
//4000 is the number of milliseconds before time-out
//myAsync is passed to setTimeout() as an argument
//I love you is called after every 4 seconds
//Note setTimeout(myAsync(), 4000) is wrong

//Or you can pass the name of the function as an argument to another function

setTimeout(function() { myFunction("I love my life !"); }, 5000);

function myFunction(life) {
  document.getElementById("value").innerHTML = life;
}