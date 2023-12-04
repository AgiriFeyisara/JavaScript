//Create a function that checks if the input/parameter is an even number.//

function checkForEven() {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(i + "is even number");
    } else {
      console.log(i + " is odd number");
    }
  }
}
checkForEven(1, 20);

//Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter.//

function printnum(n1, n2) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
printnum(2, 10);

//Create a function that sum the values in-between two numbers. e.g calcFunc(1,3) returns 6 i.e. 1+2+3.

function sumValue(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}
let total = sumValue(5, 20);
console.log("The sum between 5 and 20 is", total);
