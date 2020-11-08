// Project Euler: Problem 1: Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
  let result = 0;
  number -= 1;
  number -= number % 3 < number % 5 ? number % 3 : number % 5;
  while (number > 0) {
    result += number;
    if (number % 5 < 3 && number % 5 != 0) {
      number -= number % 5;
    } else if (number % 3 == 0) {
      number -= 3;
    } else {
      number -= number % 3;
    }
  }
  return result;
}
