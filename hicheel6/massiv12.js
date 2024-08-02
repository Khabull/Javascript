let firstArray = prompt("duriin utguud oruul");
firstArray = firstArray.split(" ");
console.log(firstArray);
let secondArray = prompt("duriin utguud oruul");
secondArray = secondArray.split(" ");
console.log(secondArray);
let array = [...firstArray, ...secondArray];
console.log(array);
