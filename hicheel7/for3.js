let too = prompt("toonuud oruul");
let numbers = too.split(" ");
let array = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    // let element = numbers[i];
    array.push(numbers[i]);
  }
}

if (array.length == 0) {
  alert("none");
} else {
  alert(array);
}
