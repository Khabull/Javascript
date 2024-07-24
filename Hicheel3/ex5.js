let x = prompt("тоо оруул");
if (isNaN(x)) {
  console.log("Not number");
} else if (x % 3 === 0 && x % 5 === 0) {
  console.log("FizzBuz");
} else if (x % 3 === 0) {
  console.log("Fizz");
} else if (x % 5 === 0) {
  console.log("Buzz");
} else {
  console.log("Input");
}
