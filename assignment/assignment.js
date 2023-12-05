//write a function that calculates the factorial of a given number.//
function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}
let result = calculateFactorial(7);
console.log(result);
